export default {
  name: 'MenuItems',
  props: {
    x: Number
  },
  data () {
    return {
      message: 'Tuturu !',
      name: 'pique',
      surename: 'valère',
      website: 'gmx'
    }
  },
  computed: {
    email () {
      return `${this.name}.${this.surname}@${this.website}.fr`
    },
    style () {
      return {
        transform: `translateX(${this.x}px)`
      }
    }
  },
  methods: {
  },
}
