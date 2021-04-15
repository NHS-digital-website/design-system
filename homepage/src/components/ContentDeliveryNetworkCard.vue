<template>
  <div>
    <h2 class="nhsd-t-heading-xl nhsd-!t-margin-bottom-6 ">Content Delivery Network</h2>
    <p>NHS teams are very welcome to using our design system via our content delivery network.</p>
    <article class="nhsd-m-card">
      <a href="https://design-system.digital.nhs.uk/cdn/latest/stylesheets/nhsd-frontend.css" class="nhsd-a-box-link " target="_blank" rel="external"  aria-label="About NHS Digital - More about what we do (external link, opens in a new tab)" >
        <div class="nhsd-a-box nhsd-a-box--bg-light-grey">
          <div class="nhsd-m-card__content_container">
            <div class="nhsd-m-card__content-box">
              <div class="nhsd-m-card__tag-list">
                <span class="nhsd-a-tag nhsd-a-tag--bg-dark-grey">Currently at <span v-if="this.releases[0]">{{ this.releases[0].tag_name }}</span></span>
              </div>
              <p class="nhsd-t-heading-s">Stay up to date</p>
              <p class="nhsd-t-body-s">By using the latest distribution you are automatically keeping your project up to date.</p>
            </div>
            <div class="nhsd-m-card__button-box">
              <span class="nhsd-a-button">
                <span class="nhsd-a-button__label">Latest CSS</span>
              </span></div>
          </div>
        </div>
      </a>
    </article>
    <p>If your project needs to keep to a locked version.</p>
    <div class="nhsd-m-table nhsd-t-body">
      <table data-responsive data-no-sort>
        <thead>
            <tr>
              <th>Published</th>
              <th>CSS</th>
              <th>JavaScript</th>
              <th>Download</th>
              <th>GitHib Release</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="release in releases" :key="release.id">
              <td>{{ release.published_at }}</td>
              <td><a class="nhsd-a-link" :href="'https://design-system.digital.nhs.uk/cdn/'+ release.tag_name +'/stylesheets/nhsd-frontend.css'">Hosted</a></td>
              <td><a class="nhsd-a-link" :href="'https://design-system.digital.nhs.uk/cdn/'+ release.tag_name +'/scripts/nhsd-frontend.js'">Hosted</a></td>
              <td><a class="nhsd-a-link" :href="release.assets[0].browser_download_url">{{ release.assets[0].name }}</a></td>
              <td><a class="nhsd-a-link" :href="release.html_url">{{ release.tag_name }}</a></td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentDeliveryNetworkCard",
  props: [
    'releases'
  ]
}
</script>