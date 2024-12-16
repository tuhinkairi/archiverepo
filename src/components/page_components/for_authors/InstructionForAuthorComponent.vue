<template>
  <div>
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
            <img src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/cc.jpg" height="90" width="180" />
            <p>All research Article published on this website are licensed under Creative Commons
              Attribution-ShareAlike
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
            <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">Instruction For Authors :</span>
            <div>
              <p>
                Outlined below are the mandatory criteria for any article to be
                considered for publication in the International Journal of
                innovative Research in Engineering. Failure to adhere to these
                criteria will result in rejection of the article by the editorial
                team.
              </p>
              <p>
                Article adheres to the manuscript preparation guidelines explained
                below.
              </p>
              <div class="instructionAuthor">
                <ul>
                  <li>
                    <p>Article should be in Microsoft Word format only.</p>
                  </li>
                  <li>
                    <p>
                      Articles should be written in single column format, using
                      Times New Roman font, 11 point font size. Keep the layout of
                      the text as simple as possible.
                    </p>
                  </li>
                  <li>
                    <p>
                      Equations and formula should be readable, preferably written
                      using equation editing software’s (E.g. Math Type).
                      Alternately, authors have to provide the fonts used for
                      creating the equations/formulae.
                    </p>
                  </li>
                  <li>
                    <p>
                      All figures provided are of high resolution, preferably
                      300dpi.
                    </p>
                  </li>
                  <li>
                    <p>References should be in Times New Roman.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Manuscript Preparation Guidelines</h2>
              <p>
                Articles submitted to International Journal of innovative Research
                in Engineering should conform to the guidelines indicated below.
                Before you submit, please study the author checklist provided at
                the end of this document. Following is the chronological order of
                topics to be included in the article:
              </p>
              <div class="instructionAuthor">
                <ul>
                  <li>
                    <p>Title</p>
                  </li>
                  <li>
                    <p>Abstract</p>
                  </li>
                  <li>
                    <p>Keywords</p>
                  </li>
                  <li>
                    <p>Introduction</p>
                  </li>
                  <li>
                    <p>
                      Concept headings (include statistical methodology, if any)
                    </p>
                  </li>
                  <li>
                    <p>Discussion</p>
                  </li>
                  <li>
                    <p>Conclusion</p>
                  </li>
                  <li>
                    <p>Acknowledgements (If any)</p>
                  </li>
                  <li>
                    <p>References</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Electronic Formats</h2>
              <p>
                Authors are requested to send their articles in MS Word (.doc)
                format. In case of any difficulty with the manuscript submission
                process or concern regarding the suitability of your files, please
                contact us at <i>editorinchief@theijire.com</i> (or)
                <i>editorinchiefijire@gmail.com</i>
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Article Title</h2>
              <p>
                The title should be concise and specific to the topic of the
                article Avoid using abbreviations in the title. Titles should be
                presented in title case, meaning that all words except for
                prepositions, articles, and conjunctions should be capitalized.
                All botanical names should be in italics.
              </p>
              <p>
                <b>Eg.</b> An Experimental Study of Classification Algorithms for
                Crime Prediction.
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Author names & Affiliations</h2>
              <p>
                Provide first names or initials (if used), middle names or
                initials (if used), and surnames for all authors. Affiliation
                details should include—department, university or organization,
                city, state and country for all authors. One of the authors should
                be designated as the corresponding author with asterisk (*)
                against his/her name. Only the corresponding author’s email
                address should be provided in the article. It is the corresponding
                author’s responsibility to ensure that the author list and the
                summary of the author contributions to the study are accurate and
                complete.
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Abstract & Keywords</h2>
              <p>
                The abstract introduces the article and should not exceed 300
                words. It should mention the techniques used without going into
                methodological detail and should summarize the most important
                results. Please do not include any citations in the abstract and
                avoid using abbreviations if possible.
              </p>
              <p>
                Authors should provide 4-6 keywords for indexing purposes.
                Keywords should be written in title case and separated by comma.
                Avoid general and plural terms and multiple concepts (avoid, for
                example, ‘and’, ‘of’).
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Headings</h2>
              <p>
                The headings and subheadings, starting with “1. Introduction”,
                appear in upper and lower case letters and should be set in bold
                and aligned flush left. All headings from the Introduction to
                Acknowledgements are numbered sequentially using 1, 2, 3, etc.
                Subheadings are numbered 1.1, 1.2, etc. If a subsection must be
                further divided, the numbers 1.1.1, 1.1.2, etc.
              </p>
              <p>
                The font size for heading is 11 points bold face and subsections
                with 10 points and not bold. Do not underline any of the headings,
                or add dashes, colons, etc. (10)
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Abbreviations</h2>
              <p>
                All abbreviations should be defined on first use in the text along
                with the abbreviation in parenthesis. E.g. Magnetic Resonance
                Imaging (MRI)
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Units and Symbols</h2>
              <p>
                Symbols should be used while referring to alpha, beta, mu, etc
                (Ex: α, β, µ, etc). All units to follow the International System
                of Units (SI units).
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Figures: General guidelines</h2>
              <p>
                Figures Format & Resolution: Authors are requested to supply
                high-resolution versions of the figures in TIFF, JPEG or EPS
                format. We require that figures be created at a minimum resolution
                of 300 ppi.
              </p>
              <h3 class="custom-heading">File size:</h3>
              <p class="custom-paragraph">The file sizes should not exceed 20 MB.
              </p>
            
              <h3 class="custom-heading">File naming:</h3>
              <p class="custom-paragraph">Naming of figure files should be simple
                indicating the serial number and last name of author. E.g. if
                author’s name is Bob Marley, Figure 1 should be named as “Figure
                1. Marley”.
              </p>
              
              <h3 class="custom-heading">Citation:</h3>
              <p class="custom-paragraph">All figures must be cited in the text and authors
                should indicate where they are to be inserted in the text. Eg.
              </p>

              <h3 class="custom-heading">Figure captions:</h3>
              <p class="custom-paragraph">These have to be included in the text and
                provided sequentially at the end of the article. The captions
                should be short having 10-15 words in sentence case style. E.g.
                Figure 1. Percentage of detection rate vs. number of nodes.
              </p>

              <h3 class="custom-heading">Permissions:</h3>
              <p class="custom-paragraph">Authors should obtain permission from authors
                for copyright figures and tables before submitting to Journal of
                Science and Technology
              </p>
              <p>
                All figures will be published under a Creative Commons Attribution
                License, which allows them to be freely used, distributed, and
                built upon as long as proper attribution is given. Please do not
                submit any figures that have been previously copyrighted unless
                you have express written permission from the copyright holder to
                publish under the CCAL license.
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Tables: General guidelines</h2>
              <p>
                Tables should be included in the text file at the end of the
                article.
              </p>
              <p>
                All tables should have a concise title and written as Table 1 with
                a period (.).
              </p>
              <p><b>Eg. </b>Table 1. Stimulation settings</p>
              <p>
                Footnotes can be used to explain abbreviations. Tables extending
                beyond 1 page should be avoided.
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Acknowledgments</h2>
              <p>
                People who contributed to the work but do not fit the criteria for
                authors should be listed in the Acknowledgments, along with their
                contributions. Authors are requested to ensure that anyone named
                in the Acknowledgments agrees to being so named.
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">References</h2>
              <p>
                Only published or accepted manuscripts should be included in the
                reference list. Meetings, abstracts, conference talks, or papers
                that have been submitted but not yet accepted should not be cited.
              </p>

              <h3 class="custom-heading">In text citations:</h3>
              <p class="custom-paragraph"> References cited in text should be in
                Times New Roman
              </p>

              <h3 class="custom-heading">Reference List: </h3>
              <p class="custom-paragraph">This should only contain references to
                those works which you have cited in your text. It should appear at
                the end of your text. It should be arranged numerically by
                citation number. Examples are indicated below.
              </p>
            </div>
            <div>
              <h2 style="font-size: 1.2em; margin-bottom: 15px; margin-top: 15px;">Author Checklist before Submission</h2>
              <p>
                Are you ready to submit your article? We recommend you check these
                items one final time before uploading the article on our website.
                In case of any difficulty in submitting your article, please get
                in touch with us at <b><i>editorinchief@theijire.com</i></b> (or)
                <b><i>editorinchiefijire@gmail.com</i></b>
              </p>
              <div class="instructionAuthor">
                <ul>
                  <li>
                    <p>Manuscript is adhering to guidelines</p>
                  </li>
                  <li>
                    <p>All author affiliations provided</p>
                  </li>
                  <li>
                    <p>Corresponding author’s email address provided</p>
                  </li>
                  <li>
                    <p>All figures and tables are called out in the manuscript</p>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div style="width: 200px;" class="right-side-container ml-2">
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
h1 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 20px;
  font-size: 24px;
}

h2 {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
}

p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}

.instructionAuthor {
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
.custom-heading {
  font-size: 1.1em;
  display: inline;
  color: #647589;
}

.custom-paragraph {
  margin: 0;
  margin-bottom: 20px; /* Adds space after the paragraph */
  color: #647589;
  flex: 1;
}
</style>