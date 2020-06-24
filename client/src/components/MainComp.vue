<template>
  <div class="wrapper">
    <!-- Page Preloder -->
    <div id="preloder">
      <div class="loader"></div>
    </div>

    <!-- Header section -->
    <header class="header-section">
      <HeaderComp></HeaderComp>
      <NavComp></NavComp>
    </header>
    <!-- Header section end -->

    <!-- main-content -->
    <router-view></router-view>
    <!-- main-content | end -->

    <!-- Footer section -->
    <FooterComp></FooterComp>
    <!-- Footer section end -->
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

export default {
  name: "MainComp",
  components: {
    HeaderComp,
    NavComp,
    FooterComp
  }
};
</script>

<style>
</style>