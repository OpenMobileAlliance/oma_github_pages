<template>
  <b-link
    v-if="url && url.match('(ftp|https?):')"
    :href="url"
    :target="target"
    :class="[{ disabled: !url }]"
  >
    <font-awesome-icon :icon="icon.split(' ')" />
  </b-link>
  <b-link v-else :to="url ? url : '#'" :class="[{ disabled: !url }]">
    <font-awesome-icon :icon="icon.split(' ')" />
  </b-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: '#',
    },
    icon: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
