<template>
  <Section dots="true">
      <h2 class="text-center">
        How Gridsome works
      </h2>
      <p class="lead text-center mb">
        A better way to build websites
      </p>

      <div class="flex flex--align-equal flex--space-between">
          <div class="well">
              <div class="well__title">Data sources</div>
              <p><b>CMSs</b> <br>WordPress, Drupal,
              Contentful, Shopify, Magento etc.</p>

              <p><b>Files</b> <br>
              Markdown, YAML, CSV, JSON, Image folders, etc</p>

              <p><b>APIs</b> <br>AirTable, Google Spreadsheet, MongoDB, Firebase etc.</p>
          </div>
          <div class="dots hide-for-small">
              <svg  width="100%" height="20" viewBox="0 0 60 20" class="dot">
                <path d="M1 9.5H99" />
              </svg>
          </div>
          <div class="well" style="min-height: 400px">
              <div class="well__title">Develop</div>
              <div class="layers">
                <div class="layer layer__graphql text-center">
                  <div class="text-wrapper">
                    <span class="text">
                      <graph-ql-logo width="50px" height="50px"  style="color:#fff;" /><br/>
                      GraphQL <br>data layer
                    </span>
                  </div>
                </div>
                <div class="layer layer__vue">
                  <div class="text-wrapper">
                    <span class="text text-center">
                        <strong>Vue.js</strong><br/>
                        Webpack<br/>
                        Hot-reloading<br/>
                    </span>
                 </div>
                 <div class="dots-bg"></div>
                </div>
              </div>
          </div>
          <div class="dots hide-for-small">
             <svg  width="100%" height="20" viewBox="0 0 60 20" class="dot dot--after">
                <path d="M1 9.5H99" />
              </svg>
          </div>
          <div class="well">
              <div class="well__title">Deploy</div>
              <p>
                <strong>Static site generation</strong><br>
                Generate static files and deploy to any CDN service. Netlify, Zeit Now, GitHub Pages, GitLab Pages, Surge.sh, Now.sh and many more.
              </p>

              <p>
                <strong>Server-side rendering</strong><br>
                Deploy Gridsome and the GraphQL layer to any Node.js server
              </p>


          </div>
      </div>
  </Section>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped="scoped">
.well {
  border: 3px solid var(--primary-bg);
  border-radius: 10px;
  background-color: rgba(255,255,255,.7);
  width: 100%;
  padding: var(--space-x2);
  position: relative;
  flex:1;
  min-width: 300px;
  margin-bottom: var(--space-x2);
  &__title {
    position: absolute;
    top:-19px;
    left:50%;
    transform: translateX(-50%);
    background: var(--primary-bg);
    padding: 4px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: .85rem;
    letter-spacing: 1px;
    font-weight: 600;
    }
}

.layers {
  position: absolute;
  max-width: 290px;
  width: 100%;
  top: 50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%) rotateX(55deg);
}

.dots {
  width: 50px;
  position: relative;
}

.dot {
  stroke: #E535AB;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-dasharray: 0 20;
  position: absolute;
  top: 42%;
  animation: stroke 400ms linear infinite;

  &--after {
    stroke: var(--primary-color);
  }
}

.layer {
  color:#FFF;
  border-radius: 10px;
  padding-top: 100%;
  width: 100%;
  transform: rotate(45deg);

  &__graphql {
    background: linear-gradient(-80deg, #E535AB 0%, rgba(229, 53, 171, 0.49) 100%);
    animation: pulseAlt 2s infinite;

    position: relative;
    padding-top: 80%;
    width: 80%;
    margin-left: 10%;
    z-index: 10;
    margin-bottom: -5%;
  }

  &__vue {
    background: linear-gradient(180deg, #4DBA87 0%, #8FD46A 100%);
    position: relative;
    animation: pulse 2s infinite;
    animation-delay: .3s;

    .dots-bg {
      position: absolute;
      top: 20px;
      left:20px;
      right:20px;
      bottom:20px;
    }
  }

  .text {
    position: absolute;
    font-weight: 600;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    font-size: 1.4rem;
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
  }

}
</style>
