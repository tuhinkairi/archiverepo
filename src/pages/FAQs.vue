<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="FAQs" parentPage="About" />
    <FaqComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1';
import PageHeader from '@/components/layout/PageHeader';
import FaqComponentVue from '../components/page_components/about_components/FaqComponent.vue';
import Footer from '@/components/layout/Footer';

export default {
  name: 'Blogs',
  components: {
    MenuStyle1,
    PageHeader,
    FaqComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'FAQs | International Journal on Innovative Research | IJIRE',
      meta: [
        {
          name: 'description',
          content:
            'Get answers to common questions on the IJIRE FAQ page. Find info on submissions, publication processes, and more to assist with your research.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: window.location.href,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "FAQs",
            "description": "Get answers to common questions on the IJIRE FAQ page. Find info on submissions, publication processes, and more to assist with your research.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I submit my research paper to IJIRE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To submit your research paper to IJIRE, visit our 'Submissions' section, follow the provided guidelines, and upload your manuscript."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the publication fees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The publication fees are outlined on our 'Fees' page, where you can find information on costs based on manuscript length and other factors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does the review process take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The review process typically takes 4 to 6 weeks, depending on the volume of submissions and reviewer availability."
                  }
                }
              ]
            }
          }
        }
      ]
    };
  },
};
</script>

<style>
/* Add any styles if needed */
</style>
