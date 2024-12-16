<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Download Forms" parentPage="For Authors" />
    <!-- <FormsComponent/> -->
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
// import FormsComponent from "../components/page_components/for_authors/FormsComponent.vue";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    Footer,
    // FormsComponent
  },
};
</script>

<style>
</style>