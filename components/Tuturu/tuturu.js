import tuturuImg from '@/components/TuturuImg/tuturuImg.vue'

export default {
  name: 'Home',
  data () {
    return {
      x: -2000,
      rotated: 0
    }
  },
  mounted () {
    const audioElement = document.createElement('audio');
    audioElement.volume=0.2;
    audioElement.setAttribute('src', 'music/tuturu.mp3');
    setTimeout(() => {
      audioElement.play();
      this.x = 0
    }, 1000)
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
        x: this.x,
        rotated: this.rotated
      }
    }
  },
  methods: {
    end () {
      this.timer = setTimeout(() => {
        this.timer = null
        this.rotated = this.rotated === 0
          ? 180
          : 0
      }, 3000)
    },
    animate () {
      if (this.timer) clearTimeout(this.timer)
      this.rotated += 180
    },
    style (x) {
      return {
        overflow: Math.abs(x) > 10
          ? 'hidden'
          : 'initial'
      }
    }
  },
  components: {
    tuturuImg
  }
}
