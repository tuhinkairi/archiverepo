<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Mission And Scope" parentPage="About" />
    <MissionComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import MissionComponentVue from "../components/page_components/about_components/MissionComponent.vue";

export default {
  name: "MissionAndScope",
  components: {
    MenuStyle1,
    PageHeader,
    MissionComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Mission And Scope | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "Discover IJIRE's mission to advance Engineering with original research and our scope covering all major engineering disciplines and interdisciplinary fields",
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
            "name": "Mission And Scope",
            "url": window.location.href,
            "description": "Discover IJIRE's mission to advance Engineering with original research and our scope covering all major engineering disciplines and interdisciplinary fields.",
            "publisher": {
              "@type": "Organization",
              "name": "International Journal of Innovative Research in Engineering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png" // Replace with actual logo URL
              }
            }
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
