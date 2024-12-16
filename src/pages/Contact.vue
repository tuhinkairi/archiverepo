<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Contact Us" parentPage="Home" />
    <AddressBox />
    <!-- <CustomProjects /> -->
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import AddressBox from "@/components/page_components/contact/AddressBox";
// import CustomProjects from '@/components/common/CustomProjects'
import Footer from "@/components/layout/Footer";

export default {
  name: "Contact",
  components: {
    TopHeader,
    MenuStyle1,
    PageHeader,
    AddressBox,
    // CustomProjects,
    Footer,
  },
  metaInfo() {
      return {
          title: 'Contact Us | International Journal | IJIRE',
          meta: [
              {
                  name: 'description',
                  content: 'Get in touch with IJIRE for support with publishing your paper. Find contact details for questions about submissions, fees, and the review process.',
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
                "name": "Contact Us",
                "description": "Get in touch with IJIRE for support with publishing your paper. Find contact details for questions about submissions, fees, and the review process.",
                "url": window.location.href,
                "mainEntity": {
                  "@type": "Organization",
                  "name": "International Journal of Research and Innovation in Education (IJIRE)",
                  "url": "https://www.ijire.com", // Replace with your journal's actual URL
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-800-555-5555", // Replace with actual contact number
                    "contactType": "customer support",
                    "areaServed": "Worldwide",
                    "availableLanguage": "English"
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
</style>
