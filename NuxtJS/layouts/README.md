old nav

<nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <nuxt-link to="/" class="navbar-brand">Mijn-PROJECT</nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

      <!--button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span class="navbar-toggler-icon"></span>
      </button-->

      <div id="navbarBasicExample" class="navbar-menu" >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" exact-active-class="active">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/articles" class="nav-link" exact-active-class="active">Articles</nuxt-link>
          </li>
        </ul>

        <ul class="navbar-nav"
          v-if="!$auth.loggedIn">
          <li class="nav-item">
            <nuxt-link to="/user/register" class="nav-link" exact-active-class="active">Register</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/user/login" class="nav-link" exact-active-class="active">Login</nuxt-link>
          </li>
        </ul>

        <ul class="navbar-nav"
          v-if="$auth.loggedIn">
          <li class="nav-item">
            <nuxt-link to="/user/my-account" class="nav-link" exact-active-class="active">My Account</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/user/logout" class="nav-link" exact-active-class="active">Logout</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>



    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
      <nuxt />
        </template>
    </b-navbar>