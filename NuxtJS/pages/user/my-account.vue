<template>
  <div>
    <h1>My Account</h1>

    <hr>

    <div class="card">
      <div class="card-body">
        <h4>{{ this.$auth.user.full_name }}</h4>
        <div class="mb-5"><strong>Email:</strong> {{ this.$auth.user.email }}</div>
        <nuxt-link to="/user/logout" class="btn btn-danger">Logout</nuxt-link>
        <nuxt-link to="/user/adm/dashboard" class="btn btn-dark">Enter Admin Panel</nuxt-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'auth'
}
</script>
