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

    <!-- Hero section -->
    <ContentComp></ContentComp>

    <!-- Footer section -->
    <FooterComp></FooterComp>
    <!-- Footer section end -->
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp";
import NavComp from "./NavComp";
import ContentComp from "./ConentComp";
import FooterComp from "./FooterComp";

export default {
  name: "MainComp",
  components: {
    HeaderComp,
    NavComp,
    ContentComp,
    FooterComp
  }
};
</script>

<style>
</style>