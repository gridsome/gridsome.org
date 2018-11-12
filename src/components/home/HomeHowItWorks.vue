<template>
  <Section dots="true">
      <h2 class="text-center">
        How Gridsome works
      </h2>

      <p class="lead text-center container-sm">
        Use local files or any external API as a data source and access the data from a unified GraphQL layer</p>
      </p>

      <div class="source-animation flex flex--align-equal flex--space-between">
          <div class="well">
              <div class="well__title">Data sources</div>
              <h4>CMSs</h4>
              <p>WordPress, Contentful, Drupal, Prismic, GraphCMS, etc.</p>

              <h4>Local files</h4>
              <p>Markdown, YAML, CSV, JSON, Image folders, etc.</p>

              <h4>APIs</h4>
              <p>AirTable, Google Spreadsheet, MongoDB, Prisma, etc.</p>
          </div>
          <div class="dots hide-for-small">
              <svg  width="100%" height="20" viewBox="0 0 60 20" class="dot">
                <path d="M1 9.5H99" />
              </svg>
          </div>

          <div class="dots-vertical show-for-small">
              <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
                <path d="M0.5 0L0.500002 37"/>
              </svg>
          </div>

          <div class="well" style="min-height: 400px">
              <div class="well__title">Develop</div>
              <div class="layers">
                <div class="layer layer__graphql text-center">
                  <div class="text-wrapper">
                    <div class="text">
                      <graph-ql-logo width="50px" height="50px"  style="color:#fff;" /><br/>
                      GraphQL <br>data layer
                    </div>
                  </div>
                </div>
                <div class="layer layer__vue">
                  <div class="text-wrapper">
                    <div class="text text-center">
                        <strong>Vue.js</strong><br/>
                        webpack<br/>
                        Hot-reloading<br/>
                    </div>
                 </div>
                </div>
              </div>
          </div>
          <div class="dots hide-for-small">
             <svg  width="100%" height="20" viewBox="0 0 60 20" class="dot dot--after">
                <path d="M1 9.5H99" />
              </svg>
          </div>

          <div class="dots-vertical show-for-small">
              <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot dot--after">
                <path d="M0.5 0L0.500002 37"/>
              </svg>
          </div>


          <div class="well">
              <div class="well__title">Deploy</div>
              <h4>Static site generation</h4>
              <p>Generate static files and deploy to any global CDN service or FTP at blazing speed.</p>
              <p>For example, 
                <a href="//netlify.com">Netlify</a>,
                <a href="//zeit.co/now">Zeit Now</a>,
                <a href="//pages.github.com/">GitHub Pages</a>,
                <a href="//docs.gitlab.com/ee/user/project/pages/">GitLab Pages</a>,
                <a href="//surge.sh">Surge.sh</a> and many more.</p>
          </div>
      </div>
  </Section>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped="scoped">

.source-animation {
  overflow: hidden;
  padding-top: 15px
}

.well {
  border: 3px solid var(--primary-bg);
  border-radius: 10px;
  background-color: rgba(255,255,255,.7);
  width: 100%;
  padding: var(--space-x2);
  position: relative;
  flex:1;
  min-width: 280px;
  margin-bottom: var(--space-x2);


  h4{
    margin-bottom: .5rem;
  }

  &__title {
    position: absolute;
    top:-19px;
    left:50%;
    transform: translateX(-50%);
    background: var(--primary-bg);
    padding: 4px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .or {
    text-transform: uppercase;
    font-size: .8rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
    opacity: .5;
  }
}

.layers {
  position: absolute;
  max-width: 290px;

  width: 85%;
  top: 50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%) rotateX(55deg);


}

.dots {
  width: 50px;
  position: relative;
}

.dots-vertical {
  height: 50px;
  width: 100%;
  text-align: center;
  margin-top: -40px;

  .dot {
    height: 100%;
  }
}

.dot {
  stroke: #E535AB;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-dasharray: 0 20;
  animation: stroke 400ms linear infinite;
  &--after {
    stroke: var(--primary-color);
  }
}

.dots .dot {
  position: absolute;
  top: 42%;
}

.layer {
  color:#FFF;
  border-radius: 10px;
  padding-top: 100%;
  width: 100%;
  transform: rotate(-45deg);

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
    background: var(--primary-color);
    position: relative;
    animation: pulse 2s infinite;
    animation-delay: .3s;
  }

  .text {
    position: absolute;
    font-weight: 600;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 1.4rem;
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
  }

}
</style>
