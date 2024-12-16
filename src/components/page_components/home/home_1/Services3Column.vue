<template>
  <div>
    <section class="services-area">
      <div class="container">
        <div class="section-heading">
          <h2 class="author-title">For Authors</h2>
        </div>
        <div class="row"> 
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img
                  src="../../../../assets/Images/authorOne.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/instruction-for-author" > <h3>Instruction of Authors</h3></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img
                  src="../../../../assets/Images/authorTwo.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/article-processing-charges" ><h3>Article Processing Charges</h3></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img
                  src="../../../../assets/Images/authorThree.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/guidance-for-ems" > <h3>Guidance for  Editorial Management System</h3></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img
                  src="../../../../assets/Images/authorFour.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/archives" ><h3>Archives</h3></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img
                  src="../../../../assets/Images/authorFive.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/paper-status" ><h3>Article Status</h3></router-link>
                
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img
                  src="../../../../assets/Images/authorSix.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <a href="http://editorial.fdrpjournals.org/login?journal=1"><h3>Online Article Submission</h3></a>
                <!-- <router-link to="/manuscript-submission"><h1>Submit your Article</h1></router-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Services3Column",
};
</script>

<style scoped>
.author-title{
  color:#72A9DB ;
}
</style>
