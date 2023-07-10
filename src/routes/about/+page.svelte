<script>
import Hero from "../../components/about/Hero.svelte"
import Mission from "../../components/about/Mission.svelte"
import Quality from "../../components/about/Quality.svelte"
import Values from "../../components/about/Values.svelte"
import Vision from "../../components/about/Vision.svelte"

</script>
<svelte:head>
	<title>Acerca de nosotros</title>
	<meta name="description" content="Acerca de" />
</svelte:head>

<div>
	<Hero />
	<Mission />
	<Vision />
	<Values />
	<Quality />
</div>