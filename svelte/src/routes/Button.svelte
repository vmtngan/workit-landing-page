<script lang="ts">
	export let variant: 'primary' | 'secondary';
</script>

<button
	class={variant === 'primary'
		? 'border-[2px] border-transparent bg-eucalyptus px-[20px] py-[8px] font-bold leading-[32px] text-dark-purple hover:border-eucalyptus hover:bg-transparent hover:text-eucalyptus lg:px-[30px] lg:py-[12px]'
		: 'font-bold leading-[32px] text-white underline decoration-eucalyptus decoration-[3px] underline-offset-[8px] hover:text-eucalyptus'}
	><slot /></button
>
