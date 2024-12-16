<template>
  <div class="paperlist-container" v-if="listVisible && !paperPage">
    <div class="row paperBox paperHeading mb-4 p-2 ">
      <h2>{{ cYear }} | Volume {{ cVolume }} - Issue {{ cIssue }}</h2>
    </div>
    <div
      class="row paperBox mb-3"
      v-for="paper in papersList"
      :key="paper.paper_uniqueid"
    >
      <div class="col-9 p-3">
        <h2>{{ paper.paper_title }}</h2>
        <p><b>Author:</b> {{ paper.paper_author }}</p>
        <p><b>Article Type:</b> {{ paper.paper_articletype }}</p>
        <p><b>Pages:</b> {{ paper.paper_pages }}</p>
      </div>
      <div class="col-3 p-3">
        <router-link
          :to="{
            path: '/archives/paper-details',
            query: {
              paperid: paper.paper_id,
              papertitle: formatTitle(paper.paper_title),
            },
          }"
        >
          <b-button class="col-12 mb-2 mt-3" variant="outline-primary" size="sm">
            Paper Details
          </b-button>
        </router-link>

        <b-button
          :href="paper.paper_url"
          target="_blank"
          class="col-12 mb-2"
          variant="outline-primary"
          size="sm"
        >
          Download PDF
        </b-button>
        <b-button
          class="col-12"
          variant="outline-primary"
          size="sm"
          @click="
            googleSearch('https://www.google.com/search?q=' + paper.paper_title)
          "
          >Google
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperListComponent",

  props: {
    papersList: Array,
    cYear: String,
    cVolume: String,
    cIssue: String,
    listVisible: Boolean,
    paperPage: Boolean,
  },
  metaInfo() {
    return {
      title: `${this.cYear} Volume ${this.cVolume} Issue ${this.cIssue} | International Journal | IJIRE`,
      meta: [
        {
          name: "description",
          content:
            "Explore IJIRE's collection of published papers. Discover titles covering innovative research in Engineering, Technology, and Applied Sciences.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: window.location.href,
        },
      ],
    };
  },

  methods: {
    formatTitle(title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    },
    viewPaperDetails(paperid) {
      this.$emit("view-paper-details", paperid); // emit event to parent
    },
    downloadPDF(paperURL) {
      // here paperid is coming
      window.open(paperURL, "_blank");
    },

    googleSearch(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style scoped>
.rowSize {
  width: 97%;
}
.issueButton {
  cursor: pointer;
}
.box {
  background: #0000ff;
  border-radius: 8px;
}
.box p {
  color: #fff;

  text-align: center;
  padding: 6px;
}

.btn-outline-primary {
  color: #0a87cf;
  border-color: #0a87cf;
}

.btn-outline-primary:hover {
  color: #fff;
  border-color: #0a87cf;
  background: #0a87cf;
}

.databox {
  background-color: #0a87cf;
  border-radius: 5px;
  cursor: pointer;
}
.databox p {
  color: #fff;
  padding: 10px;
}
.paperBox {
  /* border: 2px solid #EEEDE7; */

  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.paperHeading {
  display: flex;
  justify-content: center;
}
p {
  margin-bottom: 5px;
  text-align: left;
}
h5 {
  margin-bottom: 5px;
  margin-top: 5px;
}
h6 {
  margin-bottom: 5px;
  margin-top: 5px;
}
.abstract-details {
  white-space: pre-wrap;
}
@media screen and (max-width: 991px) {
  .btn-sm {
    font-size: 12px !important;
  }
}
@media screen and (max-width: 512px) {
  .btn-sm {
    font-size: 10px !important;
  }
}
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink {
  animation: blink 0.5s infinite;
  background-color: #74a9da;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 5px;
}

.shadow-effect {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 5px;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2px;
}

.image-wrapper {
  flex: 0 0 50%;
  /* Each image takes up 50% of the row, so 2 images per row */
  box-sizing: border-box;
  /* Ensures padding and border are included in the width */
  padding: 5px;
  /* Adjust padding as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  max-width: 100%;
  /* Ensures images are responsive */
  height: auto;
  /* Maintains aspect ratio */
  margin-bottom: 10px;
}
@media screen and (max-width: 1000px) {
  .left-side-container {
    display: none;
  }
  .right-side-container {
    display: none;
  }
}
</style>
