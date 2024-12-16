<template>
  <!-- Contact Form -->
  <div class="contact-form-area wow animate__animated animate__fadeIn">
    <h3>Leave a message</h3>
    <div class="row">
      <form action="#">
        <div class="col-md-4">
          <input type="text" placeholder="Your Name" />
        </div>
        <div class="col-md-4">
          <input type="email" placeholder="Your Email" />
        </div>
        <div class="col-md-4">
          <input type="text" placeholder="Subject" />
        </div>
        <div class="col-12">
          <textarea placeholder="Your Message"></textarea>
          <input class="large-blue-button" type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  metaInfo() {
  return {
    title: 'Contact Us | International Journal | IJIRE',
    meta: [
      { name: 'description', content: 'Get in touch with IJIRE for support with publishing your paper. Find contact details for questions about submissions, fees, and the review process.' }
    ],
    link: [
      {
        rel: 'canonical',
        href: window.location.href
      }
    ]
  };
}

};
</script>


<style scoped>
</style>
