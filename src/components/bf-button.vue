<template>
  <div class="bf-button" :class="contentClass">
    <v-btn
        :style="[
    size === 'normal' ? { 'padding': '10px 24px' } : '',
    size === 'large' ? { 'padding' : '10px 24px' } : '',
    size === 'small' ? { 'padding' : '8px 20px' } : '',
    size === 'square' ? { 'width' : '30px', 'height': '30px' } : '',
    color === 'listButton' ? { 'color': $vuetify.theme.themes.light.primary }: '',
    color === 'textButton' ? { 'color':$vuetify.theme.themes.light.primary ,'background-color': '#fff' }: '',
    color === 'formButton'? { 'color': '#fff', 'background-color': '#22C55E', }: '',
    color === 'tableButton' ? { 'background-color': $vuetify.theme.themes.light.primary, 'color': '#fff' } : '',
    color === 'listOutlineButton' ? { 'color': $vuetify.theme.themes.light.primary, 'background-color': 'transparent', 'border': '2px solid', 'border-color': $vuetify.theme.themes.light.primary }: '',
]"
        depressed
        :ripple="false"
        :color="color"
        :block="block"
        :loading="loader"
        :rounded="rounded"
        :text="text"
        :height="height"
        :to="to"
        :disabled="disabled"
        @click="$emit('click')"
    >
      <v-icon small v-if="widthIcon" :color="color === 'listButton' || color === 'listOutlineButton' ? $vuetify.theme.themes.light.primary : iconColor" left >
        <slot name="icon"></slot>
      </v-icon>
      <slot></slot>
    </v-btn>
  </div>
</template>

<script>

export default {
  props: {
    contentClass: {
      default: ''
    },
    size: {
      default: 'normal'
    },
    widthIcon: {
      default: false
    },
    iconColor: {
      default: 'white'
    },
    to: {
      type: String
    },
    color: {
      type: String
    },
    block: {
      default: false
    },
    height: {
      type: String,
      default: '40'
    },
    rounded: {
      default: false
    },
    text: {
      default: false
    },
    disabled: {
      default: false
    },
    loader: {
      default: false
    }
  },
  name: "bf-button",
}
</script>

