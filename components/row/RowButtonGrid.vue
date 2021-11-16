
<template>
  <div :id="config.id" class="row-button-grid">
    <b-row>
      <b-col v-for="(col, index) in config.cols" :key="`${col.title}_${index}`">
        <div class="text-center text-primary col-title">
          <FontAwesomeIcon :icon="col.image.split(' ')" class="fa-2x" />
          <p class="h5 mb-0">{{ col.title }}</p>
          <p class="col-title-subtitle font-italic">{{ col.subtitle }}</p>
        </div>
        <a
          v-for="(button, order) in col.items"
          :key="`${button.status}_${order}`"
          role="button"
          class="btn btn-block button"
          :class="button.status"
          :href="button.url"
          :target="button.target"
        >
          <p class="button-title">{{ button.title }}</p>
          <p class="button-subtitle">{{ button.subtitle }}</p>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
