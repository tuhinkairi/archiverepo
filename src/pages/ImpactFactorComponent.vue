<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Impact Factor" parentPage="For Authors" />
    <impact-factor />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import ImpactFactor from "../components/page_components/about_components/ImpactFactor.vue";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    ImpactFactor,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Impact Factor | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content:
            "Explore IJIRE's Impact Factor. Understand how we gauge the influence of our publications and their impact within the research community.",
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
            "name": "Impact Factor",
            "description":
              "Explore IJIRE's Impact Factor. Understand how we gauge the influence of our publications and their impact within the research community.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Impact Factor",
              "description": "Details on IJIRE's Impact Factor and how it reflects the influence of our published research within the scientific community."
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
