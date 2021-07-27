<template>
  <div style="height: 100vh; width: 100vw" class="flex flex-col">

	  <header class="flex justify-between flex-row w-full items-center text-center px-6 header text-xl font-normal">
		  <div>MATCHOU</div>
		  <nav class="grid grid-cols-3 gap-5 items-center text-center">
			  <ul>Bonjour</ul>
			  <ul>Louis</ul>
			  <ul>Sign in</ul>
		  </nav>
	  </header>

	  <div class="main_container flex-col justify-center items-center">
		  <h1 class="text-5xl pb-4">A BEAUTIFUL <span style="color: #00bbf9">MATCH</span> <span style="color: #f15bb5">OUT</span></h1>
		  <div @click="show_project" class="flex text-5xl p-5 text-center main_button">Our PROJECTS</div>
	  </div>
  </div>

</template>

<script>
export default {

	data() {},

	show_project()
	{
		
	}

}
</script>

<style>
	.header
	{
		background: #9b5de5;
		color: #fee440;
		height: 4rem;
		flex: 0 1 auto;
	}

	.main_container
	{
		display: flex;
		flex: 1 1 auto;
		background: #00f5d4;
		color: #fee440;
		@apply: font-bold;
	}

	.main_button
	{
		background: #9b5de5;
	}

</style>
