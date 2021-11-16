<template>
  <div class="row-text-image">
    <b-row :class="status">
      <b-col :cols="cols" class="text-col">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="pt-3" v-html="formatedText"></div>
      </b-col>
      <b-col class="image-col">
        <b-img :src="image" :alt="title" />
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
        return null
      },
    },
    image: {
      type: String,
      required: null,
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
    status: {
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
