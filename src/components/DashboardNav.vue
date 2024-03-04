<template>
  <nav class="dashboard__nav">
    <div class="logo">
      <img src="../assets/Vector.png" alt="vector" />
      <div></div>
      <h3>SCISSORS</h3>
    </div>

    <ul class="dashboard__navlists">
      <h5>Overview</h5>
      <li>
        <router-link class="link" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"
            />
          </svg>
          Feeds
        </router-link>
      </li>
      <li>
        <div class="link" @click="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
            />
          </svg>
          <p>Bookmarks</p>
        </div>
      </li>
      
      <li>
        <router-link class="link" to="/dashboard/postanalytics">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
            />
          </svg>
          Analytics
        </router-link>
      </li>


      <li>
        <router-link class="link" to="/dashboard/accountprofile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
          Account
        </router-link>
      </li>
      <li>
        <div class="link" @Click="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
          <p>Notifications</p>
        </div>
      </li>
      <li @click="handleLogout">
        <div class="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
          <p>Logout</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogout = async () => {
  try {
    await signOut(getAuth());
    localStorage.clear();
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 1.6rem;
  margin-right: auto;
  display: flex;
  gap: 0.5rem;
  color: #1974fe;
}

h3 {
  line-height: 1;
  letter-spacing: 0.7;
}

.logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}
.dashboard__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 3rem;
  width: 17rem;
  height: 100vh;
  background-color: #1974fe;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin: 2rem 0;
}

.logo p,
li {
  font-size: 1rem;
  color: #fff;
}

.mobile {
  display: none;
}

.dashboard__navlists .link {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;
  color: #ddd;
  &:hover {
    letter-spacing: 1px;
  }
}

.dashboard__navlists p, .dashboard__navlists h5 {
  color: #fff;
}

.dashboard__navlists .link svg {
  background-color: #fff;
  color: red;
  height: 2.3rem;
  border-radius: 50%;
  padding: 0.2rem;
  width: 2.3rem;
}

.dashboard__navlists li:last-child {
  color: red;
  font-weight: bold;
}

.dashboard__navlists h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.dashboard__navlists .link li {
  display: flex;
  align-items: center;
  color: #fff;
  &:hover {
    color: var(--primary);
  }
}

@media (max-width: 767px) {
  .mobile {
    display: flex;
  }

  .dashboard__nav {
    display: none;
  }

  .mobile {
    display: flex;
  }
}

@media (max-width: 480px) {
  .dashboard__nav {
    width: 17rem;
  }
}
</style>
