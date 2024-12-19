<template>
  <div>
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">
        <div style="width: 200px;" class="right-side-container ml-2">
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
        <div class="row justify-content-between">
          <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">Peer Review Policy :</span>
          <div>
            <p>
              International Journal of Innovative Research in Engineering
              (IJIRE) (Online), Bi-monthly international journal for publication
              of new ideas founded by academicians, educationist, engineers and
              corporate people. The research results and fundamental advancement
              are all aspects of Innovative Research in Advanced Engineering &
              Technology and various engineering disciplines, etc. IJIRE is a
              scholarly open access, Double Blind Peer Review Journal which
              helps to academic person as well as student community. IJIRE
              provides the academic community and industry for the submission of
              original research and applications related to Various Engineering
              discipline and Advanced Technologies.
            </p>
            <p>
              Reviewers play a central role in scholarly publishing. IJIRE uses
              double-blind peer review process, which means that both the
              reviewer(s) and author(s) identities are concealed from the
              reviewer(s), and vice versa, throughout the review process. This
              means that the reviewer(s) of the paper won’t get to know the
              identity of the author(s), and the author(s) won’t get to know the
              identity of the reviewer(s). Peer review helps validate research,
              establish a method by which it can be evaluated, and increase
              networking possibilities within research communities. Despite
              criticisms, peer review is still the only widely accepted method
              for research validation.
            </p>
            <p>
              All submitted papers will be reviewed by double blind peer review
              process which may take minimum 01 to 03 weeks from the date of
              submission. We are advising to all the author(s), do not submit
              same paper to the multiple journals. You should wait for review
              status of paper.
            </p>
          </div>
          <div>
            <span style="font-weight:Bold">
              IJIRE is committed to prompt evaluation and publication of fully
              accepted papers. To maintain a high-quality publication, all
              submissions undergo a rigorous review process.
            </Span>

            <div style="margin-bottom: 20px;">
            <h2 style="font-size: 1.2em; margin-top: 20px; margin-bottom: 10px;">
            Characteristics of the peer review process are as follows:
           </h2>
            </div>
            <div class="reviewList">
              <ul>
                <li>
                  <p>
                    Simultaneous submissions of the same manuscript to different
                    journals will not be tolerated.
                  </p>
                </li>
                <li>
                  <p>
                    Manuscripts with contents outside the scope will not be
                    considered for review.
                  </p>
                </li>
                <li>
                  <p>
                    Papers will be refereed by at least 3 or 4 experts
                    (reviewers) as suggested by the editorial board in which 01
                    from India and rest 02 or 03 from overseas.
                  </p>
                </li>
                <li>
                  <p>
                    In addition, Editors will have the option of seeking
                    additional reviews when needed.
                  </p>
                </li>
                <li>
                  <p>
                    Authors will be informed when Editors decide further review
                    is required. All publication decisions are made by the
                    journal’s Editors-in-Chief on the basis of the referees’
                    reports (reviewers report).
                  </p>
                </li>
                <li>
                  <p>
                    Authors of papers that are not accepted are notified
                    promptly.
                  </p>
                </li>
                <li>
                  <p>
                    All submitted manuscripts are treated as confidential
                    documents. All submitted papers will be reviewed by double
                    blind review process.
                  </p>
                </li>
                <li>
                  <p>
                    All manuscripts submitted for publication in IJIRE
                    cross-checked for plagiarism software. Manuscripts found to
                    be plagiarized during initial stages of review are
                    out-rightly rejected and not considered for publication in
                    the journal.
                  </p>
                </li>
                <li>
                  <p>
                    In case if a manuscript is found to be plagiarized after
                    publication, the Editor-in-Chief will conduct preliminary
                    investigation, may be with the help of a suitable committee
                    constituted for the purpose. If the manuscript is found to
                    be plagiarized beyond the acceptable limits, the journal
                    will contact the author’s Institute / College / University
                    and Funding Agency, if any.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <h3 style="font-size: 1em;">
            IJIRE strictly uses following double blind peer review process
          </h3>
          <div>
            <h2 style="font-size: 1.2em; margin-top: 20px; margin-bottom: 10px;">Peer Review Process :</h2>
            <p>
              Submissions to the International Journal of Innovative Research in
              Engineering (IJIRE) passes through a double-blind peer-review
              process. The criteria for publication in International Journal of
              Innovative Research in Engineering (IJIRE) are as follows:
            </p>
            <div class="reviewList">
              <ul>
                <li>
                  <p>
                    The study presents the results of primary scholarly
                    research.
                  </p>
                </li>
                <li>
                  <p>Results reported have not been published elsewhere.</p>
                </li>
                <li>
                  <p>
                    The research meets all applicable standards of ethics and
                    research integrity.
                  </p>
                </li>
                <li>
                  <p>
                    Experiments, statistics, and other analyses are performed to
                    a high technical standard and are described in sufficient
                    detail.
                  </p>
                </li>
                <li>
                  <p>
                    Conclusions are presented in an appropriate fashion and are
                    supported by the data.
                  </p>
                </li>
                <li>
                  <p>
                    The article is presented in an intelligible fashion and is
                    written in Standard English.
                  </p>
                </li>
              </ul>
            </div>
            <p>
              Once the manuscripts have passed quality control, they are
              assigned to a member of the Editorial Board (or an expert who is
              not a member of the Board) for conducting the peer-review process
              and for making a decision to accept, invite revision of, or reject
              the article.
            </p>
          </div>
          <div class="reviewImage">
            <img alt="image" src="../../../assets/Images/Peer.png"  />
          </div>
        </div>
      </div>
      <div style="width: 200px;" class="left-side-container mr-2">
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
    }
};
</script>

<style scoped>
h3,
h5,
h6 {
  font-family: "Rubik", sans-serif;
}
h6 {
  padding: 10px 0 10px 0;
}
h5 {
  padding-bottom: 10px;
  font-size: 18px;
}
h3 {
  padding-bottom: 20px;
  font-size: 24px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.reviewList {
  margin-left: -20px;
}
.reviewImage img {
  padding: 40px 80px 0 0;
  max-width: 107%;
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