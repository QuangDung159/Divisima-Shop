<template>
  <div class="main-content">
    <BannerComp></BannerComp>
    <!-- Hero section end -->

    <!-- Features section -->
    <FeatureComp></FeatureComp>
    <!-- Features section end -->

    <!-- letest product section -->
    <LastestProductComp></LastestProductComp>
    <!-- letest product section end -->

    <!-- Product filter section -->
    <ProductFilterComp></ProductFilterComp>
    <!-- Product filter section end -->

    <!-- Banner section -->
    <section class="banner-section">
      <div class="container">
        <div class="banner set-bg" data-setbg="img/banner-bg.jpg">
          <div class="tag-new">NEW</div>
          <span>New Arrivals</span>
          <h2>STRIPED SHIRTS</h2>
          <a href="#" class="site-btn">SHOP NOW</a>
        </div>
      </div>
    </section>
    <!-- Banner section end  -->
  </div>
</template>

<script>
import BannerComp from "./BannerComp";
import FeatureComp from "./FeatureComp";
import LastestProductComp from "./LastestProductComp";
import ProductFilterComp from "./ProductFilterComp";

export default {
  name: "ContentComp",
  components: {
    BannerComp,
    FeatureComp,
    LastestProductComp,
    ProductFilterComp
  }
};
</script>

<style>
</style>