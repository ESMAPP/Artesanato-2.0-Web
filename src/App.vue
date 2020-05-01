<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { NavBar },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
:root {
  font-size: 16px;
  font-family: 'Roboto';
  --color-primary: #1775c1;
  --color-warning: #ffaf3f;
  --color-danger: #f56c6c;
  --color-success: #67c23a;
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #fafafa;
  --bg-secondary: #f7f7f7;
  --transition-speed: 600ms;
}

body {
  color: black;
  background-color: white;
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #111111;
}

body::-webkit-scrollbar-thumb {
  background: var(--color-primary);
}

.main-wrapper {
  margin-left: 5rem;
  padding: 1rem;
}

@media only screen and (max-width: 600px) {
  .main-wrapper {
    margin: 0;
  }
}
</style>
