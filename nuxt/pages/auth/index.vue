<template>
<div class="flex justify-center items-center h-screen pt-16 bg-stroke">
	<div class=" justify center bg-fullwhite p-4 rounded shadow w-96">
		<h1 class="text-2xl text-text text-center my-8 font-medium">Login to <span class="text-secondary">Matcha</span></h1>
		<form @submit.prevent="login_auth()" class="flex flex-col m-2 text-xl">
			<input v-model="username" class="rounded-md border border-text w-full mb-6 p-2" placeholder="Nom d'utilisateur">
			<input v-model="password" class="rounded-md border border-text w-full mb-6 p-2" placeholder="Mot de passe">
			<div class="font-light text-sm mb-6">
				Tu n'as pas encore de profil ? créer toi en un <nuxt-link to="/" class="text-primary font-semibold">ici</nuxt-link> !
			</div>
			<button class="border rounded-md border-text hover:text-primary hover:bg-stroke flex bg-primary text-light w-full items-center font-medium justify-center py-4">
				Je me connecte
			</button>
		</form>
	</div>
</div>
</template>

<script>
export default {
	name: "index",
	data() {
		return {
			username: "",
			password: ""
		}
	},

	methods: {

		async login_auth()
		{
			const result = await this.$auth.loginWith('local', { data: {
					username: this.username,
					password: this.password
				}
			}).then((e) => {
				// console.log(e)
			}).catch(e => {

			})
		},
	}
}
</script>

<style scoped>

</style>