<template>
  <div class="row-blog-list-items">
    <b-row v-for="blog in blogs" :key="blog.slug">
      <b-col>
        <b-card tag="article" class="mb-2" no-body>
          <b-card-body>
            <b-card-title>{{ blog.title }}</b-card-title>
            <b-card-sub-title
              sub-title-text-variant=""
              class="mb-2"
            >
              <span class="font-italic">{{ blog.subtitle }}</span>
            </b-card-sub-title>
            <b-card-text>
              <nuxt-content :document="{ body: blog.excerpt }" />
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <b-container>
              <b-row>
                <b-col>
                  <span class="label">By:</span>
                  {{ blog.by }}
                </b-col>
                <b-col>
                  <span class="label">Author:</span>
                  {{ blog.author }}
                </b-col>
                <b-col>
                  <span class="label">Date:</span>
                  {{ blog.date }}
                </b-col>
                <b-col class="text-right">
                  <nuxt-link
                    :to="{ name: 'blogs-slug', params: { slug: blog.slug } }"
                  >
                    Read mode ...
                  </nuxt-link>
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
    blogs: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>
