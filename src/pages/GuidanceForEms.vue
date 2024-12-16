<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Editorial management system (Guidance)" parentPage="For Authors" />
    <GuidanceForEmsIjire />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import GuidanceForEmsIjire from "../components/page_components/for_authors/GuidanceForEmsIjire.vue";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    GuidanceForEmsIjire,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Editorial management system | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: 'Get guidance on using the IJIRE Editorial Management System. Get tips for managing submissions, reviews, and the publication process.',
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
            "name": "Editorial management system (Guidance)",
            "description": "Get guidance on using the IJIRE Editorial Management System. Get tips for managing submissions, reviews, and the publication process.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Editorial management system (Guidance)",
              "description": "Guidance for managing submissions, reviews, and the publication process using the IJIRE Editorial Management System."
            }
          }
        }
      ]
    };
  }
};
</script>

<style></style>
