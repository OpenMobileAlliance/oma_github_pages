<template>
  <div
  class="row row-separator"
  :class="getSize"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      require: false,
      default() {
        return 'M'
      }
    }
  },
  computed: {
    getSize() {
      let result = 'medium'
      switch (this.size.toLowerCase()) {
        case 'xs':
          result = 'extra-small'
          break;
        case 's':
          result = 'small'
          break;
        case 'm':
          result = 'medium'
          break;
        case 'l':
          result = 'large'
          break;
        case 'xl':
          result = 'extra-large'
          break;
        default:
          result = 'medium'
          break;
      }
      return result
    }
  }
}
</script>
