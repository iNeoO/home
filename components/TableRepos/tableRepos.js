import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'GithubTab',
  props: {
    user: {
      type: String,
      default: 'IneoO'
    }
  },
  data () {
    return {
      topRepos: [],
      names: ['code-branch', 'star'],
      hoverState: false
    }
  },
  computed: {
    ...mapGetters({
      reposLoading: 'GithubStore/reposLoading',
      repos: 'GithubStore/repos'
    })
  },
  methods: {
    ...mapActions({
      getRepos: 'GithubStore/getRepos'
    }),
    sortRepos (repoA, repoB) {
      if (repoA.stargazers_count > repoB.stargazers_count) {
        return -1
      }
      if (repoA.stargazers_count < repoB.stargazers_count) {
        console.log('tot');
        return 1
      }
      return 0
    }
  },
  mounted () {
    this.getRepos(this.user).then(() => {
      this.topRepos = this.repos
      this.topRepos.sort(this.sortRepos)
      this.topRepos = this.topRepos.slice(0, 5)
    })
  },
}
