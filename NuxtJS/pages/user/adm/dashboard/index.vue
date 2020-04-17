<template>
  <div>
    <h1>HORNY Admin</h1>

    <hr>

    <div class="card">
      <div class="card-body">
        <h4><strong>Naam:</strong> {{ this.$auth.user.full_name }}</h4>
        <div class="mb-5"><strong>Email:</strong> {{ this.$auth.user.email }}</div>
        <nuxt-link to="/user/logout" class="btn btn-danger">Logout</nuxt-link>
        <nuxt-link to="/user/my-account" class="btn btn-dark">Ga terug</nuxt-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  layout: 'defaultVuetify',
  middleware: 'auth'
}
</script>
