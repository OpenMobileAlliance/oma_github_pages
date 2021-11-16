<template>
  <div class="row-multi-columns">
    <b-row class="py-3">
      <b-col
        v-for="(module, index) in config.modules"
        :key="index"
        :cols="config.widths[index]"
      >
        <RowNewsList
          v-if="module.name === 'RowNewsList'"
          :key="`${module.name}_${index}`"
          :news="values[index]"
          :config="module"
        />
        <RowText
          v-else-if="module.name === 'RowText'"
          :key="`${module.name}_${index}`"
          :text="module.text"
          :status="module.status"
        />
        <RowTextImage
          v-else-if="module.name === 'RowTextImage'"
          :key="`${module.name}_${index}`"
          :cols="module.cols"
          :text="module.text"
          :status="module.status"
          :image="module.image"
        />
        <RowImageText
          v-else-if="module.name === 'RowImageText'"
          :key="`${module.name}_${index}`"
          :cols="module.cols"
          :text="module.text"
          :status="module.status"
          :image="module.image"
        />
        <RowDynamicTable
          v-else-if="module.name === 'RowDynamicTable'"
          :key="`${module.name}_${index}`"
          :data="module"
        />
        <RowButtonGrid
          v-else-if="module.name === 'RowButtonGrid'"
          :key="`${module.name}_${index}`"
          :config="module"
        />
        <RowSeparator
          v-else-if="module.name === 'RowSeparator'"
          :key="`${module.name}_${index}`"
          :size="module.size"
        />
        <div v-else>
          {{ module.name }}
        </div>
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
    values: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>
