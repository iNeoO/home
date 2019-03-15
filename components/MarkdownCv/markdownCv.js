import VueMarkdown from 'vue-markdown'

export default {
  name: 'markdownCv',
  data () {
    return {
      cv: `
**Mr. Valère PIQUE**
[Pique.valere@gmx.fr](mailto:Pique.valere@gmx.fr)
[https://tuturu.io](https://tuturu.io)
[https://github.com/IneoO](https://github.com/IneoO)
Born 29th august 1992

# Front Developer

### Professional experience

-   2018 Nextories Actual
    - Mission : Development of applications for nextories.com and intranet
      - Features on a calendar application. **vue**, **firebase**, **vuetify**
      - Creation of a application of inboarding for new clients. **vue**, **axios**, **vuex**, **googleApi**
      - Creation of an application of client area. **vue**, **axios**, **vuex**, **googleApi**

-   2018 University Paris Descartes
    - Vacationer IT project management of l2, l3 Realization of an instagram application in react-native, kotlin

-   2018 Yoopies (6 months)
    - Mission : Development of applications for https://yoopies.fr
      - Improvements on the site **vue**, **graphql**

-   2016 1000mercis (2 years 9 months)
  - Mission : Application developments for rtb and dmp
      -   web application for tracking management (tag container, tag check, adserver, ...). **angularJS**, **bootstrap**, **gulp**, **bower**, **Karma**, **gulp**, **jasmine**
      -   data display management web applications. **angularJS**, **bootstrap**, **gulp**, **bower**
      -   front side tracking file type fbq. **JavaScript vanilla**, **Karma**, **gulp**, **jasmine**
      -   a chrome extension to manage internal segments. **vue1**
      -   Implementation of self-promo customers (Sofinco, allSecure...) front side..
      -   Development of microfronts In SSR. **webpack**, **flask**, **vue2**.

-   2015 Veolia Eau with Sopra Steria (7 months)
    - Mission : Development of applications for the intervention management of technicians
      -   Maintenance of an application for intervention planning at the Veolia water connection. **xslt**
      -   Creation of a web application to administer the previous application. **angularJS**, **karma**, **jasmine**, **grunt**
      -   Adding features in a management application for technicians or their cell phone. **PHP**, **dynamoDB**, **googleApi**

### Personnels projets

- vue-multi-select: A component custom to make a select options. **vue**
- macros-calories.fr: A component to calcul macros. **vue**, **vuex**, **vuikit**, **express**, **mongo**
- voline-discord-bot: A bot for discord. **discordjs**

### Language and computer training
__Front :__ JavaScript, Vue, Vuex, Axios, Sass, AngularJs, webpack, node, HTML, CSS.
__Backend :__ Flask, express, python, sql, mongo, nginx, uwsgi, .PHP, laravel
__Operating Systems :__ Arch, Gentoo, Ubuntu, Debian, Windows.
__Logiciels utilisés :__ Atom, i3, git, npm, pip.
__English :__ Read, spoken, written (Toeic Blue level).

### Formation
2012-2015 : Engineering school 3il, Limoges.
2012 : DUT in Computer Science at the IUT of Paris Descartes.

### Other activities
Interests: Cinema, series developments javascript (open source). 8 years of violin in conservatory plus one year in orchestra in parallel, 2 years of guitar, American Football.`
    }
  },
  components: {
    VueMarkdown
  }
}
