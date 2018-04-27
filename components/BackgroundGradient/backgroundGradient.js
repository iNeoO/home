export default {
  name: 'BackgroundGradient',
  props: {
    colors: {
      type: Array,
      default: () => ['#EE7752', '#E73C7E', '#23A6D5', '#23D5AB']
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleBackground () {
      return {
        '--color1': this.colors[0],
        '--color2': this.colors[1],
        '--color3': this.colors[2],
        '--color4': this.colors[3]
      }
    }
  },
  methods: {

  }
}
