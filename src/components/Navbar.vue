<template>
    <div class="NavBar">
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <router-link class="navbar-brand" to="/">MySite</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile"
                            v-if="$store.state.isAuthenticated">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="!$store.state.isAuthenticated">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/logout" v-if="$store.state.isAuthenticated">Logout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register" v-if="!$store.state.isAuthenticated">Register</router-link>
                    </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name: 'NavBar' // The name of wrapper class
}
</script>

<style scoped>
#nav {
    padding: 15px;
}

#nav a {
    font-weight: bold;
    color: #ffffff;
}

.navbar-brand {
    color: white !important;
}

#nav a.router-link-exact-active {
    color: #bdbcbc;
}
</style>
