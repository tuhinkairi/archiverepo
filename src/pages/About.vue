<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="About" parentPage="Home" />
    <EthicsAndPolicies />
    <CompaniesSlider />
    <OurTeam />
    <Experience />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EthicsAndPolicies from "@/components/page_components/about_components/EthicsComponent";
import CompaniesSlider from "@/components/common/companiesSlider";
import Reviews from "@/components/common/Reviews";
import Footer from "@/components/layout/Footer";
import OurTeam from "@/components/page_components/about_components/OurTeam";
import Experience from "@/components/page_components/about_components/Experience";

export default {
  name: "About",
  components: {
    TopHeader,
    MenuStyle1,
    PageHeader,
    EthicsAndPolicies,
    CompaniesSlider,
    OurTeam,
    Experience,
    Reviews,
    Footer,
  },
};
</script>

<style scoped>
</style>
