<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Logo Brand"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/over-ons' }">
                Over ons
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/projecten' }">
                Projecten
            </b-navbar-item>
            
            <b-navbar-dropdown label="Contact">
                <b-navbar-item class="modal-close is-large" href="#">
                    Telefonishe Contact
                </b-navbar-item>
                <hr class="navbar-divider">
                <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                    Contact Formulier
                </b-navbar-item>
                <hr class="navbar-divider-godzilla">
                <b-navbar-item tag="router-link" :to="{ path: '/contact/chat' }">
                    Contact via Chat
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template v-if="!$auth.loggedIn" slot="end">
            <nuxt-link class="button is-primary" to="/user/register" exact-active-class="active">
                   Registreer                  
            </nuxt-link>
                    
            <nuxt-link class="button is-light" to="/user/login" exact-active-class="active">
                    <strong>Log in</strong>                    
            </nuxt-link>
        </template>
        <template v-else="$auth.loggedIn" slot="end">

            <nuxt-link class="button is-primary" to="/user/my-account" exact-active-class="active">
                My Account
            </nuxt-link>
            <nuxt-link to="/user/logout" class="button is-light" exact-active-class="active">
                <strong>Loguit</strong>
            </nuxt-link>
               
        </template>

        
    </b-navbar>
</template>

<script>
import Dialog from '~/components/site-partials/dialog'

export default {
        components: {
            Dialog
        }
        
    }
</script>

<style>

hr.navbar-divider-godzilla {
    background-color: #f3eaea;
    border: none;
    height: 2px;
    margin: 0.5rem 0;
}
</style>