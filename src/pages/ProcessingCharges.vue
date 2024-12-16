<template>
  <div>
    <MenuStyle1 />
    <PageHeader
      pageTitle="Article Processing Charges"
      parentPage="For Authors"
    />
    <ProcessingChargesComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import ProcessingChargesComponentVue from "../components/page_components/for_authors/ProcessingChargesComponent.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    ProcessingChargesComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Article Processing Charges | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: 'Find out the Article Processing Charges (APC) for publishing with IJIRE. Get details on fees, payment options, and publication benefits.',
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
            "name": "Article Processing Charges",
            "description": "Find out the Article Processing Charges (APC) for publishing with IJIRE. Get details on fees, payment options, and publication benefits.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Article Processing Charges",
              "description": "Information about the fees required for article processing at IJIRE, along with the benefits and payment methods available."
            }
          }
        }
      ]
    };
  }
};
</script>

<style></style>
