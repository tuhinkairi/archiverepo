<template>
  <div>
    <div class="top-header d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-between" >
          <div class="col-xl-5 col-lg-5 col-md-6 col-12 flex-wrap" style="display: flex; flex-direction: row;">
            <div class="top-header-contact text-nowrap">
              <a href="tel:+91 98405 21421">
                <font-awesome-icon :icon="['fas', 'phone-alt']" />+91 98405
                21421
              </a>
            </div>
            <div class="top-header-contact">
              <a href="mailto:info@example.com">
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                />editorinchief@theijire.com
              </a>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-3 col-md-4 col-sm-0 text-right top-header-social"
          >
            <a
              href="https://portal.issn.org/resource/ISSN/2582-8746"
              target="_blank"
            >
              <div>
                <p class="top-header-contact contact-number"><b>ISSN NO:</b> 2582-8746</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style scoped>
.top-header {
  background-color: #f9f9f9; /* Optional: Adjust to match your design */
  padding: 10px 0; /* Add some spacing */
}

.top-header-contact {
  display: flex;
  align-items: center;
  gap: 8px; /* Space between the icon and text */
  font-size: 14px; /* Adjust font size */
  color: #333; /* Ensure text is legible */
  padding: 2px 0;
}

.top-header-contact a {
  text-decoration: none;
  color: #333; /* Ensure text is legible */
  display: flex;
  align-items: center;
  font-size: 13px;
}

.top-header-contact svg {
  color: #74a9da; /* Icon color */
  font-size: 16px; /* Adjust icon size */
}

.top-header-social {
  text-align: right; /* Align ISSN information to the right */
  font-size: 14px;
  color: #333; /* Adjust color for readability */
}

@media screen and (max-width: 768px) {
  .top-header-contact {
    font-size: 12px; /* Adjust font size for smaller screens */
    flex-wrap: wrap; /* Wrap items on smaller screens */
  }
  .contact-number{
    display: none;
  }
  .top-header-social {
    text-align: center; /* Center align on smaller screens */
    margin-top: 10px; /* Add spacing between sections */
  }
}
</style>
