<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader :pageTitle="pageTitle" parentPage="Home" />
    <section class="pricing-area">
      <ArchivesVue @update-title="handleUpdateTitle" />
    </section>
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader"; // title
import ArchivesVue from "../components/page_components/Archives/Archives.vue";

import Footer from "@/components/layout/Footer";
import CustomProjects from "../components/common/CustomProjects.vue";

export default {
  name: "Archives",
  components: {
    TopHeader,
    MenuStyle1,
    PageHeader,
    ArchivesVue,
    Footer,
    CustomProjects, // is this created by u
  },
  
  data() {
    return {
      pageTitle: "Archives",
    };
  },
  methods: {
    handleUpdateTitle(newTitle) {
      this.pageTitle = newTitle;
      console.log("New title received:", this.pageTitle);
    },
  },
};
</script>

<style scoped></style>
