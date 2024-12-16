<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <BannerStyle1 />
    <FeaturesStyle1 />

    <!-- <CompaniesSlider /> -->
    <Services3Column />
    <!-- for authors -->
    <Speciality />
    <!-- IJIRE FEATURES -->  
    <!-- <ProjectsHome /> -->
    <!-- OUR WORKS -->
    <Publish />
    <PostsHome /> 
    <!-- <Reviews /> --> 
    <Indexing/>

    <LetPublish/>
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1"; 
import BannerStyle1 from "@/components/page_components/home/home_1/BannerStyle1";
import FeaturesStyle1 from "@/components/page_components/home/home_1/FeaturesStyle1";
// import CompaniesSlider from "@/components/common/companiesSlider";
import Services3Column from "@/components/page_components/home/home_1/Services3Column";
// import ProjectsHome from "@/components/page_components/home/ProjectsHome";
import Speciality from "@/components/page_components/home/Speciality";
// import Reviews from "@/components/common/Reviews";
import Publish from "@/components/page_components/home/home_1/Publish";
import PostsHome from "@/components/page_components/home/PostsHome";
import LetPublish from "@/components/page_components/home/LetPublish";
import Indexing from "@/components/page_components/home/home_1/Indexing"
import Footer from "@/components/layout/Footer";

export default {
  name: "Home1",
  components: {
    TopHeader,
    MenuStyle1,
    BannerStyle1,
    FeaturesStyle1,
    // CompaniesSlider,
    Services3Column,
    // ProjectsHome,
    Speciality,
    PostsHome,

    Footer,
    Publish,
    Indexing,
    LetPublish
  },
  metaInfo() {
    return {
      title: 'International Journal of Innovative Research in Engineering',
      meta: [
        {
          name: 'description',
          content: 'IJIRE is a leading international journal on global advancements and cutting-edge engineering research, showcasing innovative solutions and breakthroughs.',
        },
        {
          name: 'keywords',
          content: 'agency, business, corporate, company, clean, modern, personal, portfolio, professional, startup, studio',
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
            "@type": "Organization",
            "name": "International Journal of Innovative Research in Engineering",
            "url": window.location.href,
            "logo": "https://example.com/logo.png", // Replace with your actual logo URL
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.twitter.com/yourpage"
              // Add other social media profiles as needed
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-5555", // Replace with your contact number
              "contactType": "Customer Service",
              "areaServed": "US", // Optional: Specify the area served
              "availableLanguage": ["English"] // Optional: Languages supported
            }
          }
        },
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home Page",
            "url": window.location.href,
            "description": "IJIRE is a leading international journal on global advancements and cutting-edge engineering research, showcasing innovative solutions and breakthroughs.",
            "publisher": {
              "@type": "Organization",
              "name": "International Journal of Innovative Research in Engineering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png" // Replace with your actual logo URL
              }
            }
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
