export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    }
}


// include this to a .vue
/**
 *   import { mapGetters } from 'vuex'
 *   	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser'])
	},
 */
