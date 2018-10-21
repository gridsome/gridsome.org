<template>
	<div class="newsletter" id="mc_embed_signup">
		<p>Want to keep up with the latest news, tips & tricks from Gridsome? <br/>Subscribe to the newsletter!</p>
		<form action="https://gridsome.us19.list-manage.com/subscribe/post?u=960a357f3405a688ff935a10e&amp;id=42bbd30818" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="newsletter__form validate" target="_blank" novalidate>
		<div id="mc_embed_signup_scroll" class="flex">
			
			<div class="newsletter__field mc-field-group flex-fit" style="margin-right: 15px">
				<input  type="email" aria-label="Email" placeholder="your@email.com" value="" name="EMAIL" class="required email" id="mce-EMAIL">
			</div>

			<div class="newsletter__button">
				<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
			</div>

			<div id="mce-responses" class="clear">
				<div class="response" id="mce-error-response" style="display:none"></div>
				<div class="response" id="mce-success-response" style="display:none"></div>
			</div>
	  	<div style="position: absolute; left: -5000px;" aria-hidden="true">
	  		<input type="text" name="b_960a357f3405a688ff935a10e_42bbd30818" tabindex="-1" value="">
	  	</div>
	   </div>
		</form>
	</div>
</template>

<style lang="scss">
.newsletter {
	border: 3px dashed var(--primary-bg);
  border-radius: 10px;
  width: 100%;
  padding: var(--space) var(--space);
  &__form {
  	margin-bottom:0;
  }
  &__field {
  	min-width: 200px;
  	margin-bottom: 1rem;
  }
  &__button {
  	margin: 0 auto;
  	margin-bottom: 1rem;
  }
  
  p {
  	margin-bottom: .5rem;
  }
}
</style>