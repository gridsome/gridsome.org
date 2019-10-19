<template>
	<div class="info">
		<slot />
	</div>
</template>

<style>
.info {
	margin: var(--space) 0;
	padding: var(--space-half);
	font-size: .9rem;
	background-color: var(--info-bg);
	border-radius: 3px;
	border: 2px solid var(--info-border); 
}
</style>