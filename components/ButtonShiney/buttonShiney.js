export default {
  name: 'ButtonShinney',
  props: {
    label: {
      type: String,
      default: 'Shiney'
    },
    colors: {
      type: Array,
      default: () => ['#2194e0', '#FFFFFF']
    }
  },
  data () {
    return {
      hoverState: false
    }
  },
  computed: {
    styleObject () {
      if (this.hoverState) {
        return {
          'background-color': this.colors[0],
          color: this.colors[1],
          border: `2px solid ${this.colors[0]}`
        }
      }
      return {
        color: this.colors[0],
        border: `2px solid ${this.colors[0]}`
      }
    }
  },
  methods: {
  }
}
