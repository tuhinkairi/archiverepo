<template>
  <div id="app" >
    <router-view />
  </div>
</template>
<style>
#app{
  max-width: 100vw;
  overflow-x: hidden;
  overflow-wrap: anywhere;
}
</style>

<script>
import { WOW } from "wowjs";
import "animate.css";
import './stylesheets/default.css'
import './stylesheets/style.css'
import './stylesheets/responsive.css'
import 'normalize.css'
new WOW().init();

export default {
  name: "App",
};
</script>