<template>
  <transition name="fade">
    <div class="bf-loader" v-if="value">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'bf-loader',
    props: {
      value: Boolean,
      full: {
        default: false
      }
    }
  }
</script>
