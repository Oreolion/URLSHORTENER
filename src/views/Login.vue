<template>
  <div class="right__box">
    <div class="signup__form">
      <form action="">
        <div class="navigatepagebtn-box">
          <button>
            <router-link to="/signup">REGISTER</router-link>
          </button>
          <button>
            <router-link to="/login">LOGIN</router-link>
          </button>
        </div>
        <h1 class="form__header">Welcome Back</h1>
        <div class="inner__form">
          <label for="email">
            Email address: <br />
            <input type="email" v-model="v$.email.$model" />
            <small v-if="v$.email.$errors.length > 0 && v$.email.$errors[0]">
              {{ v$.email.$errors[0].$message }}
            </small>
          </label>
          <label for="password">
            Password: <br />
            <input type="password" v-model="v$.password.$model" />
            <small v-if="v$.password.$errors.length">{{
              v$.password.$errors[0].$message
            }}</small>
          </label>

          <div class="btn-box">
            <button type="button" @click="handleLogin">Login account</button>
            <button>Sign in with google</button>
            <button>Sign in with LinkedIn</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const user = reactive({
  email: "",
  password: "",
});

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(userRules, user);

const router = useRouter();

const handleLogin = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response);
    if (response.user) {
      localStorage.setItem("isLoggedIn", "true");

      router.push("/dashboard");
    }
  } catch (error: any) {
    console.log(error);
    toast.error(error.message);
  }
};
</script>

<style scoped></style>
