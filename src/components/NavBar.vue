<template>
  <nav class="navbar">
    <ul class="navbar-nav">
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
            <rect class="icon-primary" x="3" y="3" width="7" height="7"></rect>
            <rect
              class="icon-secondary"
              x="14"
              y="3"
              width="7"
              height="7"
            ></rect>
            <rect
              class="icon-secondary"
              x="14"
              y="14"
              width="7"
              height="7"
            ></rect>
            <rect
              class="icon-secondary"
              x="3"
              y="14"
              width="7"
              height="7"
            ></rect>
          </svg>
          <span class="link-text">Menu</span></router-link
        >
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
            <path
              class="icon-primary"
              d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            ></path>
            <circle class="icon-primary" cx="9" cy="7" r="4"></circle>
            <path class="icon-secondary" d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path
              class="icon-secondary"
              d="M16 3.13a4 4 0 0 1 0 7.75"
            ></path></svg
          ><span class="link-text">Utilizadores</span></router-link
        >
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
            <rect
              class="icon-primary"
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              ry="2"
            ></rect>
            <line class="icon-secondary" x1="16" y1="2" x2="16" y2="6"></line>
            <line class="icon-secondary" x1="8" y1="2" x2="8" y2="6"></line>
            <line class="icon-secondary" x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="link-text">Eventos</span></router-link
        >
      </li>
      <li class="nav-item">
        <a
          v-if="isUserLoggedIn && networkOnLine"
          class="nav-link"
          @click="logout"
          ><svg
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
            <path
              class="icon-primary"
              d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
            ></path>
            <polyline
              class="icon-secondary"
              points="16 17 21 12 16 7"
            ></polyline>
            <line
              class="icon-secondary"
              x1="21"
              y1="12"
              x2="9"
              y2="12"
            ></line></svg
          ><span class="link-text">Sair</span></a
        >
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
  opacity: 50%;
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
  background: var(--bg-secondary);
  font-size: 1.5rem;
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
  transform: rotate(-180deg);
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

.dark {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
}

.solar {
  --text-primary: #576e75;
  --text-secondary: #35535c;
  --bg-primary: #fdf6e3;
  --bg-secondary: #f5e5b8;
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
