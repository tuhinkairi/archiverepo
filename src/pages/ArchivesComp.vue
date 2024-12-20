<template>
  <div>
    <!-- Reusing the TopHeader, Menu, and Footer from the first template -->
    <TopHeader />
    <MenuStyle1 />

    <!-- Dynamic Header for Year, Volume, and Issue -->
    <PageHeader 
      :pageTitle="`${cYear ? cYear : ''} | Volume ${cVolume ? cVolume : ''} - Issue ${cIssue ? cIssue : ''}`" 
    />

    <!-- Main content with sidebars and paper list -->
    <section class="pricing-area">
      <div style="display: flex; justify-content: space-around;">
        <!-- Left Sidebar -->
        <div style="width: 200px;" class="left-side-container mr-2">
          <p class="blink mb-5">
            <a href="http://editorial.fdrpjournals.org/login?journal=1" style="color: #fff;">
              Submit Research Paper
            </a>
          </p>
          <div class="shadow-effect mb-5">
            <span style="font-weight: bold; line-height: 2;">Downloads:</span>
            <p style="cursor: pointer;" @click="getManuScript('https://panel.theijire.com/storage/templates/manuscript.docx')">
              Manuscript Template
            </p>
            <p style="cursor: pointer;" @click="getCopyRightForm('https://panel.theijire.com/storage/templates/copyrights.pdf')">
              Copyright Form
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../assets/Images/cc.jpg" height="90" width="180" />
            <p>
              All research articles published on this website are licensed under
              Creative Commons Attribution-ShareAlike 4.0 International License.
            </p>
          </div>
          <div class="image-container mb-5">
            <div class="image-wrapper" v-for="(item, index) in images" :key="index">
              <img alt="image" :src="item.img" height="50" width="80" />
            </div>
          </div>
        </div>

        <!-- Paper List Section -->
        <div class="container" style="max-width: 1000px !important; margin: 0;">
          <div class="row">
            <div class="col-lg-12 col-md-12 mt-2">
              <div v-if="loading">
                <p>Loading papers...</p> <!-- Loading state -->
              </div>
              <div v-else-if="!listVisible && !paperPage">
                <div v-for="year in years" :key="year">
                  <h2>{{ year }}</h2>
                  <div class="row" v-for="(data, index) in archives[year]" :key="index">
                    <div class="col-lg-3 databox m-1 issueButton" v-for="issue in data.slice().sort()" :key="issue.index" @click="viewIssueData(year, index, issue)">
                      <!-- <a :href="'archives/paperlist?year=' + year + '&volume=' + index + '&issue=' + issue"> 
                        <p>Volume {{ index }} Issue {{ issue }}</p>
                      </a>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Paper List Component -->
            <PaperListComponent 
              v-if="listVisible" 
              :papersList="papersList" 
              :cYear="cYear" 
              :cVolume="cVolume" 
              :cIssue="cIssue" 
              :listVisible="listVisible" 
              :paperPage="paperPage" 
              @view-paper-details="handleViewPaperDetails" 
            />
            <PaperDetailsComponent 
              v-if="paperPage" 
              :paperDetails="paperDetails" 
              :paperPage="paperPage" 
            />
          </div>
        </div>

        <!-- Right Sidebar -->
        <div style="width: 200px;" class="right-side-container ml-2">
          <div class="mb-5">
            <router-link to="/editorsandreviewers">
              <p class="blink">Join As A Reviewer</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../assets/Images/tur.jpg" height="90" width="180" />
            <p>Plagiarism is checked by the leading plagiarism checker</p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../assets/Images/doi.jpg" height="90" width="180" />
            <p>CrossRef DOI is assigned to research articles published in our journal. IJIRE DOI prefix is 10.59256/ijire</p>
          </div>
          <div class="shadow-effect mb-5">
            <span style="font-weight: bold; line-height: 2;">For Authors</span>
            <router-link to="/topics">
              <p>Topics</p>
            </router-link>
            <router-link to="/call-for-papers">
              <p>Call For Papers</p>
            </router-link>
            <router-link to="/instruction-for-author">
              <p>Instruction For Authors</p>
            </router-link>
            <p>
              <a href="http://editorial.fdrpjournals.org/login?journal=1" style="color: rgb(100, 117, 137);">
                Manuscript Submission
              </a>
            </p>
            <router-link to="/guidance-for-ems">
              <p>Guidance For EMS</p>
            </router-link>
            <router-link to="/article-processing-charges">
              <p>Article Processing Charges</p>
            </router-link>
            <router-link to="/downloads">
              <p>Downloads</p>
            </router-link>
            <router-link to="/paper-status">
              <p>Paper Status</p>
            </router-link>
          </div>
          <div class="shadow-effect">
            <span style="font-weight: bold; line-height: 2;">Policies</span>
            <router-link to="/ethics">
              <p>Ethics And Policies</p>
            </router-link>
            <router-link to="/peer-review-policy">
              <p>Peer Review Policy</p>
            </router-link>
            <router-link to="/publication-ethics-policy">
              <p>Publication Ethics Policy</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Reusing Footer from the first template -->
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader"; // Ensure this is uncommented
import CustomProjects from "../components/common/CustomProjects.vue";
import Footer from "@/components/layout/Footer";
import PaperListComponent from '@/components/page_components/Archives/PaperListContainer.vue';
import PaperDetailsComponent from '@/components/page_components/Archives/PaperDetailsContainer.vue';

