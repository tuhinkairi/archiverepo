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
      <div class="container"  style="max-width: 1000px !important; margin: 0">
        <div class="row justify-content-between">
          <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">Publication Ethics Policy: </span>
          <div>
            <p class="statement">
              (The following statements are based on Elsevier recommendations
              and COPE's Best Practice Guidelines for Journal Editors)
            </p>
            <p>
              To maintain fair practice we at IJIRE strongly believe in
              following these guidelines. We are committed to fair practice of
              publication. Success in this regard can be achieved if ethics are
              well practiced by following participants:
            </p>
            <h2>Ethical guidelines for journal publication</h2>
            <p>
              International Journal of Innovative Research in Engineering is
              committed to ensuring ethics in publication and quality of
              articles. Especially, International Journal of Innovative Research
              in Engineering is following the Code of Conduct as defined by the
              Committee of Publication Ethics
              (COPE).https://publicationethics.org/files/u2/New_Code.pdf
            </p>
            <p>
              These ethics include the editor following certain rules on
              relations with readers, authors, and reviewers as well as
              procedures for handling complaints. Conformance to standards of
              ethical behaviour is therefore expected of all parties involved:
              Authors, Editors, Reviewers, and the Publisher. In particular,
            </p>
            <hr />
          </div>
          <div>
            <h2>Authors</h2>
            <p>
              Authors should present an objective discussion of the significance
              of research work as well as sufficient details and references.
            </p>
            <p>
              Authors should maintain accurate records of data associated with
              their submitted manuscript and supply or provide access to these
              data, on reasonable request. Authors guarantee that all data used
              in the article are real and authentic. Where appropriate and where
              allowed by employer, funding body and others who might have an
              interest, authors should deposit data in a suitable repository or
              storage location, for sharing and further use by others.
            </p>
            <p>
              Fraudulent or knowingly inaccurate statements constitute unethical
              behaviour and are unacceptable.
            </p>
            <p>
              The authors should ensure that their work is entirely original,
              and if the work and/or words of others have been used, this fact
              has been appropriately acknowledged. Plagiarism in all its forms
              constitutes unethical publishing behaviour and is unacceptable.
              Submitting the same manuscript to more than one journal
              concurrently constitutes unethical publishing behaviour and is
              unacceptable. Authors should not submit articles describing
              essentially the same re-search to more than one journal.
            </p>
            <p>
              Authors should acknowledge the financial support and help/guidance
              of others if appropriate.
            </p>
            <p>Authors should provide the disclaimer if appropriate.</p>
            <p>
              All co-authors should significantly contribute to the research.
              The corresponding author should ensure that there is a full
              consensus of all co-authors in approving the final version of the
              paper and its submission for publication.
            </p>
            <p>Authors are obliged to participate in peer review process.</p>
            <p>
              Authors should notify promptly the editor if a significant error
              in their publication is identified, and cooperate with the editor
              to publish an erratum, addendum, corrigendum notice, or to
              re-tract the paper, where it is deemed necessary.
            </p>
          </div>
          <div>
            <h2>Editors</h2>
            <p>
              Editors have complete responsibility and authority to
              accept/reject a manuscript.
            </p>
            <p>
              Editors should evaluate manuscripts exclusively on the basis of
              their academic merit. Editors act in a balanced, objective and
              fair way while carrying out their expected duties, without
              discrimination on grounds of gender, sexual orientation, religious
              or political beliefs, ethnic or geographical origin of the
              authors.
            </p>
            <p>Editors accept the paper when reasonably certain.</p>
            <p>
              Editors must not use unpublished information in the editor's own
              research without the express written consent of the author.
            </p>
            <p>Editors preserve anonymity of reviewers.</p>
            <p>
              When errors are found, editors promote publication of correction
              or retraction.
            </p>
            <p>
              Editors should take reasonable responsive measures when ethical
              complaints have been presented concerning a submitted manuscript
              or published article.
            </p>
          </div>
          <div>
            <p>
              Any manuscripts received for review must be treated as
              confidential documents. Privileged information or ideas obtained
              through peer review must be kept confidential and not used for
              personal advantage.
            </p>
            <p>
              Reports should be conducted objectively, and observations should
              be formulated clearly with supporting arguments, so that authors
              can use them for improving the paper. Any relevant published work
              which is not yet cited should be pointed out.
            </p>
            <p>
              Any selected referee who feels unqualified to review the research
              reported in a manuscript or knows that its prompt review will be
              impossible should notify the editor and excuse himself from the
              review process.
            </p>
            <p>
              Reviewers should not consider manuscripts in which they have
              conflicts of interest resulting from competitive, collaborative,
              or other relationships or connections with any of the authors,
              companies, or institutions connected to the papers.
            </p>
          </div>
          <div>
            <h2>Publisher</h2>
            <div class="publicationList">
              <ul>
                <li>
                  <p>Publisher monitors and safeguards publishing ethics.</p>
                </li>
                <li><p>Publisher communicates journal policies.</p></li>
                <li>
                  <p>Publisher respects privacy of all parties involved.</p>
                </li>
                <li><p>Publisher fosters editorial independence.</p></li>
                <li>
                  <p>
                    Publisher maintains the integrity of the academic record.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher protects intellectual property and copyrights.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher publishes corrections, clarifications, and
                    retractions.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher constantly improves the quality of the journal.
                  </p>
                </li>
              </ul>
            </div>
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

<style>
h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 24px;
}
h2 {
  font-family: "Rubik", sans-serif;
  padding: 10px 0 10px 0;
  font-size: 18px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.statement {
  color: green;
  font-size: 14px;
}
.publicationList {
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