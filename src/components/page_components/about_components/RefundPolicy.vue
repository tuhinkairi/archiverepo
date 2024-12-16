<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-9 variant="info"
            >Refund Cancellation Policies
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-9"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <div>
                <p>
                  <b
                    >1) There are no charges if the article does not reach the
                    reviewing stage/not accepted.
                  </b>
                </p>
                <p>
                  <b
                    >2) No Refund will be issued if Author wish to cancel the
                    Publication with us after completing payment.
                  </b>
                </p>
                <p>
                  <b
                    >3) There are no refunds or cancellation of Debts, if the
                    article is removed due to copyright infringement Claims.
                  </b>
                </p>
              </div>
              <div>
                <p>
                  After Publish Issue/ Indexing author can’t make the correction
                  in the article. After publishing Issue/indexing, if the author
                  wants to correction in the article he/she have to pay extra at
                  per changes in the article
                </p>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-info {
  background-color: #72a9db;
}
.card {
  border: none;
}
</style>