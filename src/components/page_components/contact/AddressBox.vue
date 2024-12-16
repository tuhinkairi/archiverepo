<template>
  <div>
    <section class="contact-area">
      <div class="container">
        <div
          class="
            section-heading
            text-center
            mx-auto
            wow
            animate__animated animate__slideInUp
          "
        >
          <h2>Feel Free To Contact Us</h2>
        </div>
        <div class="address-container wow animate__animated animate__fadeIn">
          <div class="row">
            <div class="col-sm-4 col-6 d-flex align-items-center">
              <div class="address-box mx-auto">
                <img class="mx-auto" src="@/assets/svgs/map.png" alt="map" />
                <p class="text-white">
                  Fifth Dimension research Publication (P) Ltd.
                </p>
                <p class="text-white">No:38D5F, Rajaji
                  nagar, Ariyalur-621713.</p>
                  <p class="text-white">Tamilnadu, India.</p>
              </div>
            </div>
            <div class="col-sm-4 col-6 d-flex align-items-center">
              <div class="address-box mx-auto">
                <img
                  class="mx-auto"
                  src="@/assets/svgs/chatting.png"
                  alt="map"
                />
                <a href="#">+91 9840521421</a>
                <!-- <a href="tel:+1232533654">+1 2325 33654</a> -->
              </div>
            </div>
            <div class="col-sm-4 col-6 mx-auto d-flex align-items-center">
              <div class="address-box mx-auto">
                <img
                  class="mx-auto"
                  src="@/assets/svgs/message.png"
                  alt="map"
                />
                <a href="#"
                  >editorinchief@theijire.com, editorinchiefijire@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "AddressBox",
  components: {
    ContactForm,
  },
};
</script>

<style>
section.contact-area {
  background-image: url("~@/assets/svgs/map-bg.png");
}
/* .address-box{
    width:250px ;
} */
.address-container {
  background: #74a9da;
}
p{
  text-align: left;
}
</style>
