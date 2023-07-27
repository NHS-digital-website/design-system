<template>
  <div id="app">This is just a test to test the PR Github Workflow.
    <global-header />
    <div class="nhsd-t-grid">
       
      <div class="nhsd-t-row nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-3">
        <div class="nhsd-t-col-12">
          <phase-banner />
        </div>
      </div>
    </div>
    <home-banner-hero />
    <div class="nhsd-t-grid">
      <div class="nhsd-t-row">
        <div class="nhsd-t-col">
          <emphasis-box class="nhsd-!t-margin-top-4"/>
        </div>
      </div>
      <div class="nhsd-t-row nhsd-!t-margin-top-8">
        <div class="nhsd-t-col-3">
          <div class="nhsd-m-sticky-navigation nhsd-!t-display-sticky nhsd-!t-display-sticky--offset-2"><span id="sticky-nav-header" class="nhsd-t-heading-xs nhsd-!t-margin-bottom-2">Page of contents</span>
            <hr class="nhsd-a-horizontal-rule nhsd-a-horizontal-rule--size-xs nhsd-!t-margin-bottom-2"/>
            <nav aria-labelledby="sticky-nav-header">
              <ul>
                <li class="nhsd-m-sticky-navigation__item" >
                  <a class="nhsd-a-link" href="#top">Top of page</a>
                </li>
                <li class="nhsd-m-sticky-navigation__item" data-nav-content="documentation">
                  <a class="nhsd-a-link" href="#documentation">Documentation</a>
                </li>
                <li class="nhsd-m-sticky-navigation__item" data-nav-content="content-delivery-network">
                  <a class="nhsd-a-link" href="#content-delivery-network">Content Delivery Network</a>
                </li>
                <li class="nhsd-m-sticky-navigation__item" data-nav-content="node-package-manger">
                  <a class="nhsd-a-link" href="#node-package-manger">NPM Distribution</a>
                </li>
                <li class="nhsd-m-sticky-navigation__item" data-nav-content="contact">
                  <a class="nhsd-a-link" href="#contact">Feedback &amp; Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="nhsd-t-col-9">
          <div id="documentation">
            <storybook-card :releases="releases" />
          </div>
          <hr class="nhsd-a-horizontal-rule" />
          <div id="content-delivery-network">
            <content-delivery-network-card :releases="releases" />
          </div>
          <hr class="nhsd-a-horizontal-rule" />
          <div id="node-package-manger">
            <node-package-manager-card />
          </div>
          <hr class="nhsd-a-horizontal-rule" />
          <div id="contact">
            <p>Please send all feedback and contact to <a class="nhsd-a-link" href="mailto:websitedevelopment@nhs.net">NHS Digital Web Team</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmphasisBox from './components/EmphasisBox'
import GlobalHeader from './components/GlobalHeader'
import PhaseBanner from '@/components/PhaseBanner'
import HomeBannerHero from '@/components/HomeBannerHero'
import ContentDeliveryNetworkCard from './components/ContentDeliveryNetworkCard'
import StorybookCard from './components/StorybookCard'
import NodePackageManagerCard from '@/components/NodePackageManagerCard';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    EmphasisBox,
    GlobalHeader,
    PhaseBanner,
    HomeBannerHero,
    ContentDeliveryNetworkCard,
    StorybookCard,
    NodePackageManagerCard
  },
  data() {
    return {
      releases: []
    }
  },
  created() {
    axios.get("https://api.github.com/repos/NHS-digital-website/nhsd-frontend/releases?page=1&per_page=9")
      .then(response => this.releases = response.data)
  },
  mounted() {
    const el = document.createElement("script");
    el.type = 'text/javascript';
    el.async = true;
    el.src = "https://design-system.digital.nhs.uk/cdn/latest/scripts/nhsd-frontend.js";
    document.head.append(el);
  }
}
</script>
