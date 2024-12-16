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
        <div class="justify-content-between">
          <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">FREQUENTLY ASKED QUESTIONS :</span>
          <div class="faqContainer">
            <p><b>Q-1: What is the ISSN of the journal? </b></p>
            <p>Ans : ISSN: 2582-8746(Online)</p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-2 : When it was started? | when first issue of the journal
                was published?
              </b>
            </p>
            <p>
              Ans : It was started in year 2020. IJIRE is being published by 5th
              Dimension Research Publication. First Issue: July-August 2020
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-3 : Is it open access journal? </b></p>
            <p>Ans : Yes, it is an open access journal.</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-4 : Is it peer reviewed journal? </b></p>
            <p>Ans : Yes, it is peer reviewed journal.</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-5 : How much time you will take to resolve a query? </b></p>
            <p>Ans : It will be resolved within 24 hours.</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-6 : What is the plagiarism policy? </b></p>
            <p>
              Ans : We do not accept papers that are having plagiarized
              contents. Good quality plagiarism software/ tool will be used to
              check similarity that would not be more than 30% including
              reference section. In the case of exclusion of references, it
              should be less than 5%.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-7 : Which software is referred for plagiarism/ similarity
                check?
              </b>
            </p>
            <p>Ans : Turnitin software/ithendicate/Plagiarism checker X</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-8 : Can I send only abstract for review? </b></p>
            <p>
              Ans : No, you have to send full length paper for review process.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-9 : Is it compulsory to come for reading/presenting the paper
                in PPT?
              </b>
            </p>
            <p>
              Ans : No, there is no need to come here for reading/presenting
              your paper. Your paper is sufficient for all purposes. Send your
              paper for review process. Once your paper is accepted by the
              editorial board of committee of the journal, we will send you
              notification of your paper over the email along with further
              guidelines for the publication of your paper.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b>Q-10 : How much time will you take for review process? </b>
            </p>
            <p>
              Ans :It depends on reviewer response. It will take min 01 to 02
              weeks.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-11 : My paper has been published. Can make any changes now in
                the paper?
              </b>
            </p>
            <p>
              Ans : Author (s) can make rectification in the final paper but
              after the final submission to the journal, rectification is not
              possible.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-12 : What are the terms and conditions to withdraw my paper?
              </b>
            </p>
            <p>
              Ans : Terms and conditions are available in the ‘Ethics & Policy’
              page. Please check the journal website. If once the paper is
              published it is not possible to withdraw the paper.
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-13 : Is any instructions/ Guidelines for authors? </b></p>
            <p>
              Ans :Yes, It is available in the ‘‘Ethics & Policy’ page. Please
              visit journal website.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b>Q-14 : What are the Terms & Conditions of the journal? </b>
            </p>
            <p>
              Ans : Please visit journal website. It is available in the
              ‘‘Ethics & Policy’ page
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-15 : Is any Article Processing Charge? </b></p>
            <p>
              Ans : Yes. Authors have to pay Article processing Charge .but
              Journal does not take any kind of publication fee/acceptance fee/
              review fee/handling fee.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-16 : My article has been published but there is some
                correction. What did I do? | My article has been published but I
                want some changes. Is it possible?
              </b>
            </p>
            <p>
              Ans : Author (s) can make rectification in the final paper but
              after the final submission to the journal, rectification is not
              possible.
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-17 : Is the scam, fake, predatory, standalone? </b></p>
            <p>
              Ans : No, this journal is not a fake journal. It is 100% legal,
              registered and recognized journal. If you have proof of it then
              please write me. We will give verification and validation.
            </p>
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
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 24px;
}
.faqContainer {
  padding-bottom: 10px;
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