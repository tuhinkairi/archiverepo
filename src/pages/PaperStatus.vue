<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Paper Status" parentPage="For Authors" />
    <PaperStatusComponent />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import PaperStatusComponent from "../components/page_components/for_authors/PaperStatusComponent.vue";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    PaperStatusComponent,
    Footer,
  },
  metaInfo() {
      return {
          title: 'Paper Status | International Journal | IJIRE',
          meta: [
              {
                  name: 'description',
                  content: 'Check the status of your submitted paper with IJIRE. Track its progress through the review and publication process with our easy-to-use system.',
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
                      "name": "Paper Status",
                      "description": "Check the status of your submitted paper with IJIRE. Track its progress through the review and publication process with our easy-to-use system.",
                      "url": window.location.href,
                      "mainEntity": {
                          "@type": "WebPageElement",
                          "name": "Paper Status Section",
                          "description": "Access information about the status of your submitted paper, including tracking its review and publication progress."
                      }
                  }
              }
          ]
      };
  }
};
</script>

<style>
</style>
