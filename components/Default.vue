<template>
  <div class="row-dowument">
    <b-row class="py-3">
      <b-col>
        <nuxt-content :document="document" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
  },
}
</script>
