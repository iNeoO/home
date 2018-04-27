export default {
  name: 'ButtonPaint',
  props: {
    label: {
      type: String,
      default: 'Paint'
    },
    colors: {
      type: Array,
      default: () => ['#2194e0', '#FFFFFF']
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleContainer () {
      return {
        border: `2px solid ${this.colors[0]}`
      }
    },
    styleSpan () {
      return {
        color: this.colors[0]
      }
    },
    styleButton () {
      return {
        background: this.colors[0],
        color: this.colors[1]
      }
    }
  }
}
