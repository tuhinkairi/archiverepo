<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Topics" parentPage="For Authors" />
    <TopicsComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import TopicsComponentVue from "../components/page_components/for_authors/TopicsComponent.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    TopicsComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Topics | International Journal on Innovative Research| IJIRE',
      meta: [
        {
          name: 'description',
          content: "Explore IJIRE's coverage of Engineering, Technology, and Applied Sciences. Discover research advancements and innovations across these fields.",
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
            "name": "Topics",
            "description": "Explore IJIRE's coverage of Engineering, Technology, and Applied Sciences. Discover research advancements and innovations across these fields.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Research Topics",
              "description": "Discover key research topics covered in IJIRE, including Engineering, Technology, and Applied Sciences."
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
