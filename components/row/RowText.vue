<template>
  <div class="row-text">
    <b-row :class="status">
      <b-col class="text-col">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="pt-3" v-html="formatedText"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
      default() {
        return null
      },
    },
  },
  computed: {
    formatedText() {
      return this.text && this.text.length > 0 ? marked(this.text) : ''
    },
  },
}
</script>
