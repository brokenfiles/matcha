<template>
  <div class="h-screen">
	  <div  class="back flex w-screen">
		  <div v-if="this.$auth.loggedIn" class="flex flex-row justify-around w-full pt-16 mt-16">
			  <div class="flex flex-col">
				  {{ this.$auth.user.username }}, Trouvez l'amour sur Matcha ♥
				  <div class="flex bg-primary p-2 mt-2 justify-center rounded-full" style="color: white">
					Trouver votre âme soeur
				  </div>
			  </div>
			  <div>
				  Giselle
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {

	data() {
		return {}
	},

	mounted() {
		if (this.$auth.loggedIn) {
			this.$auth.fetchUser()
			// console.log(this.$auth.user.id)
		}
	},

}
</script>

<style>

.back {
	height: 100%;
	background-image:url('~/assets/wave.svg');
	background-size:cover;
}

</style>
