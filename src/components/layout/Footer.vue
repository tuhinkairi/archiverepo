<template>
  <div>
    <section class="footer-area">
      <div class="container position-relative">
        <div class="row ">
          <!-- First Column -->
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
           <span style="font-size: 1.5em; font-weight: bold; color: #74a9da;">Contact</span>
           <p>
            Fifth Dimension Research Publication (P) Ltd. <br />No:
            38D5F, Rajaji Nagar, Ariyalur-621713.<br />Tamilnadu, India.<br />
              +91 98405 21421 <br /><i>
                editorinchief@theijire.com, editorinchiefijire@gmail.com</i>
            </p>
          </div>

          <!-- Second Column -->
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <span style="font-size: 1.5em; font-weight: bold; color: #74a9da;">Quick Links</span>
            <ul>
              <li><router-link to="/" >Home</router-link></li>
              <li><router-link to="/ethics" >About Us</router-link></li>
              <li><router-link to="/archives" >Archives</router-link></li>
              <li><router-link to="/topics" >For Authors</router-link></li>
              <li><router-link to="/faqs" >FAQs</router-link></li>
              <li><router-link to="/contact-us" >Contact Us</router-link></li>
            </ul>
          </div>

          <!-- Third Column -->
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <span style="font-size: 1.5em; font-weight: bold; color: #74a9da;">Submission Guidelines</span>
            <ul>
              <li><router-link to="/editorial-board">Editorial Management System</router-link></li>
              <li><router-link to="/paper-status">Status of your Article</router-link></li>
              <li><router-link to="/article-processing-charges">Pay Fee</router-link></li>
            </ul>
          </div>

          <!-- Fourth Column -->
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <span style="font-size: 1.5em; font-weight: bold; color: #74a9da;">Policies</span>
            <ul>
              <li><router-link to="/ethics">Ethics And Policies</router-link></li>
              <li><router-link to="/peer-review-policy">Peer Review Policy</router-link></li>
              <li><router-link to="/publication-ethics-policy">Publication Ethics Policy</router-link></li>
            </ul>
          </div>

          <!-- Fifth Column -->
          <div class="col-lg-4 col-md-8 col-sm-12 col-12">
            <span style="font-size: 1.5em; font-weight: bold; color: #74a9da;">Our Newsletter</span>
            <p>Subscribe to our mailing list to get updates to your email inbox</p>
            <form action="/">
              <input type="email" placeholder="E-mail" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
        <a class="mt-1 go-to-top goToTopIcon" href="#">
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
        </a>
      </div>
    </section>

    <!-- Copyright Section -->
    <div class="container text-center copyright">
      <p>&copy; {{currentYear}} Fifth Dimension Research Publication. Made with <i class="bi bi-heart-fill" style="color: #FF0000;"></i> in India by <a href="https://www.flaptics.io/" target="_blank">Flaptics</a></p>
    </div>
  </div>
</template>
