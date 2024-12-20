<template>
  <div style="position: relative;">
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">
        <div style="width: 200px;" class="left-side-container mr-2">
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
            <img alt="image" src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/cc.jpg" height="90" width="180" />
            <p>All research Article published on this website are licensed under Creative Commons
              Attribution-ShareAlike
              4.0
              International License, and all rights belong to their respective authors/researchers.
            </p>
          </div>
          <div class="image-container mb-5">
            <div class="image-wrapper" v-for="(item, index) in images" :key="index">
              <img alt="image" :src="item.img" height="50" width="80" />
            </div>
          </div>
        </div>
      <div class="container" style="max-width: 1000px !important; margin: 0">

        <div class="child-custom-container">

          <div class="sub-child-custom-container">
            <div class="row justify-content-between">
              <div class="missionContent">
                <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">Mission & Vision :</span>
                <h2 style="font-size: 1.2em;">MISSION</h2>
                <p>
                  The Mission of the journal is a scholarly open access, Double
                  blind Peer-reviewed, interdisciplinary, Bi-monthly and full
                  refereed journal focusing on theories, methods and applications in
                  Engineering and Technology. It covers all areas of Engineering and
                  Technology, publishing refereed original research articles and
                  technical notes. All submitted articles should report original,
                  previously unpublished research results, experimental or
                  theoretical and will be Double blind peer-reviewed. Articles
                  submitted to the journal should meet these criteria and must not
                  be under consideration for publication elsewhere. Manuscript
                  should follow the style of the journal and are subject to both
                  review and editing. To impart a platform for publishing results
                  and research with a strong empirical component, to create a bridge
                  for significant gap between research and practice by promoting the
                  publication of original, novel, industry-relevant research, to
                  solicit original and unpublished research papers, based on
                  theoretical or experimental works.
                </p>
              </div>
              <div class="missionContent">
                <h3 style="font-size: 1.1em;">The Mission of the journal is to:</h3>
                <div class="missionList">
                  <ul>
                    <li>
                      <p>
                        Disseminate original, scientific, theoretical or applied
                        research in the field of Engineering and allied fields.
                      </p>
                    </li>
                    <li>
                      <p>
                        Create a bridge for significant gap between research and
                        practice by promoting the publication of original, novel,
                        industry-relevant research.
                      </p>
                    </li>
                    <li>
                      <p>
                        Aqueduct the significant gap between research and practice
                        by promoting the publication of original, novel,
                        industry-relevant research.
                      </p>
                    </li>
                    <li>
                      <p>
                        Seek original and unpublished research papers based on
                        theoretical or experimental works for the publication
                        globally.
                      </p>
                    </li>
                    <li>
                      <p>
                        Solicit original and unpublished research papers, based on
                        theoretical or experimental works.
                      </p>
                    </li>
                    <li>
                      <p>
                        Publish original, theoretical and practical advances in
                        Mechanical Engineering, Civil Engineering, Computer Science
                        & Engineering, Textile Engineering, Information Technology,
                        Electrical and Electronics Engineering, Electronics and
                        Telecommunication and all interdisciplinary streams of
                        Engineering Sciences.
                      </p>
                    </li>
                    <li>
                      <p>
                        Impart a platform for publishing results and research with a
                        strong empirical component.
                      </p>
                    </li>
                    <li>
                      <p>
                        Dispense a platform for publishing results and research with
                        a strong empirical component.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 style="font-size: 1.2em;">SCOPE</h2>
                <p>
                  International Journal of Innovative Research in Engineering
                  (IJIRE) covers all topics of all engineering branches. Some of
                  them are Computer Science & Engineering, Information Technology,
                  Electronics & Communication, Electrical and Electronics,
                  Electronics and Telecommunication, Civil Engineering, Mechanical
                  Engineering, Textile Engineering and all interdisciplinary streams
                  of Engineering Sciences. The main topic includes but not limited
                  to.
                </p>
                <p>
                  <b>Tags: </b>Technical Paper Publishing Sites | Journals for
                  Publication of Research Paper | Best Journal to Publish Research
                  Paper | Research Paper Publication Sites | Best International
                  Journal for Paper Publication | Best Journals to Publish Papers in
                  India | Journal Publication Sites | Research Paper Publication
                  Sites | Fast Track Paper Publication Sites | Best International
                  Journal | Fast Track Paper Publication Journal | Publish Paper
                  Within 48 Hours |Research Papers Sites |
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="width: 200px;" class="right-side-container ml-2">
          <div class="mb-5">
            <router-link to="/editorsandreviewers">
              <p class="blink">Join As A reviewer</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/tur.jpg" height="90" width="180" />
            <p>Plagiarism is checked by the leading plagiarism checker</p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/doi.jpg" height="90" width="180" />
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
          <div class="shadow-effect mb-5">
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
  },

};
</script>

<style scoped>
h3 {
  padding-bottom: 20px;
  font-family: "Rubik", sans-serif;
  font-size: 24px;
}

h5 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 18px;
}

p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}

.missionList {
  margin-left: -20px;
}

.missionContent {
  padding-bottom: 20px;
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