<template>
    <div class="Register">
        <div class="row">
            <div class="col-lg-4 mx-auto border shadow rounded p-4 mt-3">
                <h1 class="text-center mt-3 mb-4">Register</h1>
                <form @submit.prevent="doRegister">
                    <div class="form-group">
                        <label for="usernameInput">Username</label>
                        <input type="text" class="form-control" id="usernameInput" v-model="username" :class="{
                            'is-invalid': usernameE === true,
                            'is-valid': usernameE === false
                        }">
                        <div class="invalid-feedback" v-if="usernameE">
                            {{ usernameEM }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput">Password</label>
                        <input type="password" class="form-control" id="passwordInput" v-model="password" :class="{
                            'is-invalid': passwordE === true,
                            'is-valid': passwordE === false
                        }">
                        <div class="invalid-feedback" v-if="passwordE | password2E">
                            {{ passwordEM }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput2">Confirm Password</label>
                        <input type="password" class="form-control" id="passwordInput2" v-model="password2" :class="{
                            'is-invalid': password2E === true,
                            'is-valid': password2E === false
                        }">
                        <div class="invalid-feedback" v-if="password2E">
                            {{ password2EM }}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            password2: '',

            usernameE: null,
            passwordE: null,
            password2E: null,

            usernameEM: null,
            passwordEM: null,
            password2EM: null,
        }
    },
    methods: {
        doRegister() {
            let access = true
            // username check
            if (this.username.length < 5) {
                this.usernameE = true
                access = false
                if (this.username.length == 0) {
                    this.usernameEM = "Username required"
                }
                else {
                    this.usernameEM = "Username is to short"
                }
            }
            else {
                this.usernameE = false
                this.usernameEM = ""
            }
            // password check
            if (this.password.length < 6) {
                this.passwordE = true
                access = false
                if (this.password.length == 0) {
                    this.passwordEM = "Password required"
                }
                else {
                    this.passwordEM = "Password is to short (at least 6 characters)"
                }
            }
            else {
                this.passwordE = false
                this.passwordEM = ""
            }
            // confirm password check
            // length
            if (this.password2.length < 6) {
                access = false
                this.password2E = true
                if (this.password2.length == 0) {
                    this.password2EM = "Confirm password is required"
                }
                else {
                    this.password2EM = "Confirm password is to short (at least 6 characters)"
                }
            }
            else {
                this.password2E = false
                this.password2EM = ""
            }
            // confirm
            if (this.password != this.password2) {
                access = false
                this.passwordE = true
                this.password2E = true
                this.password2EM = "Passwords do not match"
            }
            else {
                if (!this.passwordE && !this.password2E) {
                    this.password2EM = ""
                    this.passwordEM = ""
                }
            }
            if (access) {
                this.$store.commit("login", this.username + ':' + this.password)
                this.$router.push('/profile')
            }
        }
    }
}
</script>