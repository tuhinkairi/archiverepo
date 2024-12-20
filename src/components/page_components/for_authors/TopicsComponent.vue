<template>
  <div>
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">
        <div style="width: 200px;" class="left-side-container mr-2">
                <p class="blink mb-5"> <a href="http://editorial.fdrpjournals.org/login?journal=1"
                        style="color: #fff;">Submit Research Paper</a> </p>

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
        <span style="font-size: 1.5em; font-weight: bold; margin-bottom: 20px; display: block;">Topics :</span>
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h2>ENGINEERING</h2>
            <p v-for="topics in engineering" :key="topics">{{ topics }}</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h2>TECHNOLOGY</h2>
            <p v-for="topics in techmology" :key="topics">{{ topics }}</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h2>SCIENCES</h2>
            <p v-for="topics in science" :key="topics">{{ topics }}</p>
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
                    <p><a href="http://editorial.fdrpjournals.org/login?journal=1"
                            style="color:rgb(100, 117, 137)">Manuscript Submission</a></p>
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
      engineering: [
        "Acoustical Engineering	",
        "Aeronautical Engineering	",
        "Irrigation Engineering	",
        "Agricultural Engineering	",
        "Applied Engineering	",
        "Architecture & Planning",
        "Architecture Engineering	",
        "Audio Engineering",
        "Automation And Robotics Engineering",
        "Automobile Engineering",
        "Bio Engineering",
        "Biochemical Engineering",
        "Biomedical Engineering",
        "Bio-molecular Engineering",
        "Building And Construction Engineering",
        "Ceramic Engineering",
        "Chassis Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Corrosion Engineering",
        "Electrical Engineering",
        "Electronics Engineering",
        "Energy Engineering",
        "Engineering Chemistry",
        "Engineering Management",
        "Engineering Mathematics",
      ],
      techmology: [
        "Bio Technology",
        "Ceramic Technology",
        "Construction Technology And Management",
        "Dairy Technology",
        "Electronics And Media Technology",
        "Product Design Technology",
        "Fashion Technology",
        "Fiber Technology",
        "Food Technology",
        "Forensic Science And Technology",
        "Information And Communication Technology",
        "Information Technology",
        "Instrumentation Technology",
        "Leather Technology",
        "Materials Science And Technology",
        "Oil And Paint Technology",
        "Paint Technology",
        "Pharmaceutical Technology",
        "Printing Technology",
        "Pulp And Paper Technology",
        "Rubber Technology",
        "Silk Technology",
        "Sugar Technology",
        "Textile Technology",
        "Nanotechnology",
      ],
      science: [
        "Engineering Sciences",
        "Computer Science",
        "Material Sciences",
        "Biochemistry",
        "Cryogenics",
        "Seismology",
        "Aeronautics",
        "Polymer Science",
        "Information Science",
      ],
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
    };
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

<style scopes>
h2 {
  font-family: "Rubik", sans-serif;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
}

h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 20px;
  font-size: 24px;
}
.shadow-effect {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 8px;
    border-radius: 5px;
}

@media screen and (max-width:380px) {
    .email {
        font-size: 13px;
    }
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

p {
    text-align: left !important;
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