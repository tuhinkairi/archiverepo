<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Ethics And Policies" parentPage="About" />
    <EthicsComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EthicsComponentVue from "../components/page_components/about_components/EthicsComponent.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "EthicsAndPolicies",
  components: {
    MenuStyle1,
    PageHeader,
    EthicsComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Ethics And Policies | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "Explore IJIRE's ethics and policies. Learn about our commitment to research integrity, ethical practices, and transparent publication standards."
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
            "name": "Ethics And Policies",
            "url": window.location.href,
            "description": "Explore IJIRE's ethics and policies. Learn about our commitment to research integrity, ethical practices, and transparent publication standards.",
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
