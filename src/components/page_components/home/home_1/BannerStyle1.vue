<template>
  <div>
    <section class="banner">
      <!-- <div class="shape-03 text-center">
        <img src="@/assets/Images/Diamond.png" class="wow animate__animated animate__fadeInDown animate__delay-1s"
          alt="Habu" />
      </div> -->

      <VueSlickCarousel v-bind="settings" class="home-slider">
        <template #prevArrow>
          <button class="slick-prev slick-arrow">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
          </button>
        </template>
        <div class="home-slider-content">
          <div class="container position-relative">
            <div class="banner-floating-text ijireHeading">
              <p
                class="wow animate__animated animate__fadeInDown animate__delay-1s"
              >
                IJIRE
              </p>
            </div>
            <div class="row justify-content-between">
              <div class="col-lg-12 col-md-12">
                <div
                  class="banner-text wow animate__animated animate__fadeInDown"
                >
                  <h1 class="heading-title">
                    International Journal of Innovative Research in Engineering
                  </h1>
                  <p class="banner-sub-content ">
                    <span class="essn-content">e-ISSN:2582-8746</span>, Follows
                    UGC-CARE Guidelines
                  </p>
                  <p class="banner-sub-content sub-bold-content">
                    An International Scholarly Open Access Journal,
                    Peer-reviewed, Refereed Journal
                  </p>
                  <p class="banner-sub-content">
                    High Impact factor, Bi-Monthly, Multidisciplinary Journal
                  </p>
                  <p class="banner-sub-content">
                    CrossRef DOI (Digital Object Identifier) allotted to all
                    published papers. Indexed by Google Scholar
                    ,Elsevier-Mendeley and many other research databases
                  </p>
                  <div class="row justify-content-center">
                    <div class="banner-button">
                      <a
                        href="http://editorial.fdrpjournals.org/login?journal=1"
                        class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button"
                        >SUBMIT YOUR Article</a
                      >
                    </div>
                    <div class="banner-button">
                      <a
                        href="http://editorial.fdrpjournals.org/login?journal=1"
                        class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button"
                      >
                        Author Login</a
                      >
                    </div>
                  </div>
                  <!-- <router-link to="/contact-us" class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button" >SUBMIT YOUR PAPER</router-link> -->
                </div>
              </div>
              <!-- <div class="col-xl-5 col-lg-6 col-md-6">
                <div class="banner-image wow animate__animated animate__fadeInRight">
                  <img src="../../../../assets/Images/GlobalPublisherOne.png" height="480" width="590" alt="Habu" />
                  <div class="shape-0">
                    <img src="@/assets/Images/dotOne.png"
                      class="wow animate__animated animate__fadeInUp animate__delay-1s" alt="Habu" />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </VueSlickCarousel>

      <div class="shape-01 banner-ellipse">
        <img
          src="@/assets/Images/Ellipse.png"
          class="wow animate__animated animate__pulse animate__infinite"
          alt="Habu"
        />
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "BannerStyle1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
      },
    };
  },
};
</script>

<style>
@media screen and (max-width: 991.5px) {
  .banner-image {
    background-image: url("~@/assets/banner/home_banner.png");
    height: 74%;
    background-position-x: 68%;
    background-size: cover;
  }
}

.banner-text h1 {
  text-align: center;
}

.banner-text p {
  margin-left: 30px;
}

.ijireHeading p {
  font-size: 2em;
  margin: 0.67em 0;
}
.ijireHeading p {
  /*   margin: 1.45em 0;
  margin-top: 290px; */
  margin-right: 0px;
  margin-bottom: 1.45em;
  margin-left: 0px;
}
.banner-floating-text p {
  font-size: 200px;
  font-family: Poppins, sans-serif;
  color: rgba(30, 42, 120, 0.2);
  font-weight: 700;
}
.banner-text h1 {
  color: rgb(34, 54, 69);
}

.large-blue-button {
  background-color: #72a9db;
  border-radius: 15px;
}

.banner-sub-content {
  margin: 0 !important;
  padding: 12px 0;
  text-align: center !important;
}

.essn-content {
  color: #72a9db;
  font-weight: bold;
  font-style: italic;
}

.sub-bold-content {
  font-weight: bold;
}
.banner-button {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}
.row.justify-content-center {
  gap: 1rem; /* Adds space between buttons */
}

@media screen and (max-width: 1000px) {
  .banner-ellipse {
    display: none;
  }
}
</style>
