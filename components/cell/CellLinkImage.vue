<template>
  <b-link
    v-if="url && url.match('(ftp|https?):')"
    :href="url"
    :target="target"
    :class="[{disabled: !url}]"
  >
    <b-img :alt="alt" :src="src" />
  </b-link>
  <b-link
    v-else
    :to="url"
    :class="[{disabled: !url}]"
  >
    <b-img :alt="alt" :src="src" />
  </b-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: '#'
    },
    target: {
      type: String,
      required: false,
      default: ''
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }

}
</script>
