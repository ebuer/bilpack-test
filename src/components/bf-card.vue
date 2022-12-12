<template>
  <div class="bf-card">
    <v-card
      :class="styleClass"
      :flat="flat"
      :color="color"
      :loading="loading"
      :disabled="loading"
    >
<!--      <span class="laoder-text">Yükleniyor...</span>-->
      <v-card-title class="bf-card-title justify-center bf-data-table-card-title" v-if="title !== null">
        <div class="title">
          {{ title }}
        </div>
      </v-card-title>

      <slot></slot>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "bf-card",
  props: {
    styleClass: {
      default: 'pa-8',
      type: String
    },
    flat: {
      default: true
    },
    color: {
      type: String
    },
    title: {
      default: null
    },
    loading: {
      default: false
    }
  }
}
</script>
