<template>
  <div class="row-news-list">
    <b-row>
      <b-col class="text-center text-primary col-title">
        <FontAwesomeIcon :icon="config.image.split(' ')" class="fa-2x"/>
        <p class="h5 mb-0">{{ config.title }}</p>
        <p class="col-title-subtitle font-italic">{{ config.subtitle }}</p>
      </b-col>
    </b-row>
    <b-row
      v-for="(item, index) in news"
      :key="index"
      class="row-news-list-item"

    >
      <div class="card mb-3 p-0" :class="itemColor(index)">
        <div class="card-body text-center p-2">
          <h5 class="card-title">
            <NuxtLink
              :to="{ name: 'news-slug', params: { slug: item.slug } }"
              class="stretched-link"
            >
              {{item.title}}
            </NuxtLink>
          </h5>
          <h6 class="card-sub-title">
            <span class="font-italic">{{item.subtitle}}</span>
          </h6>
        </div>
        <div class="card-footer text-center p-2">
          <b-container class="p-0">
            <b-row>
              <b-col>
                {{item.date}}
              </b-col>
              <b-col>
                {{item.by}}
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    config: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
  },
  methods: {
    selectImg(image) {
      return image || '/images/logo1.jpg'
    },
    itemColor(i) {
      const isEven = (Number(i + 1) % 2)
      if (isEven === 0) {
        return 'second'
      } else if (Number(i + 1) % 3 === 0) {
          return 'third'
      }
      return 'first'
    }
  },
}
</script>
