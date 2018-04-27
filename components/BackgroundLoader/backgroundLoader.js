export default {
  name: 'backgroundLoader',
  props: {
    colors: {
      type: Array,
      default: () => ['#043E88', '#ADC0D8', '#4873A8', '#222E58']
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
