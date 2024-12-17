<template>
  <div class="paperdetails-container" v-if="paperPage">
    <div class="row paperBox mb-4 p-3">
      <div class="header-container row justify-content-between rowSize">
        <h3 style="padding-top: 10px;" class="col-sm-8">
          {{ paperDetails.paper_title }}
        </h3>
        <div class="col-sm-3 ml-1 mr-3 mt-sm-3">
          <b-button
            variant="outline-primary"
            @click="downloadPDF(paperDetails.paper_url)"
            >Download PDF</b-button
          >
        </div>
      </div>
      <div class="details-container mt-4 p-3 " style="max-width: 100vw;">
        <p class="pb-3"><b>Author(s) : </b>{{ paperDetails.paper_author }}</p>
        <p class="pb-3">
          <b>Submission-Year,Month : </b>{{ paperDetails.year }},
          {{ paperDetails.month }}
        </p>
        <p class="pb-3"><b>Pages : </b>{{ paperDetails.paper_pages }}</p>
        <p class="pb-3">
          <b>Article Type : </b>{{ paperDetails.paper_articletype }}
        </p>
        <p class="pb-3"><b>DOI : </b>{{ paperDetails.paper_doi }}</p>
      </div>
    </div>
    <div class="p-3 paperBox">
      <h4>Abstract</h4>
      <div >
        <p class="abstract-details">
          {{ paperDetails.paper_abstract }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperDetailsComponent",
  props: {
    paperDetails: Object,
    paperPage: Boolean,
  },
  metaInfo() {
    return {
      title: this.paperDetails.paper_title,
      meta: [
        {
          name: "description",
          content: this.paperDetails.paper_abstract,
        },
        {
          property: "og:title", // Open Graph title for social sharing
          content: this.paperDetails.paper_title,
        },
        {
          property: "og:url",
          content: window.location.href,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: window.location.href,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            name: this.paperDetails.paper_title,
            author: {
              "@type": "Person",
              name: this.paperDetails.paper_author, // Assuming a single author; for multiple, you can structure this differently
            },
            datePublished: `${this.paperDetails.year}-${this.paperDetails.month}-01`, // Replace with the actual publication date if available
            abstract: this.paperDetails.paper_abstract,
            doi: this.paperDetails.paper_doi,
            url: window.location.href,
            inLanguage: "en",
            publisher: {
              "@type": "Organization",
              name:
                "International Journal of Research and Innovation in Education (IJIRE)",
              url: "https://www.ijire.com", // Replace with your journal's actual URL
            },
            isPartOf: {
              "@type": "PublicationVolume",
              name: "IJIRE Volume", // Specify the volume name if available
              volumeNumber: "1", // Specify the volume number if available
              issue: {
                "@type": "PublicationIssue",
                issueNumber: "1", // Specify the issue number if available
              },
            },
          },
        },
      ],
    };
  },

  methods: {
    downloadPDF(paperURL) {
      window.open(paperURL, "_blank");
    },
  },
  mounted() {
    console.log(
      "Paper details received in PaperDetailsComponent:",
      this.paperDetails
    );
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
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.paperHeading {
  display: flex;
  justify-content: center;
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
  white-space: wrap;
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
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-wrapper img {
  max-width: 100%;
  height: auto;
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
p {
  margin-bottom: 5px;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%; /* Ensures the paragraph doesn't exceed its container */
  white-space: normal; /* Allows wrapping */
}

.abstract-details {
  white-space: normal; /* Allows wrapping */
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
}

</style>
