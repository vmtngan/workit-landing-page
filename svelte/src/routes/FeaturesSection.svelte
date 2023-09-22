<script>
	import FeatureItem from './FeatureItem.svelte';
</script>

<section
	class="mt-[-89px] bg-features bg-cover bg-bottom pb-[71px] pt-[245px] md:mt-[-137px] md:pb-[103px] md:pt-[341px] lg:mt-[-226px] lg:pb-[171px] lg:pt-[481px]"
>
	<div
		class="m-auto max-w-[343px] space-y-[40px] text-center text-dark-purple md:max-w-[573px] md:space-y-[48px] md:text-left lg:grid lg:max-w-[1110px] lg:grid-cols-3 lg:gap-[26px] lg:space-y-0 lg:text-center"
	>
		<FeatureItem
			order={1}
			title="Actionable insights"
			description="Optimize your products, improve customer satisfaction and stay ahead of the competition
					with our product data analytics."
		/>

		<FeatureItem
			order={2}
			title="Data-driven decisions"
			description="Make data-driven decisions with our product data analytics. Our AI-generated reports help
					you unlock insights hidden in your product data."
		/>

		<FeatureItem
			order={3}
			title="Always affordable"
			description="Always affordable pricing that scales with your business. Get top-quality product data
					analytics services without hidden costs or unexpected fees."
		/>
	</div>
</section>
