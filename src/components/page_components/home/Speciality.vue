<template>
  <div>
    <section class="speciality-area">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-xl-5 col-lg-6 wow animate__animated animate__slideInLeft"
          >
            <div class="sp-box-icon text-center">
              <div class="">
                <div class="about-image">
                  <img
                    src="../../../assets/Images/Features.png"
                    alt="image"
                    class="feature-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 speciality-text wow animate__animated animate__slideInRight"
          >
            <div class="section-heading w-100 mb-28 mt-0">
              <h2 class="feature-title">IJIRE Features:</h2>
              <!-- <p>
                We have a group of very expert people in different sectors.
                e.g., Graphic Design, Web Design, Web Development, Digital
                Marketing, Social Media Marketing, E-mail Marketing, etc.
              </p> -->
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Peer-reviewed Refereed Journal</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Easy, fast, transparent paper publication process.</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Global open access, ensuring wide visibility and accessibility.</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Strict Plagiarism policy</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>
                  Simple steps for publication of research and review articles.
                </p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>High Visibility & Indexing</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Publication Ethics: COPE’s Best Practice Guidelines</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Publisher License under Creative Commons By NC ND</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img
                  src="../../../assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Published By: 5th Dimension Research Publication</p>
              </div>
            </div>
            <!-- <a
              href="javascript:void(0)"
              class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button mt-40 speciality-button"
              >Contact Us</a
            > -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Speciality",
  components: {},
  data() {
    return {
      instance: "",
      options: {
        useGrouping: false,
        startVal: 0,
        duration: 3,
        suffix: "+",
        useEasing: false,
      },
      options2: {
        useGrouping: false,
        startVal: 0,
        duration: 2,
        suffix: "+",
        useEasing: false,
        prefix: 0,
      },
    };
  },
};
</script>

<style scoped>
.tick {
  margin-right: 10px;
}

.sp-first-box {
  border: none;
  padding-top: 67px;
  float: left;
}
.feature-image{
  width: 100%;
  height: 100%;
}
.feature-title{
  color:#72A9DB ;
}
</style>
