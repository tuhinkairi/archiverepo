<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Blogs" parentPage="About" />
    <BlogsComponentVue />
    <Footer />
  </div>
</template>


<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import BlogsComponentVue from "../components/page_components/about_components/BlogsComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    BlogsComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Blogs | International Journal on Innovative Research | IJIRE',
      meta: [
        {
          name: 'description',
          content: 'Explore the latest blogs on innovation and education at IJIRE. Stay updated with insightful articles and trends in research and education.',
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