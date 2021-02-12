<template>
	<div class="dots">
	  <div class="dots__dot" />
	  <div class="dots__dot" />
	  <div class="dots__dot" />
	  <div class="dots__dot" />
	</div>
</template>


<style lang="scss">
.dots {
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 0;

  &__dot {
    width: 5px;
    height: 5px;
    margin: 5px;
    display: inline-block;
    border-radius: 99px;
    background-color: var(--primary-color);
    animation: moveInOutX .3s linear infinite;
  }
}

.card .dots {
  position: absolute;
  left: 100%;
  top: 40%;
}

.card .dots--vertical {
  top: 100%;
  left: 50%;
  margin-left: 5px;
  transform-origin: 0 0;
  transform: rotate(90deg);
}
</style>