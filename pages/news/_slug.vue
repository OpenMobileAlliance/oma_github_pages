<template>
  <Main>
    <RowDocumentHeader :document="document" />
    <Default :document="document" />
  </Main>
</template>

<script>
export default {
  data() {
    return {
      document: {
        modules: []
      }
    }
  },
  async fetch() {
    const doc = await this.$content('news', this.$route.params.slug).fetch()
    this.document = doc
  }
}
</script>
