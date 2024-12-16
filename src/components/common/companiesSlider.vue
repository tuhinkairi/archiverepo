<template>
  <div>
    <div class="companies d-flex align-items-center ">
      <div class="container">
        <VueSlickCarousel
          v-bind="settings"
          class="row justify-content-between -logo "
        >
          <div class="mx-auto   ImageBox" v-for="data in filterData" :key="data.indexing_id">
            <img
            :src="data.indexing_image_url"
              class="my-auto rounded mx-auto d-block"
              alt="Habu"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "CompaniesSlider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      indexingList: [],
        limit: 4
    };
  },
  computed: {
       filterData() {
        return this.indexingList.filter((el, index)=> index < this.limit)
       }
    },
    methods: {
      getIndexing: function() {
        this.api.postData("indexfetch").then((res) => {
            console.log(res.data);
            this.indexingList = res.data.indexingList;
          },
          (err) => {
            console.log(err);
          }
        );
      }
    },
    mounted: function() {
      this.getIndexing()
    }
};
</script>

<style scoped>


 img {
 
  height: 200px !important;
}
 
.ImageBox {
  margin:20px;

}
.companies img {
  max-height: 110px;
  width: 175px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
