<template>
  <div class="Home">
    <h1 class="text-center mb-5">Home</h1>
      <article v-for="article in articles">
        <h3><a :href="'/article/' + article.slug">{{ article.title }}</a></h3>
        <div>{{ article.description }} <a :href="'/article/' + article.slug">+ more</a></div>
        <hr>
      </article>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      articles: [
      {
          title: "Title 1",
          slug: "title-1",
          description: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
          body: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
        },
        {
          title: "Title 2",
          slug: "title-2",
          description: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
          body: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
        },
        {
          title: "Title 3",
          slug: "title-3",
          description: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
          body: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
        },
        {
          title: "Title 4",
          slug: "title-4",
          description: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
          body: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
        },
        {
          title: "Title 5",
          slug: "title-5",
          description: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
          body: "Lorem ipsum dolor sit amet dwidnoa gmcaosnd erlrka. djwiadioa ionmanfnfam dnwof mdwma pm pimjp?",
        }
      ]
    }
  }
}
</script>