export default {
  name: 'ArchivesComp',
  components: {
    TopHeader,
    MenuStyle1,
    PageHeader,
    CustomProjects,
    Footer,
    PaperListComponent,
    PaperDetailsComponent,
  },
  data() {
  return {
    papersList: [],
    cYear: null,
    cVolume: null,
    cIssue: null,
    listVisible: true,
    paperPage: false,
    loading: true,
    years: [], // Assuming you have years data
    archives: {}, // Assuming you have archives data
    images: [ // Array for sidebar images
        { img: require("../assets/Images/one.jpeg") },
        { img: require("../assets/Images/two.png") },
        { img: require("../assets/Images/three.png") },
        { img: require("../assets/Images/four.png") },
        { img: require("../assets/Images/five.png") },
        { img: require("../assets/Images/six.jpg") },
        { img: require("../assets/Images/seven.jpg") },
        { img: require("../assets/Images/eight.jpeg") },
        { img: require("../assets/Images/nine.jpeg") },
        { img: require("../assets/Images/ten.png") },
        { img: require("../assets/Images/eleven.png") },
        { img: require("../assets/Images/twele.jpg") },
        { img: require("../assets/Images/thirteen.jpg") },
        { img: require("../assets/Images/nineteen.png") },
        { img: require("../assets/Images/fourteen.png") },
        { img: require("../assets/Images/fifteen.jpg") },
        { img: require("../assets/Images/sixteen.jpg") },
        { img: require("../assets/Images/seventeen.jpeg") },
        { img: require("../assets/Images/eighteen.jpg") },
    ],
  };
},

  created() {
    const { year, volume, issue } = this.$route.query;

    this.cYear = year;
    this.cVolume = volume;
    this.cIssue = issue;

    if (this.cYear && this.cVolume && this.cIssue) {
      this.fetchPapers();
    } else {
      this.loading = false;
      console.log("Missing query parameters in the URL.");
    }

    this.fetchArchives(); // Fetch archives data on component creation
  },
  methods: {
    fetchPapers() {
  this.loading = true;
  this.getPapersList(this.cYear, this.cVolume, this.cIssue, (papersList) => {
    this.papersList = papersList;
    this.loading = false;
  }).catch(err => {
    this.loading = false;
    alert('Failed to load papers. Please try again later.');
    console.error(err);
  });
},

    fetchArchives() {
      // Implement logic to fetch archives data (year and issues)
      this.api.getDataModulePagination("indexfetch")
        .then((res) => {
          this.archives = res.data.archives; // Assuming the response structure
          this.years = Object.keys(this.archives); // Extract years from archives
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    getPapersList(year, volume, issue, callback) {
      this.api
      .postDataModulePagination("archivePaperListing", { year, volume, issue })
        .then((res) => {
          const papersList = res.data.papersList;
          callback(papersList);
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    viewIssueData(year, volume, issue) {
      this.getPapersList(year, volume, issue, (papersList) => {
        this.cYear = year;
        this.cVolume = volume;
        this.cIssue = issue;
        this.papersList = papersList;
        this.listVisible = true;
      });
    },
    handleViewPaperDetails(paper) {
      this.paperDetails = paper;
      this.paperPage = true;
      this.listVisible = false;
    },
    getManuScript(url) {
      window.open(url, "_blank");
    },
    getCopyRightForm(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
/* Add any specific styles you need here */

</style>
