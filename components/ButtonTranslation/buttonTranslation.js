export default {
  name: 'ButtonTranslation',
  props: {
    label: {
      type: String,
      default: 'Translation'
    },
    colors: {
      type: Array,
      default: () => ['#2194e0', '#ffffff']
    }
  },
  data () {
    return {
      hoverState: false
    }
  },
  computed: {
    styleButton () {
      if (this.hoverState) {
        return {
          border: `2px solid ${this.colors[0]}`,
          color: this.colors[1],
          'background-image': `linear-gradient(45deg, ${this.colors[0]} 50%, transparent 50%)`
        }
      } else {
        return {
          border: `2px solid ${this.colors[0]}`,
          color: this.colors[0],
          'background-image': `linear-gradient(45deg, ${this.colors[0]} 50%, transparent 50%)`
        }
      }
    }
  },
  methods: {
  }
}
