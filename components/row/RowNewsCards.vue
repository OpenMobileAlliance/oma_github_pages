<template>
  <div class="row-news-cards">
    <b-row class="row-eq-height">
      <b-col v-for="item in news" :key="item.slug" md="6" lg="4">
        <b-card tag="article" class="mb-2 h-100" no-body>
          <b-card-img
            :src="selectImg(item.image)"
            :alt="item.title"
            class="news-card-image"
          >
          </b-card-img>
          <b-card-body>
            <b-card-title>
              <NuxtLink
                :to="{ name: 'news-slug', params: { slug: item.slug } }"
                class="stretched-link"
              >
                {{ item.title }}
              </NuxtLink>
            </b-card-title>
            <b-card-sub-title>
              <span class="font-italic">{{ item.subtitle }}</span>
            </b-card-sub-title>
            <b-card-text class="pt-3">
              <nuxt-content :document="{ body: item.excerpt }" />
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <b-container>
              <b-row>
                <b-col>
                  {{ item.date }}
                </b-col>
                <b-col>
                  {{ item.by }}
                </b-col>
              </b-row>
            </b-container>
          </b-card-footer>
        </b-card>
      </b-col>
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
  },
  methods: {
    selectImg(image) {
      return image || '/images/logo1.jpg'
    },
  },
}
</script>
