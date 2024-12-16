<template>
    <section class="speciality-area ">
        <div class="flex-wrap flex-sm-nowrap" style="display: flex;justify-content: space-around;">
            <div style="width: 200px;">
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
                <div class="row">
                    <div class="row">
                        <div class="container col-lg-12 col-md-12 mt-3" style="max-width: 100vw;">
                            <h2 class="headingThree" style="font-size: 1.5em; margin-bottom: 30px; font-weight: bold;">
                                1. How to submit article?
                            </h2>
                            <div class="ps-3">
                                <p>Create <b>Account</b> by using Author <b>Name, email ID, Mobile No.</b> Once Account
                                    created,
                                    author can
                                    enter directly Login Credential. After that, By Using New Submission, author can
                                    submit Article.
                                </p>
                                <p><b class="text-danger">Note:</b> Make sure are you entered correct email ID, Mobile
                                    No. because
                                    we will
                                    send Notification registered Email, Mobile No.</p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height="315"
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/ijireimageone.png"
                                    class="img-fluid" />
                            </div>
                            <div class="ps-3">
                                <p>While Submitting Article, author can choose below Details:</p>
                                <ul>
                                    <li>
                                        <p>Research Area</p>
                                    </li>
                                    <li>
                                        <p>Mode of Process</p>
                                    </li>
                                    <li>
                                        <p>Type of article</p>
                                    </li>
                                    <li>
                                        <p>Type of Issues</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="row justify-content-center mx-auto p-sm-4" style="max-width: 90vw;">                                <iframe width="690" height="315" src="https://www.youtube.com/embed/RUtHKw7v4II"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <h2 class="headingThree mt-4" style="font-size: 1.5em; margin-bottom: 30px; font-weight: bold;">
                                2. Author can know task Process?
                            </h2>
                            <div class="ps-3">
                                <p>Yes. Absolutely.</p>
                                <p>After submitted article. Your article under Editorial Check. It can be represented,
                                    in terms of
                                    Plagiarism Check, Peer-Review etc. Once your article accepted after Review process,
                                    Author can
                                    view the
                                    Task with Status.</p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height="315"
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/imagetwo.png"
                                    class="img-fluid" />
                            </div>
                            <h2 class="headingThree mt-4" style="font-size: 1.5em; margin-bottom: 30px; font-weight: bold;">
                                3. Author can know Review Process?
                            </h2>
                            <div class="ps-3">
                                <p>Yes. Absolutely. </p>
                                <p>After plagiarism Check, Article will assign to reviewer with respective Research
                                    area. Once
                                    Editorinchief, received response from reviewers. Final Note will be Displayed, Like
                                    -Accept/Accept with
                                    minor correction/ Reject notification will send to author.</p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height="315"
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/imagethree.jpg"
                                    class="img-fluid" />
                            </div>
                            <h2 class="headingThree mt-4" style="font-size: 1.5em; margin-bottom: 30px; font-weight: bold;">
                                4. How Author can Know submitted Article Accepted or Not?
                            </h2>
                            <div class="ps-3">
                                <p>Once Reviewer’s Command Satisfactory, Editorinchief will release Acceptance letter
                                    along with
                                    Tentative
                                    Article Publication Scheduled Date through Editorial Office. Author can view in
                                    Acceptance Tap.
                                </p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height="315"
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/imagefour.jpg"
                                    class="img-fluid" />
                            </div>
                            <h2 class="headingThree mt-4" style="font-size: 1.5em; margin-bottom: 30px; font-weight: bold;">
                                5. What is the Procedure for Accepted Article to be publish?
                            </h2>
                            <div class="ps-3">
                                <p>Once you’re Article Accepted for Publication, Author have to follow 3 steps.</p>
                                <p>a) Copyright form (before generating copyright form-Author have to update profile.
                                    Like, Address,
                                    Date of
                                    Birth etc. then only copyright form will generate. Take print out manually
                                    corresponding author
                                    have to
                                    signature)</p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height="315"
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/imagefive.jpg"
                                    class="img-fluid" />
                            </div>
                            <div class="ps-3">
                                <p>b) Final Manuscript (As per our journal format)</p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height=""
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/imagesevan.jpg"
                                    class="img-fluid" />
                            </div>
                            <div class="ps-3">
                                <p>c) Article Processing fee receipt (with DOI, With out DOI) </p>
                            </div>
                            <div class="row justify-content-center p-4">
                                <img width="690" height="315"
                                    src="../../../assets/Images/Guidance-for-Ems-ijire/imagesix.jpg"
                                    class="img-fluid" />
                            </div>
                            <div class="ps-3">
                                <p>Above three document should be submit in Final submission tab. Once we received all
                                    necessary
                                    Documents.
                                    We will process your article. Article will publish with in 24hrs to 48hrs.</p>
                            </div>
                            <div class="row justify-content-center mx-auto p-sm-4" style="max-width: 90vw;">
                                <iframe width="690" height="315" src="https://www.youtube.com/embed/WiJSjpbj2Ns"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <h2 class="headingThree mt-4" style="font-size: 1.5em; margin-bottom: 30px; font-weight: bold;">
                                6. Author will get certificates including corresponding authors?
                            </h2>
                            <div class="ps-3">
                                <p>Yes. All author will get certificates. Author can download file folder. Also
                                    Published Article
                                    Copy and
                                    Journal Archive link also.</p>
                            </div>
                            <div class="row justify-content-center mx-auto p-sm-4" style="max-width: 90vw;">
                                <iframe width="690" height="315" src="https://www.youtube.com/embed/okLj9H5dZbI"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 200px;">
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
}
</script>

<style scoped>
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
</style>