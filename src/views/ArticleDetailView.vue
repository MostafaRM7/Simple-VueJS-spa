<template>
    <div class="ArticleDetail">
      <h1 class="text-center mb-5">Article</h1>
        <article>
          <h3>{{ article.title }}</h3>
          <div>{{ article.body }}</div>
        </article>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ArticleDetailView',
    data() {
      return {
        article: JSON.parse(localStorage.getItem("articles")).find(
            article => article.slug == this.$route.params.slug
        )
      }
    }
  }
  </script>
  