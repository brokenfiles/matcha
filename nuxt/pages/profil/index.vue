<template>
	<div class="flex">
		<div class="pt-16 flex m8 md:mx-16 mt-10 xl:flex-row flex-col">
			<div class="flex justify-around flex-row md:flex-col md:flex-shrink-0 md:fixed">
				<div class="flex justify-center">
					<img src="~/assets/mbrignol.jpg" class="h-64 rounded-3xl" alt="">
				</div>
				<div class="flex flex-col">
					<div class="flex justify-center">
						<button class="mt-10 w-64 flex bg-primary text-stroke rounded-3xl justify-center text-xl font-semibold py-2">
							Like ♥
						</button>
					</div>
					<div class="flex justify-center">
						<div class="mt-10 w-64 flex flex-col bg-stroke text-text rounded-3xl p-4 h-32 md:h-48 border border-text">
							<div class="flex flex-grow">
								Ecrire un message à {{ this.name }}
							</div>
							<button class="flex flex-none justify-end bg-primary text-stroke rounded-3xl justify-center text-xl font-semibold py-2">
								Envoyer ♥
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="flex sm:flex-col xl:flex-row md:pl-64 mt-10 md:mt-0">
				<div>
					<div class="flex flex-col pb-10 xl:mx-16 md:mr-0 mx-16">
						<h1 class="font-bold text-5xl pb-2 text-text">{{ this.name }}</h1>
						<h2 class="font-medium text-light-text font-semibold">{{ this.age }} ans, {{ this.personal.area }}</h2>
						<p class="py-8 text-light-text font-semibold">
							{{ this.description }}
						</p>
						<div class="flex flex-row">
							<a href="#" v-for="hash in this.hashtags" class="pr-2 text-primary font-semibold">
									{{ hash }}
							</a>
						</div>
					</div>
					<div class="flex flex-col pb-10 xl:mx-16 md:mr-0 mx-16 lg:inline-block">
						<span class="text-secondary font-bold my-4">{{ this.name }} recherche</span>
						<div class="flex flex-col">
							<div>
								<span class="h-2 w-2 rounded-full bg-primary inline-block"></span>
								<span class="pl-2 text-light-text font-semibold">Genre</span>
							</div>
							<span class="pl-5 text-text font-semibold"> {{ this.research.gender }}</span>
						</div>
						<div class="flex flex-col">
							<div>
								<span class="h-2 w-2 rounded-full bg-primary inline-block"></span>
								<span class="pl-2 text-light-text font-semibold">Nationalité</span>
							</div>
							<span class="pl-5 text-text font-semibold"> {{ this.research.origin }} </span>
						</div>
						<div class="flex flex-col">
							<div>
								<span class="h-2 w-2 rounded-full bg-primary inline-block"></span>
								<span class="pl-2 text-light-text font-semibold">Âge</span>
							</div>
							<span class="pl-5 text-text font-semibold"> {{ this.research.age }} </span>
						</div>
						<div class="flex flex-col">
							<div>
								<span class="h-2 w-2 rounded-full bg-primary inline-block"></span>
								<span class="pl-2 text-light-text font-semibold">Taille</span>
							</div>
							<span class="pl-5 text-text font-semibold"> {{ this.research.height }} </span>
						</div>
					</div>
				</div>
				<div class="flex flex-col flex-none bg-stroke rounded-3xl flex-shrink-0 md:mr-0 mx-16 xl:mx-0 mb-10 w-auto xl:w-64" style="height: 216px ;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);">
					<span class="pt-2 text-secondary font-bold text-center items-center">Mes infos</span>
					<div class="flex justify-between px-4 py-2">
						<span class="font-semibold text-light-text">Genre</span>
						<span class="font-semibold text-text">{{ this.personal.gender }}</span>
					</div>
					<div class="flex justify-between px-4">
						<span class="font-semibold text-light-text">Âge</span>
						<span class="font-semibold text-text">{{ this.age }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "index",
	data()
	{
		return {
			name: "Max",
			age: 22,
			description: "Etudiant à l’école 42, je suis célibataire depuis plus de deux ans, et je cherche à rencontrer l’âme soeur afin de fonder une famille dans l’amour et la tendresse",
			hashtags: ["#sexe", "#geek", "#sushi", "#grrrr"],
			personal: {
				gender: "Homme",
				height: 185,
				weight: 80,
				origin: "Française",
				area: "Lille",
				love_state: "Célibataire"
			},
			research: {
				gender: "Femme",
				height: 170,
				weight: 60,
				age: 25,
				origin: "Indienne",
				area: "Bangladesh",
				love_state: "Célibataire"
			}
		}
	}
}
</script>

<style scoped>

</style>