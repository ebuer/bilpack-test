import Vue from 'vue'
import components from '~/components'

for (const name in components) {
  Vue.component(name, {
    extends: components[name],
  })
}
