<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Call For Papers" parentPage="For Authors" />
    <CallForPaperComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import CallForPaperComponentVue from "../components/page_components/for_authors/CallForPaperComponent.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    CallForPaperComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Call For Paper | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "Get all the details for submitting your research paper to IJIRE. Find submission guidelines, formatting requirements, and the review process.",
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
            "name": "Call For Papers",
            "description": "Get all the details for submitting your research paper to IJIRE. Find submission guidelines, formatting requirements, and the review process.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Call For Paper",
              "description": "Detailed submission guidelines, formatting requirements, and review processes for submitting research papers to IJIRE."
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
