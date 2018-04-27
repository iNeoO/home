import tuturu from '@/components/Tuturu/tuturu.vue'
import menus from '@/components/Menus/menus.vue'
import tableRepos from '@/components/TableRepos/tableRepos.vue'
import backgroundGradient from '@/components/BackgroundGradient/backgroundGradient.vue'
import backgroundSliding from '@/components/BackgroundSliding/backgroundSliding.vue'
import backgroundSquare from '@/components/BackgroundSquare/backgroundSquare.vue'
import backgroundLoader from '@/components/BackgroundLoader/backgroundLoader.vue'
import buttonDrawBorder from '@/components/ButtonDrawBorder/buttonDrawBorder.vue'
import buttonPaint from '@/components/ButtonPaint/buttonPaint.vue'
import buttonShiney from '@/components/ButtonShiney/buttonShiney.vue'
import buttonTranslation from '@/components/ButtonTranslation/buttonTranslation.vue'

export default {
  name: 'Home',
  data () {
    return {
      user: 'IneoO',
      selectors: {
        backgroundSelected: 0,
        buttonThemeSelected: 0
      },
      colors: {
        gradientColors: ['#111d3d', '#5483a7', '#d6cbbe', '#5b4136'],
        squareColors: ['#121D28', '#677C8B'],
        slidingColors: ['#201A28', '#577E8F'],
        loaderColors: ['#60B6E0', '#2A4E61', '#B6E3FA', '#576D78'],
        borderColors: ['#ed1c40', '#FFFFFF'],
        paintColors: ['#ed1c40', '#FFFFFF'],
        translationColors: ['#ed1c40', '#FFFFFF'],
        shineyColors: ['#ed1c40', '#FFFFFF']
      }
    }
  },
  methods: {
    randomThemes () {
      for (let key in this.selectors) {
        let numb
        do {
          numb = Math.floor(Math.random() * 4)
        } while (numb === this.selectors[key])
        this.selectors[key] = numb
      }
    }
  },
  components: {
    tuturu,
    menus,
    tableRepos,
    backgroundGradient,
    backgroundLoader,
    backgroundSliding,
    backgroundSquare,
    buttonDrawBorder,
    buttonPaint,
    buttonShiney,
    buttonTranslation
  }
}
