<template>
  <div>
    <section class="review-area">
      <div class="container">
        <div class="section-heading text-center mx-auto mb-28">
          <h1>Client Reviews</h1>
          <p>
            We have people of multiple kind in the house. Together we can
            provide high quality work to satisfy you.
          </p>
        </div>
        <div class="rating text-center mx-auto mb-72">
          <p>
            Average rating
            <span>4.9 / 5 <font-awesome-icon :icon="['fas', 'star']" /></span>
          </p>
        </div>
        <VueSlickCarousel v-bind="settings" class="row review-slider">
            <template #prevArrow>
                <button class="slide-prev">
                    <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
                </button>
            </template>
          <div>
            <div class="review">
              <div class="review-text">
                <img src="../../assets/Images/reviewOne.png" width="31" height="27"/>
                <p>
                  Li lingues differe solmen in li grammat ca, li pronuncia tion
                  e li plu commun vocabules. Omnicos directe al desi lite de un
                  nov lingua fusa.
                </p>
                <img src="../../assets/Images/reviewTwo.png" width="31" height="27"   class="float-right"/>
              </div>
              <div class="client-profile">
                <img src="@/assets/clients/client.png" alt="Habu" />
                <div class="client-details">
                  <h2>Nathaneal Down</h2>
                  <p>HD Manager</p>
                  <span class="client-rating"
                    >5 / 5 <font-awesome-icon :icon="['fas', 'star']"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="review">
              <div class="review-text">
                <img src="../../assets/Images/reviewOne.png" width="31" height="27"/>
                <p>
                  Li lingues differe solmen in li grammat ca, li pronuncia tion
                  e li plu commun vocabules. Omnicos directe al desi lite de un
                  nov lingua fusa.
                </p>
                <img src="../../assets/Images/reviewTwo.png" width="31" height="27"   class="float-right"/>
              </div>
              <div class="client-profile">
                <img src="@/assets/clients/client.png" alt="Habu" />
                <div class="client-details">
                  <h2>Nathaneal Down</h2>
                  <p>HD Manager</p>
                  <span class="client-rating"
                    >4.8 / 5 <font-awesome-icon :icon="['fas', 'star']"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="review">
              <div class="review-text">
                <img src="../../assets/Images/reviewOne.png" width="31" height="27"/>
                <p>
                  Li lingues differe solmen in li grammat ca, li pronuncia tion
                  e li plu commun vocabules. Omnicos directe al desi lite de un
                  nov lingua fusa.
                </p>
                <img src="../../assets/Images/reviewTwo.png" width="31" height="27"   class="float-right"/>
              </div>
              <div class="client-profile">
                <img src="@/assets/clients/client-02.png" alt="Habu" />
                <div class="client-details">
                  <h2>Nathaneal Down</h2>
                  <p>HD Manager</p>
                  <span class="client-rating"
                    >5 / 5 <font-awesome-icon :icon="['fas', 'star']"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="review">
              <div class="review-text">
                <img src="../../assets/Images/reviewOne.png" width="31" height="27"/>
                <p>
                  Li lingues differe solmen in li grammat ca, li pronuncia tion
                  e li plu commun vocabules. Omnicos directe al desi lite de un
                  nov lingua fusa.
                </p>
                <img src="../../assets/Images/reviewTwo.png" width="31" height="27"   class="float-right"/>
              </div>
              <div class="client-profile">
                <img src="@/assets/clients/client-02.png" alt="Habu" />
                <div class="client-details">
                  <h2>Nathaneal Down</h2>
                  <p>HD Manager</p>
                  <span class="client-rating"
                    >5 / 5 <font-awesome-icon :icon="['fas', 'star']"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <template #nextArrow>
                <button class="slide-next">
                    <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
                </button>
            </template>
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Reviews",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        nextArrow:
          '',
        prevArrow:
          '',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.rating span {
  background:#74A9DA ;
}
span.client-rating {
  background:#74A9DA ;
}
.review-slider button.slick-arrow:hover {
  background-color: #74A9DA;
  color: white !important;
}
.review-slider button.slick-arrow{
  color: #74A9DA !important;
}
</style>
