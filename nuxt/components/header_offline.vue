<template>

	<div class="shadow fixed flex border-b border-stroke w-full bg-white h-16 justify-between items-center text-center text-text" style="background: #ffffff">
		<div class="flex pl-6 h-full">
			<NuxtLink to="/" class="px-6 flex h-full items-center text-center">Matcha</NuxtLink>
		</div>
		<div class="flex pr-6">
			<nuxt-link to="/auth" class="hover:bg-stroke text-light text-sm hover:text-primary px-4 flex items-center text-center bg-primary py-1 rounded-2xl border border-text">
				Se connecter
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "header_offline",

	methods: {

	}
}
</script>

<style scoped>

</style>