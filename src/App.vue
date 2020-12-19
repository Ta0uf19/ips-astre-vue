<template>
  <div id="app">
    <notifications group="foo" />
    <Stats msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Stats from './components/Stats.vue'

export default {
  name: 'App',
  components: {
    Stats
  }
}
</script>

