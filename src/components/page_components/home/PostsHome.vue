<template>
  <div>
    <section class="posts-area">
      <div class="container">
        <div class="section-heading text-center mx-auto">
          <h2 class="feature-title">Enhanced Features of an Editorial Management System:<br> (Online submission)</h2>
          <!-- <p>
            We have people of multiple kind in the house. Together we can
            provide high quality work to satisfy you.
          </p> -->
        </div>
        <div class="row">
          <Post
            :category="post1.category"
            :date="post1.date"
            :postThumbnail="post1.postThumbnail"
            :title="post1.title"
            :Excerpt="post1.excerpt"
          />

          <Post
            :category="post2.category"
            :date="post2.date"
            :postThumbnail="post2.postThumbnail"
            :title="post2.title"
            :Excerpt="post2.excerpt"
          />

          <Post 
            :category="post3.category"
            :date="post3.date"
            :postThumbnail="post3.postThumbnail"
            :title="post3.title"
            :Excerpt="post3.excerpt"
          />
          <Post 
            :title="post4.title"
          />
          <Post 
            :title="post5.title"
          />
          <Post 
            :title="post6.title"
          />
          <Post 
            :title="post7.title"
          />
          <Post 
            :title="post8.title"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Post from "@/components/page_components/blog/PostExcerpt";

export default {
  name: "PostsHome",
  components: {
    Post,
  },
  data() {
    return {
      post1: {
        // category: "News",
        // date: "Feb 27, 2020",
        // postThumbnail: require("@/assets/blog/post-01.png"),
        title: "Exclusive Author Account for Each Journal",
        // excerpt:
        //   "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti.",
      },
      post2: {
        // category: "Sports",
        // date: "Feb 20, 2020",
        // postThumbnail: require("@/assets/blog/post-02.png"),
        title: "Streamlined Article Status Updates",
        // excerpt:
        //   "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti.",
      },
      post3: {
        // category: "International",
        // date: "January 24, 2020",
        // postThumbnail: require("@/assets/blog/post-03.png"),
        title: "Efficient Review Status and Peer Review Reports",
        // excerpt:
        //   "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti.",
      },
      post4: {
        title:"Task Status Monitoring"
      },
      post5: {
        title:"Automated Acceptance Letters"
      },
      post6: {
        title:"Simplified Copyright Forms"
      },
      post7: {
        title:"Comprehensive FAQs and Knowledgebase"
      },
      post8: {
        title:"Convenient Certificate and Published Article Downloads"
      },
    };
  },
};
</script>

<style scoped>
.post-excerpt a {
  background-color: #74a9da !important;
}
.feature-title{
  color: #74a9da;
}
</style>

<style>
.section-heading {
  width: 100%;
}
</style>

