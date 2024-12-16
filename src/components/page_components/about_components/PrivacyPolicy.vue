<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-8 variant="info"
            >Privacy Policy <b-icon-arrow-down></b-icon-arrow-down>
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
                By accessing World Wide Journals Website, certain information
                about you, such as Internet protocol (IP) addresses, navigation
                through the Site, the systems and programs used and the time
                spent, along with other similar information, may be stored on
                our servers. We may use this stored information with the
                objective of providing you a safe, efficient, smooth and
                customized experience.
              </p>
              <p>
                Such stored information may not specifically identify you.
                However, we may use the same for web site traffic analysis or
                for other such purposes, as we may deem appropriate.
              </p>
              <p>
                If you provide unique identifying information, such as name,
                address and other information to us, such information may be
                used for statistical and/or other purposes. If you choose to
                transact on the Website, we collect information about your
                buying behaviour as well.
              </p>
              <p>
                Any personally identifiable information you submit while
                reviewing our website will not disclose or sell or in any way
                reveal your information to any other unrelated third party.
              </p>
              <p>
                We use data collection devices such as "cookies" on certain
                pages of the Website to help analyse our web page flow, measure
                promotional effectiveness, and promote trust and safety.
                "Cookies" are small files placed on your hard drive that assist
                us in providing our services. We offer certain features that are
                only available through the use of a "cookie". Additionally, you
                may encounter "cookies" or other similar devices on certain
                pages of the Website that are placed
              </p>
              <p>
                We want you to feel confident about using our website to plan
                for reviewing the World Wide Journals details, so we are
                committed to protecting the information we collect. While no Web
                site can guarantee security, we have implemented appropriate
                administrative, technical, and physical security procedures to
                help protect the personal information you provide to us. To
                prevent unauthorized access, maintain data accuracy, and ensure
                correct use of information, we will employ reasonable and
                current Internet security methods and Technologies.
              </p>
              <p>
                Our Website has stringent security measures in place to protect
                the loss, misuse, and alteration of the information under our
                control. Whenever you change or access your account information,
                we offer the use of a secure server. Once your information is in
                our possession we adhere to strict security guidelines,
                protecting it against unauthorized access.
              </p>
              <p>
                All payments on the Website are Verisign SSL secured. This means
                all Personal Information you provide on the Website is
                transmitted using SSL (Secure Socket Layer) encryption. SSL is a
                proven coding system that lets your browser automatically
                encrypt, or scramble, data before you send it to us. The same
                process happens when you make the payment on our website.
              </p>
              <p>
                We respect your privacy and all the data provided by your shall
                be govered under the above Privacy Policy and the Terms of Use
                of World Wide Journals which may be amended from time to time.
                Hence, World Wide journals advice you to have patient for above
                mentioning condition.
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