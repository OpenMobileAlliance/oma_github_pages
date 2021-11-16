<template>
  <!--  eslint-disable-next-line vue/no-v-html -->
  <div v-html="formatedText">
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    text: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
  },
  computed: {
    formatedText () {
      return  (this.text && this.text.length > 0 ? marked(this.text) : '')
    }
  }
}
</script>
