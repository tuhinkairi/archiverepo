<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Manuscript Submission" parentPage="For Authors" />
    <ManuscriptSubmissionComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import ManuscriptSubmissionComponentVue from "../components/page_components/for_authors/ManuscriptSubmissionComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    ManuscriptSubmissionComponentVue,
    Footer,
  },
  
};
</script>

<style>
</style>