<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Peer Review Policy" parentPage="About" />
    <PeerReviewComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import PeerReviewComponentVue from "../components/page_components/about_components/PeerReviewComponent.vue";

export default {
  name: "PeerReviewPolicy",
  components: {
    MenuStyle1,
    PageHeader,
    PeerReviewComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Peer Review Policy | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "IJIRE's double-blind peer review ensures rigorous, confidential evaluation. Learn about our commitment to high standards and prompt publication decisions.",
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
            "name": "Peer Review Policy",
            "url": window.location.href,
            "description": "IJIRE's double-blind peer review ensures rigorous, confidential evaluation. Learn about our commitment to high standards and prompt publication decisions.",
            "publisher": {
              "@type": "Organization",
              "name": "International Journal of Innovative Research in Engineering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png" // Replace with your actual logo URL
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
