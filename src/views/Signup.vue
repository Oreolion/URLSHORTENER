<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.ts";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirmPassword: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(computed(() => user.password)),
  },
};

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  typeOfUser: "",
});

const v$ = useVuelidate(userRules, user);

// const password = ref("");

const handleSignUp = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await createUserWithEmailAndPassword(
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

<template>
  <section>
    <div class="signup__box">
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
          <h1 class="form__header">Register as a Writer/Reader</h1>
          <div class="inner__form">
            <div class="name">
              <label for="firstname">
                First name: <br />
                <input v-model="user.firstname" type="text" />
              </label>
              <label for="lastname">
                Last name: <br />
                <input v-model="user.lastname" type="text" />
              </label>
            </div>

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
            <label for="password">
              Password: <br />
              <input type="password" v-model="v$.confirmPassword.$model" />
              <small v-if="v$.confirmPassword.$errors.length">{{
                v$.confirmPassword.$errors[0].$message
              }}</small>
            </label>

            <div class="btn-box">
              <button @click="handleSignUp">Create account</button>
              <button>Sign up with google</button>
              <button>Sign up with LinkedIn</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>



<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}

section .signup__box {
  margin: 0 auto;
  min-width: 40rem;
  width: 40rem;
}

.signup__form {
    
}

.btn-box {
    display: flex;
    flex-direction: column;
}


</style>
