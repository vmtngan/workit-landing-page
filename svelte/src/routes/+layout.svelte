<script>
	import '../app.css';
</script>

<main
	class="overflow-x-hidden text-[16px] font-normal leading-[28px] lg:text-[18px] lg:leading-[32px]"
>
	<slot />
</main>

<style lang="postcss">
	:global(main) {
		font-family: Manrope, sans-serif;
	}

	:global(h1, h2, h3) {
		font-family: 'Fraunces 144', serif;
	}
</style>
