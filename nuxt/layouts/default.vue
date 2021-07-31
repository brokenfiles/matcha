<template>
  <div class="main">
	  <client-only>
		  <div v-if="this.$auth.loggedIn">
			  <Header/>
		  </div>
		  <div v-else>
			  <Header_offline/>
		  </div>
		  <div>
	    	<Nuxt/>
		  </div>
	  </client-only>
  </div>
</template>

<script>
import Header from "../components/header_online";
import Header_offline from "../components/header_offline";

export default {
  name: "default",
	components: {Header_offline, Header},

	mounted() {
		if (this.$auth.loggedIn) {
			this.$auth.fetchUser()
		}
	},

	methods: {

	},
}
</script>
<style scoped>

.main
{
	font-family: "Montserrat", serif;
}

</style>
