<template>
  <b-link
    v-if="url && url.match('(ftp|https?):')"
    :target="target"
    :href="url">
    {{ text }}
  </b-link>
  <b-link
    v-else
    :to="url">
    {{ text }}
  </b-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
