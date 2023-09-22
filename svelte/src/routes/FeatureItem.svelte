<script lang="ts">
	export let order: number;
	export let title: string;
	export let description: string;
</script>

<div class="flex flex-col items-center md:flex-row md:justify-between lg:flex-col">
	<div
		class="order mb-[24px] flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-davy-grey text-[20px] font-semibold leading-[36px] md:mb-0 lg:mb-[56px] lg:h-[56px] lg:w-[56px] lg:text-[24px] lg:leading-[40px]"
	>
		{order}
	</div>
	<div class="md:max-w-[493px] lg:max-w-[354px]">
		<h3
			class="mb-[16px] text-[28px] font-semibold leading-[36px] lg:mb-[28px] lg:text-[32px] lg:leading-[40px]"
		>
			{title}
		</h3>
		<p class="text-davy-grey">
			{description}
		</p>
	</div>
</div>

<style>
	.order {
		font-family: 'Fraunces 144', serif;
	}
</style>
