export default {
  name: 'backgroundSquare',
  props: {
    colors: {
      type: Array,
      default: () => ['#50a3a2', '#53e3a6']
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleBackground () {
      return {
        background: 'linear-gradient(to bottom right, ' +
         `${this.colors[0]} 0%, ${this.colors[1]} 100%)`
      }
    }
  },
  methods: {

  }
}
