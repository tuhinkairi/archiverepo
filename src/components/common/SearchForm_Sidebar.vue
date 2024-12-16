<template>
    <!-- search -->
    <div>
        <div class="col-xl-12 search-area">
        <h2 class="sidebar-widget-title">Search</h2>
        <div class="search-form">
            <input type="text" placeholder="Search anything">
            <button><font-awesome-icon :icon="['fas', 'search']" /></button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SearchFormSidebar",
};

</script>

<style scoped>
</style>