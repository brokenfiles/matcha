<template>
	<div class="fixed flex border-b border-stroke w-full bg-white h-16 justify-between items-center text-center text-text" style="background: #ffffff">
		<div class="flex pl-6 h-full">
			<div class="px-6 flex h-full items-center text-center">Matcha</div>
			<nav class="flex flex-row items-center text-center font-bold">
				<a href="#" class="px-2.5">DECOUVRIR</a>
				<a href="#" class="px-2.5">RECHERCHE</a>
				<a href="#" class="px-2.5">SHUFFLE</a>
			</nav>
		</div>
		<div class="flex pr-6 h-full">
			<nav class="flex flex-row items-center text-center font-light text-sm px-2 border-l border-r border-stroke">
				<div class="flex flex-col items-center">
					<img src="~/assets/avatar.png" class="h-6 w-6" alt="">
					<a href="#" class="px-1.5">Visites</a>
				</div>
				<div class="flex flex-col items-center">
					<img src="~/assets/coeur.png" class="h-6 w-6" alt="">
					<a href="#" class="px-1.5">Likes</a>
				</div>
				<div class="flex flex-col items-center">
					<img src="~/assets/bavarder.png" class="h-6 w-6" alt="">
					<a href="#" class="px-1.5">Message</a>
				</div>
			</nav>
			<div class="px-6 flex h-full items-center text-center font-normal">
				photo
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: "headernav"
}
</script>

<style scoped>

</style>