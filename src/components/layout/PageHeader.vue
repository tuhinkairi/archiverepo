<template>
  <div>
    <div class="page-header">
      <div
        class="about-banner-shape-left wow animate__animated animate__fadeInLeft"
      >
        <img
          src="@/assets/Images/Vector.png"
          class="wow animate__animated animate__pulse animate__infinite"
          alt="habu"
        />
      </div>
      <div
        class="about-banner-shape-right wow animate__animated animate__fadeInRight animate__delay-1s"
      >
        <img
          src="@/assets/Images/Ellipse.png"
          class="wow animate__animated animate__pulse animate__infinite"
          alt="habu"
        />
      </div>
      <div class="container">
        <div class="page-header-text wow animate__animated animate__fadeInDown">
          <h1 class="page-title" style="margin-top: 0px !important; margin-bottom: 2px;">{{ pageTitle }}</h1>
          <!-- This will reflect the title passed as a prop -->
          <span>{{ parentPage }}</span>
          <span class="span-divider font-weight-bold">|</span>
          <span class="font-weight-bold">{{ pageTitle }}</span>
          <div class="page-banner-shape-title">
            <img
              src="@/assets/Images/dotOne.png"
              class="wow animate__animated animate__fadeInUp animate__delay-1s"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    parentPage: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // Set the document title when the component mounts
    document.title = this.pageTitle;
  },
  watch: {
    pageTitle(newTitle) {
      // Update the document title whenever pageTitle prop changes
      document.title = newTitle;
    },
  },
};
</script>

<style scoped></style>
