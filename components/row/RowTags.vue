<template>
  <div class="row-tags">
    <b-row class="shadow p-3 mb-5 bg-white rounded">
      <b-container>
        <b-row>
          <h1 class="m-auto">Tags</h1>
        </b-row>
        <b-row>
          <b-list-group horizontal class="overflow-auto m-auto">
            <b-list-group-item
              v-for="tag in tags"
              :key="tag"
              class="border-0 flex-fill"
              :disabled="isActive(tag)"
            >
              <nuxt-link
                :to="{ name: resource, query: { tag: tag } }"
                :class="{ 'font-weight-bold': isActive(tag) }"
              >
                #{{ tag }}
              </nuxt-link>
            </b-list-group-item>
            <b-list-group-item class="border-0 flex-fill" :disabled="showAll">
              <nuxt-link
                :to="{ name: resource }"
                :class="{ 'text-muted': showAll }"
              >
                Clear
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-row>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
    resource: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    showAll() {
      return !(this.$route.query.tag && this.$route.query.tag.length > 0)
    },
  },
  methods: {
    isActive(tag) {
      return this.$route.query.tag === tag
    },
  },
}
</script>
