<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-8 variant="info"
            >Privacy Policy<b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-8"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                By accessing Worldwide Journals Website, certain information
                about you, such as Internet protocol (IP) addresses, navigation
                through the Site, the systems and programs used, and the time
                spent, along with other similar information, may be stored on
                our servers. We may use this stored information to provide a
                safe, efficient, smooth, customized experience.
              </p>
              <p>
                Such stored information may not specifically identify you.
                However, we may use the same for website traffic analysis or
                other such purposes as appropriate.
              </p>
              <p>
                If you provide unique identifying information, such as name,
                address, and other information, to us, such information may be
                used for statistical and other purposes. If you choose to
                transact on the Website, we also collect information about your
                buying behavior.
              </p>
              <p>
                Any personally identifiable information you submit while
                reviewing our website will not disclose or sell, or in any way
                reveal your information to any other unrelated third party.
              </p>
              <p>
                We use data-gathering devices such as "cookies" on certain pages
                of the Website to help evaluate web page traffic, gauge
                promotional efficacy, and promote confidence and safety.
                "Cookies" are tiny files that are stored on your hard disc to
                help us provide our services. Certain functions are only
                accessible through a "cookie." Additionally, "cookies" or other
                similar devices may be put on certain sections of the Website.
              </p>
              <p>
                We want you to feel comfortable reviewing the Worldwide
                International Journals Research data on our website, so we are
                dedicated to protecting the information we gather. While no
                website can ensure security, we have put suitable managerial,
                technological, and physical safeguards to help secure the
                sensitive information you provide. We will use reasonable and
                current Internet security methods and technologies to avoid
                unauthorized entry, keep data accurate, and guarantee proper
                information use.
              </p>
              <p>
                All payments on the Website are Verisign SSL secured. This means
                all Personal Information you provide on the Website is
                transmitted using SSL (Secure Socket Layer) encryption. SSL is a
                proven coding system that lets your browser automatically
                encrypt or scramble data before sending it to us. The exact
                process happens when you make the payment on our website.
              </p>
              <p>
                We respect your privacy, and all the data you provide shall be
                governed under the above Privacy Policy and the Terms of Use of
                Worldwide Journals, which may be amended occasionally. Hence,
                International Journal research advises you to have a patient for
                the above-mentioned condition.
              </p>
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