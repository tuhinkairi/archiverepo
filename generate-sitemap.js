const apiService = require('./src/util/backend-api.js');
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const sitemapStream = new SitemapStream({ hostname: 'https://theijire.com/' });

async function fetchYearListing() {
  try {
    const response = await apiService.postData('archiveYearListing');
    return response.data;
  } catch (error) {
    console.error('Error fetching year listing:', error);
    return {};
  }
}

async function fetchPaperListData(year, volume, issue) {
  try {
    const response = await apiService.postData('archivePaperListing', { year, volume, issue });
    return response.data;
  } catch (error) {
    console.error('Error fetching paper list data:', error);
    return [];
  }
}

async function fetchPaperDetails(paperId) {
  try {
    const response = await apiService.postData('archivePaper', { paperid: paperId });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers['retry-after'];
      console.log(`Rate limit exceeded. Retrying after ${retryAfter} seconds.`);
      setTimeout(() => {
        fetchPaperDetails(paperId);
      }, retryAfter * 1000);
    } else {
      console.error('Error fetching paper details:', error);
    }
    return null;
  }
}

async function generateSitemap() {
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/ethicsurl', changefreq: 'monthly', priority: 0.8 },
    { url: '/blogs', changefreq: 'monthly', priority: 0.8 },
    { url: '/mission-and-scope', changefreq: 'monthly', priority: 0.8 },
    { url: '/editorial-board', changefreq: 'monthly', priority: 0.8 },
    { url: '/peer-review-policy', changefreq: 'monthly', priority: 0.8 },
    { url: '/publication-ethics-policy', changefreq: 'monthly', priority: 0.8 },
    { url: '/indexing-and-abstracting', changefreq: 'monthly', priority: 0.8 },
    { url: '/faqs', changefreq: 'monthly', priority: 0.8 },
    { url: '/topics', changefreq: 'monthly', priority: 0.8 },
    { url: '/call-for-papers', changefreq: 'monthly', priority: 0.8 },
    { url: '/instruction-for-author', changefreq: 'monthly', priority: 0.8 },
    { url: '/manuscript-submission', changefreq: 'monthly', priority: 0.8 },
    { url: '/guidance-for-ems', changefreq: 'monthly', priority: 0.8 },
    { url: '/article-processing-charges', changefreq: 'monthly', priority: 0.8 },
    { url: '/downloads', changefreq: 'monthly', priority: 0.8 },
    { url: '/impact-factor', changefreq: 'monthly', priority: 0.8 },
    { url: '/copyright-form', changefreq: 'monthly', priority: 0.8 },
    { url: '/paper-status', changefreq: 'monthly', priority: 0.8 },
    { url: '/editorsandreviewers', changefreq: 'monthly', priority: 0.8 },
    { url: '/archives', changefreq: 'weekly', priority: 0.9 },
    { url: '/404', changefreq: 'yearly', priority: 0.5 }
  ];

  urls.forEach(url => sitemapStream.write(url));

  const yearList = await fetchYearListing();

  if (yearList && yearList.archives) {
    const archives = yearList.archives;

    for (const year in archives) {
      const volumeData = archives[year];

      for (const volume in volumeData) {
        const issues = volumeData[volume];

        for (const issue of issues) {
          const paperListData = await fetchPaperListData(year, volume, issue);

          if (paperListData && Array.isArray(paperListData.papersList)) {
            const papersList = paperListData.papersList;

            papersList.forEach((paper) => {
              const { year, volume, issue } = paper;

              sitemapStream.write({
                url: `/archives/paperlist?year=${year}&volume=${volume}&issue=${issue}`,
                changefreq: 'monthly',
                priority: 0.8
              });
            });

            const paperDetailsPromises = Object.values(paperListData).flatMap((papers) =>
              papers.map(async (paper) => {
                const { paper_id, paper_title } = paper;

                const details = await fetchPaperDetails(paper_id);

                if (details) {
                  sitemapStream.write({
                    url: `/archives/paper-details?paperid=${paper_id}&papertitle=${encodeURIComponent(paper_title)}`,
                    changefreq: 'monthly',
                    priority: 0.8,
                  });

                  sitemapStream.write({
                    url: details.paperdetails.paper_url,
                    changefreq: 'monthly',
                    priority: 0.5,
                  });
                }
              })
            );
            await Promise.all(paperDetailsPromises);
          }
        }
      }
    }
  } else {
    console.warn('No dynamic URLs added: Year list data is empty or malformed.');
  }

  sitemapStream.end();

  try {
    const sitemapData = await streamToPromise(sitemapStream);
    fs.writeFileSync('./public/sitemap.xml', sitemapData.toString());
    console.log('Sitemap generated successfully.');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

generateSitemap();