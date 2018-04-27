export default {
  name: 'backgroundSliding',
  props: {
    colors: {
      type: Array,
      default: () => ['#66cc33', '#0099ff']
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleBackground () {
      return {
        'background-image': 'linear-gradient(-60deg, ' +
        `${this.colors[0]} 50%, ${this.colors[1]} 50%)`
      }
    }
  },
  methods: {

  }
}
