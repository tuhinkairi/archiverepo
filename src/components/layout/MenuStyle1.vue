<template>
  <div :class="{ menu_header_dark: scrollPosition >= 550 }" class="menu-header d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-2 d-flex align-items-center">
          <router-link to="/"><img class="logo" :src="isDefaultImage
              ? require('@/assets/Images/5thlogo.png')
              : require('@/assets/Images/5thlogo.png')
            " alt="Habu" /></router-link>
        </div>
        <div class="col-10 d-flex align-items-center">
          <nav class="menu-area d-lg-flex align-items-center ml-auto">
            <ul>
              <!-- HOME -->
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <!-- ABOUT -->
              <li>
                <a href="javascript:void(0)">About <b-icon-arrow-down></b-icon-arrow-down></a>
                <ul>
                  <li><router-link to="/ethics">Ethics And Policies</router-link></li>
                  <!-- <li><router-link to="/blogs" >BLOGS</router-link></li> -->
                  <li><router-link to="/mission-and-scope">Mission And Scope</router-link></li>
                  <li><router-link to="/peer-review-policy">Peer Review Policy</router-link></li>
                  <li><router-link to="/publication-ethics-policy">Publication Ethics Policy</router-link></li>
                  <li><router-link to="/indexing-and-abstracting">Indexing And Abstracting</router-link></li>
                  <li><router-link to="/impact-Factor">Impact Factor</router-link></li>
                  <li><router-link to="/faqs">FAQs</router-link></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Editors And Reviewers <b-icon-arrow-down></b-icon-arrow-down></a>
              <ul>
                  <li><router-link to="/editorsandreviewers">Referal Management System</router-link></li>
                  <li><router-link to="/editorial-board">Editorial Board</router-link></li>
              </ul>
              </li>
              <li><router-link to="/archives">Archives</router-link></li>
              <li> <a href="javascript:void(0)">For Authors <b-icon-arrow-down></b-icon-arrow-down></a>

                <ul>
                  <li><router-link to="/topics">Topics</router-link></li>
                  <li><router-link to="/call-for-papers">Call For Papers</router-link></li>
                  <li><router-link to="/instruction-for-author">Instruction For Author</router-link></li>
                  <li>
                    <a href="http://editorial.fdrpjournals.org/login?journal=1">Manuscript Submission</a>
                    <!-- <router-link to="/manuscript-submission"
                      >Manuscript Submission</router-link
                    > -->
                  </li>
                  <li><router-link to="/guidance-for-ems">Guidance For Ems</router-link></li>

                  <li><router-link to="/article-processing-charges">Article Processing Charges</router-link></li>
                  <li><router-link to="/downloads">Downloads</router-link></li>
                  <li><router-link to="/paper-status">Paper Status</router-link></li>
                </ul>
              </li>
              <li><router-link to="/blogs">Blogs</router-link></li>
              <li><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
          </nav>
          <div class="mobile-menu-button ml-auto">
            <button @click="mobileMenu = !mobileMenu">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
          </div>
        </div>
      </div>
      <transition enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft">
        <div class="mobile-menu-area" v-show="mobileMenu">
          <particles />
          <div class="mobile-menu-components w-100 ">
            <div class="row justify-content-between mobile-menu-header">
              <div class="col-6 d-flex align-items-center">
                <!-- <h1>Explore Us</h1> -->
              </div>
              <div class="col-6 d-flex align-items-center">
                <button @click="mobileMenu = false" class="ml-auto toggle-button-mobile-view">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </button>
              </div>
            </div>

            <nav class="mobile-menu mx-auto">
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <a href="javascript:void(0)">ABOUT <b-icon-arrow-down></b-icon-arrow-down></a>
                  <ul>
                    <li><router-link to="/ethics">Ethics And Policies</router-link></li>
                    <!-- <li><router-link to="/blogs" >BLOGS</router-link></li> -->
                    <li><router-link to="/mission-and-scope">Mission And Scope</router-link></li>
                    
                    <li><router-link to="/peer-review-policy">Peer Review Policy</router-link></li>
                    <li><router-link to="/publication-ethics-policy">Publication Ethics Policy</router-link></li>
                    <li><router-link to="/indexing-and-abstracting">Indexing And Abstracting</router-link></li>
                    <li><router-link to="/impact-Factor">Impact Factor</router-link></li>
                    <li><router-link to="/faqs">FAQs</router-link></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0)">Editors And Reviewers <b-icon-arrow-down></b-icon-arrow-down></a>
              <ul>
                  <li><router-link to="/editorsandreviewers">Referal Management System</router-link></li>
                  <li><router-link to="/editorial-board">Editorial Board</router-link></li>
              </ul>
              </li>
                <li><router-link to="/archives">Archives</router-link></li>
                <li> <a href="javascript:void(0)">For Authors <b-icon-arrow-down></b-icon-arrow-down></a>

                  <ul>
                    <li><router-link to="/topics">Topics</router-link></li>
                    <li><router-link to="/call-for-papers">Call For Papers</router-link></li>
                    <li><router-link to="/instruction-for-author">Instruction For Author</router-link></li>
                    <li>
                      <a href="http://editorial.fdrpjournals.org/login?journal=1">Manuscript Submission</a>
                      <!-- <router-link to="/manuscript-submission"
                  >Manuscript Submission</router-link
                > -->
                    </li>
                    <li><router-link to="/guidance-for-ems">Guidance For Ems</router-link></li>

                    <li><router-link to="/article-processing-charges">Article Processing Charges</router-link></li>
                    <li><router-link to="/downloads">Downloads</router-link></li>
                    <li><router-link to="/paper-status">Paper Status</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import particles from "@/components/common/particles.vue";
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default {
  name: "MenuStyle1",
  components: {
    particles,
    // faTwitter
  },
  data: function () {
    return {
      scrollPosition: null,
      isDefaultImage: true,
      mobileMenu: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;

      if (window.scrollY > 550) {
        return (this.isDefaultImage = false);
      }
      if (window.scrollY <= 550) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = true);
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
.mobile-menu-button button {
  color: rgb(30, 42, 120);
  border: none;
  background: transparent;
  font-size: 25px;
  padding: 0px 15px;
}

.menu_header_dark .mobile-menu-button button {
  color: #fff;
}

.mobile-menu-button {
  display: none;
}

.mobile-menu-area {
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  color: #647589;
  width: 100%;
  height: min-content;
  height: -webkit-min-content;
  height: -moz-min-content;
  z-index: 1000;
}

.mobile-menu-area button {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
}

nav.mobile-menu {
  width: 100%;
  overflow-y: scroll;
}

nav.mobile-menu ul {
  list-style: none;
  padding-left: 17px;
}

nav.mobile-menu a {
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 2.05em;
  padding: 5px 0;
}

nav.mobile-menu ul li.current-menu-item>a,
nav.mobile-menu ul li a:hover {
  color: #fff;
}

.mobile-menu-components {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  overflow-y: scroll;
}

.mobile-menu-components p {
  padding: 0 15px;
}

.mobile-menu-header {
  height: 90px;
}

.mobile-menu-header h1 {
  color: #fff;
  font-size: 27px;
  margin: 0;
}

@media screen and (max-width: 991px) {
  .mobile-menu-button {
    display: inherit;
  }
}

.menu_header_dark .menu-area>ul>li>a {
  color: #17222C;
}

.large-blue-button {
  font-size: 16px;
}

.fa-chevron-down:before {
  content: "\f078";
}

.menu-header.menu_header_dark {
  background: #72A9DB !important;
}
.mobile-menu-button button {
 color: #72A9DB;
}
.mobile-menu-components{
  background: #72A9DB;
}
nav.mobile-menu a{
  color: #fff;
}
.menu-header img.logo {
  height: 60px;
}
.menu-header{
  height: 80px !important;
}
</style>