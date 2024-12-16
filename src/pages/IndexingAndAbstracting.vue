<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Indexing And Abstracting" parentPage="About" />
    <div class="col-12 p-4 ImageContainer">
      <div class="col-8 row mx-auto justify-center">
        <div
          class="col-lg-3 col-md-3 col-sm-3 m-3 indexingImage single-pricing-table"
          v-for="data in indexingList"
          :key="data.indexing_id"
          v-b-tooltip.hover.bottom
          @click="openIndexingURL(data.indexing_url)"
          :title="data.indexing_name"
        >
          <img
            :src="data.indexing_image_url"
            class="rounded mx-auto d-block"
            width="250"
            height="150"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";

export default {
  name: "IndexingAndAbstracting",
  components: {
    MenuStyle1,
    PageHeader,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Indexing And Abstracting | International Journal | IJIRE',
      meta: [
        {
          name: 'description',
          content:
            "View IJIRE's indexing and abstracting information. See where our journal is listed and how our articles are indexed in major research databases",
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
            "name": "Indexing And Abstracting",
            "url": window.location.href,
            "description":
              "View IJIRE's indexing and abstracting information. See where our journal is listed and how our articles are indexed in major research databases.",
            "publisher": {
              "@type": "Organization",
              "name": "International Journal of Innovative Research in Engineering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png" // Replace with your logo URL
              }
            }
          }
        }
      ]
    };
  },
  data: function () {
    return {
      indexingList: [],
    };
  },
  methods: {
    openIndexingURL: function (indexingURL) {
      window.open(indexingURL, "_blank");
    },
    getIndexing: function () {
      this.api.postData("indexfetch").then((res) => {

          this.indexingList = res.data.indexingList;
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  mounted: function () {
    this.getIndexing();
  },
};
</script>

<style scoped>
.ImageContainer {
  padding-left: 50px !important;
}
.indexingImage {
  margin: 10px;
  transition: 0.5s;
  cursor: pointer;
}
.indexingImage img {
  padding: 10px;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 25px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.single-pricing-table:hover {
  transform: translateY(-10px);
  box-shadow: none;
}
</style>
