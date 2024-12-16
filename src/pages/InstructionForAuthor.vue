<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Instruction For Author" parentPage="For Authors" />
    <InstructionForAuthorComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import InstructionForAuthorComponentVue from "../components/page_components/for_authors/InstructionForAuthorComponent.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    InstructionForAuthorComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Instruction For Author | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: "Review IJIRE's Instructions for Authors. Find essential guidelines on manuscript formatting, preparation, and submission for a smooth process.",
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
            "name": "Instruction For Author",
            "description": "Review IJIRE's Instructions for Authors. Find essential guidelines on manuscript formatting, preparation, and submission for a smooth process.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "Instruction For Author",
              "description": "Essential guidelines on manuscript formatting, preparation, and submission process for IJIRE."
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
