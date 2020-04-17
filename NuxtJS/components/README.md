<template slot="end" v-if="$auth.loggedIn">
            <b-navbar-item tag="div">
                <div class="buttons">
                    
                    <nuxt-link class="button is-primary" to="/user/register" exact-active-class="active">
                        <strong>Registreer</strong>                    
                    </nuxt-link>
                    
                    <nuxt-link class="button is-light" to="/user/login" exact-active-class="active">
                        <strong>Log in</strong>                    
                    </nuxt-link>                
                </div>
            </b-navbar-item>
        </template>

        <template slot="end" v-else> 
            
            <b-navbar-item tag="div">
                <div class="buttons">
                    
                    
                    <nuxt-link to="/user/my-account" class="button is-primary" exact-active-class="active">My Account</nuxt-link> 
                        
                    <nuxt-link to="/user/logout" class="button is-light" exact-active-class="active">Logout</nuxt-link>        
    
                </div>
            </b-navbar-item>
        </template>
