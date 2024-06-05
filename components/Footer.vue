<template>
  <footer class="fixed-bottom footer mt-auto py-3">
    <b-container fluid>
      <b-row no-gutters>
        <b-col>
          <p class="font-weight-light mt-2">
            <small>(&copy;) 2022-2024 Open Mobile Alliance</small>
          </p>
        </b-col>
        <b-col>
          <b-nav class="float-right">
            <b-nav-item href="https://twitter.com/OMASpecWorks" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </b-nav-item>
            <b-nav-item href="https://www.linkedin.com/company/52819/admin/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </b-nav-item>
            <b-nav-item
              href="https://www.facebook.com/OMASpecWorks" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </b-nav-item>
            <b-nav-item
              href="https://github.com/OpenMobileAlliance" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {}
</script>
