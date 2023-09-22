<script>
	import Button from './Button.svelte';
</script>

<section class="mb-[777px] mt-[100px] md:mb-[706px] lg:mb-[817px] lg:mt-[110px]">
	<div class="relative m-auto max-w-[343px] md:max-w-[689px] lg:max-w-[1110px]">
		<img
			class="absolute left-1/2 top-0 w-[281px] translate-x-[-50%] md:left-0 md:translate-x-0 lg:w-[477px]"
			src="/images/image-founder.webp"
			alt="founder"
		/>
		<div
			class="absolute right-0 top-[228px] bg-dark-purple p-[31px] text-center text-white md:top-[151px] md:w-[514px] md:p-[56px] md:text-left lg:top-[173px] lg:w-[730px] lg:p-[64px]"
		>
			<h2
				class="mb-[16px] text-[32px] font-semibold leading-[48px] md:mb-[24px] md:text-[48px] md:leading-[56px] lg:mb-[32px] lg:text-[56px] lg:leading-[64px]"
			>
				Be the first to test
			</h2>
			<p class="mb-[24px] lg:mb-[32px]">
				Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta
				tester for our app and kickstart your company. Apply for access below and I'll be in touch
				to schedule a call.
			</p>
			<Button variant="primary">Apply for access</Button>
		</div>
		<img
			class="hidden md:absolute md:right-[12px] md:top-[420px] md:block lg:right-[72px] lg:top-[436px]"
			src="/images/bg-pattern-3.svg"
			alt="pattern 3"
		/>
	</div>
</section>
