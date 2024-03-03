<template>
  <section class="dashboard__continer">
    <DashboardNav></DashboardNav>
    <HeaderAndNav></HeaderAndNav>
    <DashboardField></DashboardField>
  </section>
</template>

<script setup lang="ts">
import DashboardField from '../components/DashboardField.vue';
import DashboardNav from '../components/DashboardNav.vue';
import HeaderAndNav from '../components/HeaderAndNav.vue';
</script>

<style scoped>

/* *, section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} */

.dashboard__container {

}

</style>
