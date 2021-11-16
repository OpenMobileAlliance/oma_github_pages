<template>
  <div class="row-dynamic-table">
    <b-row class="pt-5 pb-5">
      <b-col>
        <b-row>
          <b-col>
            <b-form-group
              v-show="config.filter"
              label="Filter"
              label-for="filter-input"
              label-cols-sm="1"
              label-align-sm="left"
              label-size="sm"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                >
                </b-form-input>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col v-if="config.pagination" cols="3">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="config.pagination"
              align="fill"
              size="sm"
              class="my-0 mb-3"
            ></b-pagination>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-table
              striped
              hover
              :items="config.items"
              :fields="config.columns"
              :filter="filter"
              sort-icon-left
              sort-desc.sync="asc"
              sort-by="published"
              :filter-function="filterItems"
              :current-page="currentPage"
              :per-page="config.pagination"
              @filtered="onFiltered"
            >
              <template #cell()="item">
                <div v-if="itemType(item) === 'icon'">
                  <CellIcon :icon="item.value.icon" />
                </div>
                <div v-else-if="itemType(item) === 'link'">
                  <CellLink
                    :text="item.value.title"
                    :url="item.value.url"
                    :target="item.value.target"
                  />
                </div>
                <div v-else-if="itemType(item) === 'link-icon'">
                  <CellLinkIcon
                    :icon="item.value.icon"
                    :url="item.value.url"
                    :target="item.value.target"
                  />
                </div>
                <div v-else-if="itemType(item) === 'text'">
                  <CellText :text="item.value.title" />
                </div>
                <div v-else-if="itemType(item) === 'image'">
                  <CellImage
                    :image="item.value.image"
                    :title="item.value.title"
                  />
                </div>
                <div v-else-if="itemType(item) === 'link-image'">
                  <CellLinkImage
                    :url="item.value.url"
                    :image="item.value.image"
                    :alt="item.value.title"
                  />
                </div>
              </template>
            </b-table>
          </b-col>
        </b-row>
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
  data() {
    return {
      filter: '',
      totalRows: this.config.items.length,
      currentPage: 1,
    }
  },
  watch: {
    config(newVal, _oldVal) {
      this.totalRows = newVal.items.length
    },
  },
  methods: {
    filterItems(item, filter) {
      let res = false
      const fields = this.config.filter || Object.keys(item)
      fields.forEach((field) => {
        if (
          item[field].title &&
          item[field].title.toLowerCase().includes(filter.toLowerCase())
        ) {
          res = true
        }
      })
      return res
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    itemType(item) {
      let result = 'text'
      if (item.value.icon && item.value.icon.length > 0) {
        result =
          item.value.url && item.value.url.length > 0 ? 'link-icon' : 'icon'
      } else if (item.value.image && item.value.image.length > 0) {
        result =
          item.value.url && item.value.url.length > 0 ? 'link-image' : 'image'
      } else if (item.value.url && item.value.url.length > 0) {
        result = 'link'
      }
      return result
    },
  },
}
</script>
