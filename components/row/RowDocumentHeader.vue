<template>
  <div class="mb-5 pb-5 row-document-header">
    <b-row class="mb-5">
      <b-col>
        <b-img :src="selectImg(document.image)" :alt="document.title" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1 class="display-5">{{ document.title }}</h1>
        <h2 class="lead"><span class="font-italic">{{ document.subtitle }}</span></h2>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
      </b-col>
      <b-col class="border-bottom text-center ">
        By:
        <span class="mr-3 text-muted">{{ document.by }}</span>
        | <span class="ml-3 text-muted">{{ document.date }}</span>
      </b-col>
      <b-col>
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
  methods: {
    selectImg(image) {
      return image ? `${image}` : 'images/logo1.jpg'
    },
  },
}
</script>
