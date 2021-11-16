<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    sticky
    fixed="top"
    class="main-nav-bar border-bottom"
  >
    <b-navbar-brand
      to="/"
    >
      <b-img height="80" src="images/logo1.jpg" alt="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <template v-for="menu in document.menus">
        <b-navbar-nav v-if="menu.items" :key="menu.title" :class="menu.class">
          <b-nav-item-dropdown :text="menu.title">
            <b-dropdown-item
              v-for="item in menu.items"
              :key="item.title"
              :to="item.url"
            >
              {{ item.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-if="menu.icon" :key="menu.icon" :class="menu.class">
          <b-nav-item
          v-if="menu.target" :href="menu.url" :target="menu.target"
          :class="{'active': isRouteActive }"
          exact-active-class="active"
          >
            <FontAwesomeIcon :icon="menu.icon.split(' ')" />
          </b-nav-item>
          <b-nav-item v-else :to="menu.url" :class="{'active': isRouteActive }" exact-active-class="active">
            <FontAwesomeIcon :icon="menu.icon.split(' ')" />
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav
          v-if="menu.title && !menu.items"
          :key="menu.title"
          :class="menu.class"
        >
          <b-nav-item
            v-if="menu.target && !menu.icon"
            :href="menu.url"
            :target="menu.target"
          >
            {{ menu.title }}
          </b-nav-item>
          <b-nav-item
            v-else-if="!menu.target"
            :to="menu.url"
            :target="menu.target"
          >
            {{ menu.title }}
          </b-nav-item>
        </b-navbar-nav>
      </template>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {

  data() {
    return {
      document: {},
    }
  },

  async fetch() {
    const doc = await this.$content('menus').fetch()
    this.document = doc
  },
  computed: {
    isRouteActive() {
      if (this.$nuxt.$route.path === '/') {
        return true;
      } else {
        return false;
      }
    }
  },
  fetchKey: 'menus',
}
</script>
