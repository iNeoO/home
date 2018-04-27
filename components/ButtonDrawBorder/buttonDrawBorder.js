export default {
  name: 'ButtonTranslation',
  props: {
    label: {
      type: String,
      default: 'DrawBorder'
    },
    colors: {
      type: Array,
      default: () => ['#2194e0', '#000000']
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleButton () {
      return {
        'box-shadow': `inset 0 0 0 2px ${this.colors[0]}`,
        color: this.colors[0],
        '--color': this.colors[1]
      }
    }
  },
  methods: {
  }
}
