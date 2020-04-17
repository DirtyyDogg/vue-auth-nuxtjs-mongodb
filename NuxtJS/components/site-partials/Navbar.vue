<template>
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

        <template slot="end"
            v-if="!$auth.loggedIn">
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
        </template>

        <template slot="end"
            v-if="$auth.loggedIn">
            <b-navbar-item tag="div">
                <div class="buttons">
                    
                    
                    <nuxt-link to="/user/my-account" class="button is-primary" exact-active-class="active">My Account</nuxt-link> 
                        
                    <nuxt-link to="/user/logout" class="button is-light" exact-active-class="active">Logout</nuxt-link>        
    
                </div>
            </b-navbar-item>
        </template>

    </b-navbar>
</template>