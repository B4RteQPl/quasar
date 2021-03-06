import Vue from 'vue'

import slot from '../../utils/slot.js'

export default Vue.extend({
  name: 'QCard',

  props: {
    dark: Boolean,

    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },

  render (h) {
    return h('div', {
      staticClass: 'q-card',
      class: {
        'q-card--dark': this.dark,
        'q-card--bordered': this.bordered,
        'q-card--square no-border-radius': this.square,
        'q-card--flat no-shadow': this.flat
      }
    }, slot(this, 'default'))
  }
})
