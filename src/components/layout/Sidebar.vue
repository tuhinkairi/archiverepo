<template>
    <!-- Sidebar Area -->
                    <div class="row sidebar-area">
                        <SearchFormSidebar />
                        <CategoriesSidebar />
                        <RecentPostsSidebar />
                        <TagcloudSidebar />
                        <AdBannerSidebar />
                    </div>
</template>
 
<script>
import SearchFormSidebar from '@/components/common/SearchForm_Sidebar'
import RecentPostsSidebar from '@/components/common/RecentPosts_Sidebar'
import CategoriesSidebar from '@/components/common/Categories_Sidebar'
import TagcloudSidebar from '@/components/common/Tagcloud_Sidebar'
import AdBannerSidebar from '@/components/common/AdBanner_Sidebar'

export default {
  name: "Sidebar",
  components: {
      SearchFormSidebar,
      RecentPostsSidebar,
      CategoriesSidebar,
      TagcloudSidebar,
      AdBannerSidebar
  }
};

</script>

<style scoped>
</style>