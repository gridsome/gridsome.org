<template>
	<div class="skeleton"></div>
</template>

<style lang="scss">
.skeleton {
	  position: relative;
	  vertical-align: middle;
	  overflow: hidden;
	  background-color: var(--border-color);
	  width: 100%;
	  margin-bottom: .6rem;
	  border-radius: 5px;
	  display: block;
	  height: 30px;
	  opacity: .6;

	  &::after {
	    position: absolute;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    transform: translateX(-100%);
	    background-image: linear-gradient(
	      90deg,
	      rgba(#fff, 0) 0,
	      rgba(#fff, 0.2) 20%,
	      rgba(#fff, 0.5) 60%,
	      rgba(#fff, 0)
	    );
	    animation: shimmer .3s infinite;
	    content: '';
	  }
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>