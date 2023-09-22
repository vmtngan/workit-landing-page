<script>
	import Button from './Button.svelte';
</script>

<section
	class="relative flex flex-col items-center bg-hero bg-cover bg-bottom pt-[32px] lg:pt-[56px]"
>
	<header
		class="mb-[64px] flex w-[343px] flex-row items-center justify-between md:mb-[56px] md:w-[689px] lg:w-[1110px]"
	>
		<img src="/images/logo-light.svg" alt="logo" />
		<Button variant="secondary">Apply for access</Button>
	</header>
	<h1
		class="mb-[40px] max-w-[343px] text-center text-[45px] font-semibold leading-[45px] text-white md:max-w-[530px] md:text-[60px] md:leading-[60px] lg:max-w-[635px] lg:text-[80px] lg:leading-[80px]"
	>
		Data <span class="underline decoration-eucalyptus decoration-[3px] underline-offset-[8px]"
			>tailored</span
		> to your needs.
	</h1>
	<div class="mb-[156px] md:mb-[203px] lg:mb-[326px]">
		<Button variant="primary">Learn more</Button>
	</div>
	<img
		class="absolute bottom-[-85px] left-1/2 max-w-[298px] translate-x-[-50%] md:bottom-[-138px] md:max-w-[479px] lg:bottom-[-151px] lg:max-w-[715px]"
		src="/images/image-hero.png"
		alt="hero"
	/>
	<img
		class="hidden md:absolute md:left-[-230px] md:top-[75px] md:block lg:left-[-138px] lg:top-[116px]"
		src="/images/bg-pattern-1.svg"
		alt="pattern 1"
	/>
	<img
		class="hidden md:absolute md:right-[-80px] md:top-[250px] md:block lg:right-[-48px] lg:top-[314px]"
		src="/images/bg-pattern-2.svg"
		alt="pattern 2"
	/>
</section>
