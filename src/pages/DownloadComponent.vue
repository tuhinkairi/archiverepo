<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Downloads" parentPage="For Authors" />
    <Downloads />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import Downloads from "../components/page_components/for_authors/Downloads.vue";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    Downloads,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Downloads | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: 'Download the Manuscript Template and Copyrights Form for IJIRE. Ensure your paper meets submission standards and secure the rights for publication.',
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
            "name": "Downloads",
            "description": "Download the Manuscript Template and Copyrights Form for IJIRE. Ensure your paper meets submission standards and secure the rights for publication.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Downloads Section",
              "description": "Access essential downloads including the Manuscript Template and Copyrights Form for authors submitting to IJIRE."
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
