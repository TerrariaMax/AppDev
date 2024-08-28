<!-- <template> -->
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <!-- <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
      </ul>
    </header>
  </div>
</template> -->

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="isAuthenticated" to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!isAuthenticated" to="/login" class="nav-link" active-class="active">
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <button v-if="isAuthenticated" @click="handleLogout" class="btn btn-link nav-link">
            Logout
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['isAuthenticated']) // Maps `isAuthenticated` from the Vuex store to be accessible in your component
  },
  methods: {
    ...mapActions(['logout']), // Maps the Vuex logout action
    handleLogout() {
      if (window.confirm('Are you sure you want to log out?')) {
        this.logout(); // Call the logout action
        this.$router.push({ name: 'Login' }); // Redirect to the login page
      }
    }
  }
};
</script>
<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
