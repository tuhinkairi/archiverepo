<template>
  <div>
    <MenuStyle1 />
    <PageHeader
      pageTitle="Editors And Reviewers"
      parentPage="Home"
    />
    <EditorsAndReviewers />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EditorsAndReviewers from '../components/page_components/EditorsAndReviewers/EditorsAndReviewers.vue'
import Footer from "@/components/layout/Footer";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    EditorsAndReviewers,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Editors And Reviewers | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "Explore IJIRE's editors and reviewers. Discover the experts dedicated to maintaining high standards and rigorous peer review for our publications.",
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
            "name": "Editors And Reviewers",
            "description": "Explore IJIRE's editors and reviewers. Discover the experts dedicated to maintaining high standards and rigorous peer review for our publications.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Editors and Reviewers Section",
              "description": "Information about the editors and reviewers who oversee the publication process and ensure quality standards."
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
