<template>
  <div class="row-image-text">
    <b-row :class="status">
      <b-col :cols="cols" class="image-col">
        <b-img :src="image" :alt="title" />
      </b-col>
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
    cols: {
      type: Number,
      default: 6,
    },
    text: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    status: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    image: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    title: {
      type: String,
      required: false,
      default() {
        return ''
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
