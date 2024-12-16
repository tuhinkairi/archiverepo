import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import VuexI18n from 'vuex-i18n' // load vuex i18n module
import utils from './storeutils'
import { groupBy } from 'lodash-es'

Vue.use(Vuex)

const state = {
  callingAPI: false,
  hostname: '',
  searching: '',
  user: null,
  journal: null,
  userid: null,
  usertoken: null,
  journalId: null,
  // indexing_id: '',
  isLoading: true,
  sidebar: {
    opened: true,
    withoutAnimation: false
  },
  config: {
    windowMatchSizeLg: '(min-width: 992px)',
    palette: {
      primary: '#4ae387',
      danger: '#e34a4a',
      info: '#4ab2e3',
      success: '#db76df',
      warning: '#f7cc36',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd'
    }
  },
  userInfo: {
    messages: [],
    notifications: [],
    tasks: []
  },
  searchHits: [],
  searchFlatHits: [],
  selectedResultIndex: 0
}

const TOGGLE_EXPAND_MENU_ITEM = 'TOGGLE_EXPAND_MENU_ITEM'
const CLOSE_MENU = 'CLOSE_MENU'
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const TOGGLE_WITHOUT_ANIMATION = 'TOGGLE_WITHOUT_ANIMATION'

const isLoading = state => state.isLoading
const sidebarOpened = state => state.sidebar.opened
const toggleWithoutAnimation = state => state.sidebar.withoutAnimation
const menuItems = state => state.menu.items
const config = state => state.config
const userId = state => state.userid
const userData = state => state.user
const journalId = state => state.journalId
// const indexing_id = state => state.indexing_id
const journalName = state => state.journal
const currentHost = state => (state.hostname.includes('flaptics') || state.hostname.includes('ravar'))?('https://' + state.hostname):('http://' + state.hostname)

const isSearchHitSelected = state => index => state.selectedResultIndex === index
const getSearchHitsByGroup = state => group => state.searchHits[group]
const currentSearchHitProp = state => prop => {
  if(state.searchFlatHits[state.selectedResultIndex]) {
    return state.searchFlatHits[state.selectedResultIndex][prop]
  }
}

const breadcrumbs = state => {
  return (keyword) => utils.findInNestedByName(state.menu.items, keyword)
}

const mutations = {
  loginLoading (state) {
    state.callingAPI = !state.callingAPI
  },
  globalSearching (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  setUser (state, user) {
    state.user = user
  },
  setUserId (state, userid) {
    state.userid = userid
  },
  setUserToken (state, token) {
    state.usertoken = token
  },
  setJournal (state, journal) {
    state.journal = journal
  },
  setJournalId (state, journalId) {
    state.journalId = journalId
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setHostName (state, hostName) {
    state.hostname = hostName
  },
  resetSearch (state) {
    state.searchHits = []
    state.searchFlatHits = []
  },
  goUp (state) {
    if(!state.isSearchOpened) {
      return
    }

    if(state.selectedResultIndex > 0) {
      state.selectedResultIndex--
      return
    }

    state.selectedResultIndex = state.searchFlatHits.length - 1
  },
  goDown (state) {
     if(!state.isSearchOpened) {
      return
    }

    if(state.selectedResultIndex < state.searchFlatHits.length - 1) {
      state.selectedResultIndex++
      return
    }

    state.selectedResultIndex = 0
  },
  selectSearchHit (state, payload) {
    state.selectedResultIndex = payload.index
  },
  updateSearchHits (state, payload) {
    state.searchHits = payload.hits
    state.searchFlatHits = payload.flatHits
  },
  [CLOSE_MENU] (state) {
    if (document.documentElement.clientWidth < 992) {
      state.sidebar.opened = false
    }
  },
  [TOGGLE_SIDEBAR] (state, opened) {
    state.sidebar.opened = opened
  },
  [TOGGLE_WITHOUT_ANIMATION] (state, value) {
    state.sidebar.withoutAnimation = value
  },
  [TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    let menuItem = payload.menuItem
    let expand = payload.expand
    if ((menuItem.children || menuItem.sublist) && menuItem.meta) {
      // change this in production -- expand temporarily disabled for user exp
      menuItem.meta.expanded = expand
      // menuItem.meta.expanded = false
    }
  }
}

const actions = {
  closeMenu ({ commit }) {
    commit(CLOSE_MENU)
  },
  toggleSidebar ({ commit }, opened) {
    commit(TOGGLE_SIDEBAR, opened)
  },
  isToggleWithoutAnimation ({ commit }, value) {
    commit(TOGGLE_WITHOUT_ANIMATION, value)
  },
  toggleExpandMenuItem ({commit}, payload) {
    commit(TOGGLE_EXPAND_MENU_ITEM, payload)
  },
  async smartsearch({ commit }, term) {
    const res = await fetch(`https://google.com/search?q=${term}`)
    const json = await res.json()

    // because magic api has no group feature
    // adding the flatIndex property will come in handy later
    const flatHits = json.cards.map((card, index) => {
      return {
        ...card,
        flatIndex: index
      }
    })

    commit('updateSearchHits', {
      flatHits: flatHits,
      hits: groupBy(flatHits, 'rarity')
    })
  }
}

const store = new Vuex.Store({
  plugins: [createPersistedState({ storage: window.localStorage })],
  modules: {
    //menu
  },
  getters: {
    menuItems,
    sidebarOpened,
    toggleWithoutAnimation,
    isLoading,
    config,
    breadcrumbs,
    userId,
    userData,
    journalName,
    journalId,
    // indexing_id,
    currentHost,
    isSearchHitSelected,
    getSearchHitsByGroup,
    currentSearchHitProp
  },
  state,
  mutations,
  actions
})

// Vue.use(VuexI18n.plugin, store)

export default store
