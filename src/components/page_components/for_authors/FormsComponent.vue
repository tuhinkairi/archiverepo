<template>
  <div>
    <section class="speciality-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="row">
            <div
              class="
                col-lg-4 col-md-4 col-sm-4
                indexingImage
                single-pricing-table
              "
            >
              <div class="" style="text-align: center; padding-top: 80px">
                <h6>Manuscript Template</h6>
                <button
                  @click="getManuScript(this.ManuScriptUrl)"
                  class="btn m-2"
                >
                  Download
                </button>
              </div>
            </div>
            <div
              class="
                col-lg-4 col-md-4 col-sm-4
                indexingImage
                single-pricing-table
              "
            >
              <div style="text-align: center; padding-top: 80px">
                <h6 class="justify content center">Copyright Form</h6>
                <button
                  @click="getCopyRightForm(this.CopyRightFormUrl)"
                  class="btn m-2"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
    <script>
export default {
  data: function () {
    return {
      ManuScriptUrl:"https://panel.theijire.com/storage/templates/manuscript.docx",
      CopyRightFormUrl:"https://panel.theijire.com/storage/templates/copyrights.pdf",
    };
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
  