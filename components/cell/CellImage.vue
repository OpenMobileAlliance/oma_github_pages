<template>
  <b-img :alt="title" :src="image" />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default() {
        return ''
      }
    }
  }
}
</script>
