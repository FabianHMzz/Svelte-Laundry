<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
  import Footer from '../components/Footer.svelte'
</script>

<svelte:head>
	<title>AquaWash Laundry</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>