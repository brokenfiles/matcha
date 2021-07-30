<template>
  <div class="main">
	  <Header/>
    <Nuxt/>
  </div>
</template>

<script>
import Header from "../components/headernav";
export default {
  name: "default",
	components: {Header}
}
</script>

<style scoped>

.main
{
	font-family: "Montserrat";
}

</style>
