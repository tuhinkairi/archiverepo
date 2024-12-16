<template>
  <div>
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">
        <div style="width: 200px; " class="left-side-container mr-2">
          <p class="blink mb-5"> <a href="http://editorial.fdrpjournals.org/login?journal=1" style="color: #fff;">Submit
              Research Paper</a> </p>
          <div class="shadow-effect mb-5">
            <span style="font-weight: bold; line-height: 2;">Downloads :</span>
            <p style="cursor: pointer;"
              @click="getManuScript('https://panel.theijire.com/storage/templates/manuscript.docx')">
              Manuscript Template
            </p>
            <p style="cursor: pointer;"
              @click="getCopyRightForm('https://panel.theijire.com/storage/templates/copyrights.pdf')">
              Copyright Form
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/cc.jpg" height="90" width="180" />
            <p>All research Article published on this website are licensed under Creative Commons Attribution-ShareAlike
              4.0
              International License, and all rights belong to their respective authors/researchers.
            </p>
          </div>
          <div class="image-container mb-5">
            <div class="image-wrapper" v-for="(item, index) in images" :key="index">
              <img :src="item.img" height="50" width="80" />
            </div>
          </div>
        </div>
        <div class="container" style="max-width: 1000px !important; margin: 0">
          <div class="row justify-content-between">
            <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">Call For Papers :</span>
            <div class="callForPaperContent">
              <p>
                International Journal of Innovative Research in Engineering
                (IJIRE) is having ISSN: 2582-8746 (online), Bi-Monthly
                international journal by 5th Dimension Research Publication.
              </p>
              <p>
                It is academic, online, open access, Double Blind Peer reviewed
                international journal. It aims to publish original, theoretical
                and practical advances in Computer Science & Engineering,
                Information Technology, Electrical and Electronics Engineering,
                Electronics and Telecommunication, Mechanical Engineering, Civil
                Engineering, Textile Engineering and all interdisciplinary streams
                of Engineering Sciences. All submitted papers will be reviewed by
                the board of committee of IJIRE.
              </p>
              <p>
                Papers for the regular issues of the journal can be submitted,
                round the year, electronically at editorinchief@theijire.com.
                After the final acceptance of the paper, based upon the detailed
                review process, the paper will immediately be published online.
                However, assignment of the paper to a specific Volume / Issue (see
                archive) of the Journal will be taken up by the Editorial Board
                later; and the author will be intimated accordingly. For Theme
                Based Special Issues, time bound Special Call for Papers will be
                announced and the same will be applicable for that specific issue
                only.
              </p>
            </div>
            <div class="callForPaperContent">
              <h2 style="font-size: 1.2em;">Important Deadlines for Current Issue:</h2>
              <p>
                <b>Last Date for Manuscript Submission: 25th of every Bimonthly
                  (Feb,Apr,Jun,Aug,Oct,Dec)
                </b>
              </p>
              <div class="paperList">
                <ul>
                  <li>
                    <p>
                      Submit your paper in the form of Microsoft word format (.doc
                      or .docx), if you were used latex then send it PDF format.
                    </p>
                  </li>
                  <li>
                    <p>
                      Submit your paper with signed Copyright Transfer Form
                      (corresponding author sign enough, no need all) and should
                      be sent while submitting the paper to us.
                    </p>
                  </li>
                  <li>
                    <p>
                      If the manuscript is not accepted in our journal, then the
                      Copyright Transfer Form submitted with us will become void.
                    </p>
                  </li>
                  <li>
                    <p>
                      The manuscripts which are submitted with copyrights form
                      only will forward to review process
                    </p>
                  </li>
                  <li>
                    <p>
                      submitting the paper in multiple journals are offence, Don’t
                      waste our valuable time
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="callForPaperContent">
              <h2 style="font-size: 1.2em;">
                For author’s convenience, we strongly follow the following steps.
              </h2>
              <div class="paperList">
                <ul>
                  <li>
                    <p>Response will be given within 12 hours.</p>
                  </li>
                  <li>
                    <p>The paper will be reviewed within Two days.</p>
                  </li>
                  <li>
                    <p>
                      Author will get their Acceptance/Rejection Notification
                      within 3 days of submitting paper.
                    </p>
                  </li>
                  <li>
                    <p>
                      All the accepted papers will be open accessible with full
                      PDF download.
                    </p>
                  </li>
                  <li>
                    <p>
                      All Authors will get Soft copy of certificate, letter of
                      acceptance, reviewer evaluation grading
                    </p>
                  </li>
                </ul>
              </div>
              <span style="font-size: 1.2em; font-weight: bold;" >
                Submit your article: <i>editorinchief@theijire.com</i> (or) Online
                submission
              </span>
            </div>
          </div>
        </div>
        <div style="width: 200px; " class="right-side-container ml-2">
          <div class="mb-5">
            <router-link to="/editorsandreviewers">
              <p class="blink">Join As A reviewer</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/tur.jpg" height="90" width="180" />
            <p>Plagiarism is checked by the leading plagiarism checker</p>
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/doi.jpg" height="90" width="180" />
            <p>CrossRef DOI is assigned to research Article published in our journal.
              IJIRE DOI prefix is10.59256/ijire
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <span style="font-size: 1.5em; font-weight: bold; display: block; margin-bottom: 10px;">For Authors</span>
            <router-link to="topics">
              <p>Topics</p>
            </router-link>
            <router-link to="call-for-papers">
              <p>Call For Papers</p>
            </router-link>
            <router-link to="instruction-for-author">
              <p>Instruction For Authors</p>
            </router-link>
            <p><a href="http://editorial.fdrpjournals.org/login?journal=1" style="color:rgb(100, 117, 137)">Manuscript
                Submission</a></p>
            <router-link to="guidance-for-ems">
              <p>Guidance For EMS</p>
            </router-link>
            <router-link to="article-processing-charges">
              <p>Article Processing Charges</p>
            </router-link>
            <router-link to="downloads">
              <p>Downloads</p>
            </router-link>
            <router-link to="paper-status">
              <p>Paper Status</p>
            </router-link>
          </div>
          <div class="shadow-effect">
            <span style="font-size: 1.5em; font-weight: bold; display: block; margin-bottom: 10px;">Policies</span>
            <router-link to="ethics">
              <p>Ethics And Policies</p>
            </router-link>
            <router-link to="peer-review-policy">
              <p>Peer Review Policy</p>
            </router-link>
            <router-link to="publication-ethics-policy">
              <p>Publication Ethics Policy</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  data() {
    return {
      ManuScriptUrl: '',
      CopyRightFormUrl: '',
      images: [
        {
          img: require('../../../assets/Images/one.jpeg')
        },
        {
          img: require('../../../assets/Images/two.png')
        },
        {
          img: require('../../../assets/Images/three.png')

        },
        {
          img: require('../../../assets/Images/four.png')

        },
        {
          img: require('../../../assets/Images/five.png')

        },
        {
          img: require('../../../assets/Images/six.jpg')

        },
        {
          img: require('../../../assets/Images/seven.jpg')

        },
        {
          img: require('../../../assets/Images/eight.jpeg')

        },
        {
          img: require('../../../assets/Images/nine.jpeg')

        },
        {
          img: require('../../../assets/Images/ten.png')

        },
        {
          img: require('../../../assets/Images/eleven.png')

        },
        {
          img: require('../../../assets/Images/twele.jpg')

        },
        {
          img: require('../../../assets/Images/thirteen.jpg')

        },
        {
          img: require('../../../assets/Images/nineteen.png')

        },
        {
          img: require('../../../assets/Images/fourteen.png')

        },
        {
          img: require('../../../assets/Images/fifteen.jpg')

        },
        {
          img: require('../../../assets/Images/sixteen.jpg')

        },
        {
          img: require('../../../assets/Images/seventeen.jpeg')

        },
        {
          img: require('../../../assets/Images/eighteen.jpg')

        },
      ],
    }
  },
  methods: {
    getManuScript: function (getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm: function (getForm) {
      window.open(getForm, "_blank");
    },
  }
};
</script>

<style scoped>
h6 {
  font-family: "Rubik", sans-serif;
}

p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}

h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 20px;
  font-size: 24px;
}

.callForPaperContent {
  padding-bottom: 10px;
}

.paperList {
  margin-left: -20px;
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
  .left-side-container{
    display: none;
  }
  .right-side-container{
    display: none;
  }
}
</style>