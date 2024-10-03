<template>
  <Main>
    <h1>News</h1>
    <RowTags :tags="[...tags]" resource="news" />
    <RowNewsCards :news="news" />
  </Main>
</template>

<script>
export default {
    data() {
    return {
      news: [],
      tags: []
    }
  },
  async fetch() {
    const tag = this.$route.query.tag

    let doc = await this.$content('news')
    .only([
      'image', 'title', 'subtitle', 'url', 'by', 'date', 'tags', 'slug', 'excerpt'
    ])
    .sortBy('date','desc')
    .fetch()

    const tags = new Set()

    if (doc.length > 0) {
      doc.forEach(item => {
        if (item.tags) {
          const listOfTags = typeof item.tags === 'object' ? item.tags : item.tags.split(',')
          listOfTags.forEach(tag => {
            tags.add(tag.trim())
          })
        }
      });
    }

    if (tag) {
      doc = doc.filter(item => {
        return  item.tags && item.tags.includes(tag)
      })
    }

    this.news = doc
    this.tags = [...tags]
  },
  watch: {
    '$route.query': '$fetch'
  }
}
</script>
