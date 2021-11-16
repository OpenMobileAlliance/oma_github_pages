<template>
  <div class="row-image">
    <b-row :class="status">
      <b-col>
        <b-img :src="image" :alt="title" />
      </b-col>
    </b-row>
  </div>
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
      required: true,
    },
    status: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
}
</script>
