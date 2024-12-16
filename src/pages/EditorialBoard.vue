<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Editorial Board" parentPage="About" />
    <EditorialComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EditorialComponentVue from "../components/page_components/about_components/EditorialComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    EditorialComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Editorial Board | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content: 'Explore the Editorial Board of IJIRE. Learn about our experts and their roles in overseeing the review and publication process of cutting-edge research.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: window.location.href,
        },
      ],
    };
  }
};
</script>

<style>
</style>