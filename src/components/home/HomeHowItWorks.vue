<template>
  <Section>
      <h2 class="text-center">How Gridsome works</h2>
      <p class="lead text-center comtainer-md">
        asfasfasd
      </p>
      <div class="flex flex--align-equal flex--space-between">
          <div class="well left flex-fit">
              <p><b>CMSs</b> <br>WordPress, Drupal,
              Contentful, Shopify etc.</p>

              <p><b>Markdown</b> <br>
              Documentation, Jekyll, GitBook etc.</p>

              <p><b>Data</b> <br>JSON, AirTable, Google Spreadsheet, YAML, CSV etc.</p>
          </div>
          <div class="dots">
            
          </div>
          <div class="center flex-fit well">
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
          <div class="dots">
            
          </div>
          <div class="well right flex-fit">
              <p>
                <strong>Server-side render</strong>
                Any Node.js server
              </p>

              <p>
              <strong>Static web host</strong>
                Netlify, Zeit Now, GitHub Pages, GitLab Pages, Surge.sh, Now.sh ++
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
  width: 100%;
  padding: var(--space-x2);
}

.layers {
  transform: rotateX(55deg);
  margin-top: -39%;
  margin-bottom: -50%;
  margin-left: -5%;
  margin-right: -5%;
  position: relative;
}

.dots {
  width: 60px;
}

.layer {
  color:#FFF;
  border-radius: 10px;
  padding-top: 100%;
  width: 100%;
  transform: rotate(45deg);

  &__graphql {
    background: linear-gradient(-80deg, #E535AB 0%, rgba(229, 53, 171, 0.49) 100%);
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
