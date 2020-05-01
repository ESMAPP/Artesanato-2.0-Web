<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="#" class="nav-link">
          <span class="link-text logo-text">Artesanato</span>
          <svg
            id="Layer_1"
            class="logo-icon"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 151.03 134.76"
          >
            <polygon class="cls-1" points="18.79 28.62 40.77 15.16 62.01 59.11 18.79 28.62" />
            <polygon class="cls-2" points="8.76 119.45 0 88.78 60.84 74.26 8.76 119.45" />
            <polygon class="cls-1" points="138.48 47.46 151.03 74.26 84 62.74 138.48 47.46" />
            <polygon class="cls-3" points="67.79 0 95.88 1.05 69.83 44.68 67.79 0" />
            <polygon class="cls-3" points="109 129.59 85.11 134.76 76.58 77.1 109 129.59" />
            <polygon class="cls-2" points="122.6 16.77 121.63 33.21 97.32 37.13 122.6 16.77" />
            <polygon class="cls-1" points="60.84 120.28 56.54 106.63 67.22 85.3 60.84 120.28" />
            <polygon class="cls-2" points="97.32 78.09 105.68 101.83 75.33 61.8 97.32 78.09" />
            <polygon class="cls-3" points="19.66 50.49 12.87 68.82 50.48 65.65 19.66 50.49" />
          </svg>
        </a>
      </li>
      <li class="nav-item">
        <router-link to="/products" tag="a" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-grid"
          >
            <rect class="icon-primary" x="3" y="3" width="7" height="7" />
            <rect class="icon-secondary" x="14" y="3" width="7" height="7" />
            <rect class="icon-secondary" x="14" y="14" width="7" height="7" />
            <rect class="icon-secondary" x="3" y="14" width="7" height="7" />
          </svg>
          <span class="link-text">Menu</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" tag="a" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-users"
          >
            <path class="icon-primary" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle class="icon-primary" cx="9" cy="7" r="4" />
            <path class="icon-secondary" d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path class="icon-secondary" d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span class="link-text">Utilizadores</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/events" tag="a" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar"
          >
            <rect class="icon-primary" x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line class="icon-secondary" x1="16" y1="2" x2="16" y2="6" />
            <line class="icon-secondary" x1="8" y1="2" x2="8" y2="6" />
            <line class="icon-secondary" x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span class="link-text">Eventos</span>
        </router-link>
      </li>
      <li class="nav-item">
        <a v-if="isUserLoggedIn && networkOnLine" class="nav-link" @click="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-log-out"
          >
            <path class="icon-primary" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline class="icon-secondary" points="16 17 21 12 16 7" />
            <line class="icon-secondary" x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span class="link-text">Sair</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex'

const asset = require('@/assets/LogoIcon_vf.svg')

export default {
  components: {},
  data: () => ({ asset, fit: 'contain' }),
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle'])
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  transition: width 600ms ease;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--color-primary);
  cursor: pointer;
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.icon-primary {
  color: var(--color-primary);
  opacity: 0.7;
}

.icon-secondary {
  color: var(--color-primary);
}

.icon-primary,
.icon-secondary {
  transition: var(--transition-speed);
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

.navbar:hover .logo svg {
  transform: rotate(-360deg);
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .navbar:hover {
    width: 16rem;
  }

  .navbar:hover .link-text {
    display: inline;
  }

  .navbar:hover .logo svg {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }
}

.cls-1 {
  fill: #1775c1;
}
.cls-2 {
  fill: #f64;
}
.cls-3 {
  fill: #ffaf3f;
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }
}
</style>
