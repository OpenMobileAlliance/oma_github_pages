<template>
  <font-awesome-icon :icon="icon.split(' ')" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
