
// import apiService from './src/util/backend-api.js';
// import fs from 'fs';
// import { SitemapStream, streamToPromise } from 'sitemap';
// import axios from 'axios';


const apiService = require('./src/util/backend-api.js');
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const axios = require('axios');

const sitemapStream = new SitemapStream({ hostname: 'https://theijire.com/' });



async function fetchYearListing() {
  try {
    const response = await apiService.postData('archiveYearListing');
    // console.log('Year listing data:', response.data);
    return response.data;  // Make sure the correct structure is returned
  } catch (error) {
    console.error('Error fetching year listing:', error);
    return {};  // Return an empty object in case of an error
  }
}


async function fetchPaperListData(year, volume, issue) {
  try {
    const response = await apiService.postData('archivePaperListing', { year, volume, issue });
    // console.log('Paper list data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching paper list data:', error);
    return [];
  }
}

// async function fetchPaperDetails(paperId) {
//   try {
//     const response = await apiService.postData('archivePaper', { paperid: paperId });
//     // console.log(`Paper details for ID ${paperId}:`, response.data);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching details for paper ID ${paperId}:`, error);
//     return null;
//   }
// }

async function fetchPaperDetails(paperId) {
  try {
    // Make the API request
    const response = await apiService.postData('archivePaper', { paperid: paperId });
    // console.log('Paper Details:', response.data);
    return response.data;
  } catch (error) {
    // Handle error when the request fails
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers['retry-after'];
      console.log(`Rate limit exceeded. Retrying after ${retryAfter} seconds.`);
      // Retry after the specified time
      setTimeout(() => {
        fetchPaperDetails(paperId);
      }, retryAfter * 1000);
    } else {
      console.error('Error fetching paper details:', error);
    }
    return null;
  }
}


// Main function to generate the sitemap
async function generateSitemap() {
  // Static routes
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

  // Write static URLs to sitemap
  urls.forEach(url => sitemapStream.write(url));







  const yearList = await fetchYearListing();
  // console.warn('dsfsdf' + yearList);
  
  if (yearList && yearList.archives) {
    const archives = yearList.archives;
  
    // Loop through the archives
    for (const year in archives) {
      const volumeData = archives[year];
  
      // Loop through the volumes for each year
      for (const volume in volumeData) {
        const issues = volumeData[volume];
  
        // Loop through the issues for each volume
        for (const issue of issues) {

          const paperListData = await fetchPaperListData(year, volume, issue);
          
  
          if (paperListData && Array.isArray(paperListData.papersList)) {
            const papersList = paperListData.papersList;
          
            // Iterate through the papers list
            papersList.forEach((paper) => {
              const { year, volume, issue } = paper;

              // console.log('karan' + year);
              // console.log('karan' + volume);
              // console.log('karan' + issue);

              sitemapStream.write({
                url: `/archives/paperlist?year=${year}&volume=${volume}&issue=${issue}`,
                changefreq: 'monthly',
                priority: 0.8
              });
              // console.log(`Added paperlist URL for year ${year}, volume ${volume}, issue ${issue}`);
            });

            const paperDetailsPromises = Object.values(paperListData).flatMap((papers) =>
              papers.map(async (paper) => {

                const { paper_id, paper_title } = paper;

                const details = await fetchPaperDetails(paper_id);
              
                if (details) {

                  // Add the paper-details URL
                  sitemapStream.write({
                    url: `/archives/paper-details?paperid=${paper_id}&papertitle=${encodeURIComponent(paper_title)}`,
                    changefreq: 'monthly',
                    priority: 0.8,
                  });
                  // console.log(`Added paper-details URL for paper ID ${paper_id}`);
            
                  // Add the paper_url directly
                  sitemapStream.write({
                    url: details.paperdetails.paper_url,
                    changefreq: 'monthly',
                    priority: 0.5, // Adjust priority as needed for direct PDF URLs
                  });
                  // console.log(`Added paper URL for paper ID ${details.paper_url}`);
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
  
  


  // End the stream and save to sitemap.xml
  sitemapStream.end();

  try {
    const sitemapData = await streamToPromise(sitemapStream);
    fs.writeFileSync('./public/sitemap.xml', sitemapData.toString());
    console.log('Sitemap generated successfully.');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

// Run sitemap generation
generateSitemap();
