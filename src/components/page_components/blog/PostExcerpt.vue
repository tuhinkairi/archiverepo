<template>
  <div class="col-xl-3 col-lg-3 col-md-8 offset-lg-0 offset-md-2 d-flex">
    <div class="post flex-fill">
      <!-- <div class="post-thumbnail">
        <a href="javascript:void(0)"
          ><img alt="image" v-bind:src="postThumbnail" alt="Habu"
        /></a>
      </div> -->
      <div class="post-excerpt">
        <!-- <a href="javascript:void(0)" class="category">{{ category }}</a> -->
          <p><span><img alt="image"
                  src="../../../assets/Images/tick.png"
                  class="tick mr-2"
                  width="25"
                  height="25"
                /></span>{{ title }}</p>
        <!-- <p>{{ Excerpt }}</p> -->
        <!-- <hr /> -->
        <!-- <div class="post-extra">
          <p>{{ date }}</p>
          <a href="javascript:void(0)"
            ><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /> Read
            More</a
          >
        </div> -->
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Post",
  props: ["category", "title", "date", "postThumbnail", "Excerpt"],
};
</script>

<style scoped>
.post-excerpt > a:hover {
  color: rgb(255, 255, 255);
}
.category {
  background-color: #74a9da;
}
</style>
<style>
.post-excerpt p{
  text-align: left;
  margin-bottom: 0;
}
.post-excerpt{
 padding: 20px;
}
.post-excerpt h2{
  margin: 0;
}
.post {
  border-radius: 5px;
}
</style>