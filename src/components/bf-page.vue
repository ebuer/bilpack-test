<template>
  <div class="bf-page-content">
    <v-container fluid>
      <slot/>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'bg-page',
  props: {
    title: {
      default: ''
    }
  }
}
</script>
