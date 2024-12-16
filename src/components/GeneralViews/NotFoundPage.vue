<template>
  <div class="not-found">
    <TopHeader />
    <MenuStyle1 />
    <div class="centered">
      <h1><i class="not-found-icon nc-icon nc-puzzle-10"></i> 404</h1>
      <p>The page you requested could not be found.</p>
      <router-link to="/" class="btn btn-primary">Go to Homepage</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import Footer from '@/components/layout/Footer.vue'; // Adjust the path as necessary

export default {
  components: {
    TopHeader,
    MenuStyle1,
    Footer
  }
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the page takes at least the full height of the viewport */
}

.centered {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  margin: 0;
  color: #333; /* Customize your color */
}

.not-found-icon {
  font-size: 4rem; /* Adjust icon size */
  color: #007bff; /* Customize your icon color */
}

p {
  font-size: 1.5rem;
  color: #666; /* Customize your text color */
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  background-color: #007bff; /* Customize button color */
  color: white; /* Customize button text color */
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3; /* Darker shade for hover effect */
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>

