export default {
  name: 'TuturuImg',
  props: {
    width: Number,
    height: Number,
    x: Number,
    rotated: Number
  },
  computed: {
    style () {
      return {
        width: `${this.width}%`,
        height: `${this.height}%`,
        transform: `perspective(200px) \
                    translateX(${this.x}px) \
                    rotateY(${this.rotated}deg)`
      }
    }
  }
}
