import menuItems from '@/components/MenuItems/menuItems.vue'

export default {
  name: 'Menu',
  data () {
    return {
      x: 1500
    }
  },
  computed: {
    spring () {
      return {
        stiffness: 180,
        damping: 12,
        precision: 0.01
      }
    },
    values () {
      return {
        x: this.x
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.x = 0
    }, 1000)
  },
  components: {
    menuItems
  }
}
