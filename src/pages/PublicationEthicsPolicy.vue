<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Publication Ethics Policy" parentPage="About" />
    <PublicationComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import PublicationComponentVue from "../components/page_components/about_components/PublicationComponent.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "PublicationEthicsPolicy",
  components: {
    MenuStyle1,
    PageHeader,
    PublicationComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Publication Ethics Policy | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "Explore IJIRE's Publication Ethics Policy. Learn about our commitment to transparency, integrity, and responsible research practices in publishing.",
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
            "name": "Publication Ethics Policy",
            "url": window.location.href,
            "description": "Explore IJIRE's Publication Ethics Policy. Learn about our commitment to transparency, integrity, and responsible research practices in publishing.",
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

<style>
</style>
  