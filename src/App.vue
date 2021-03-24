<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
  </div> -->
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
