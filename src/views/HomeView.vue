<template>
  <div class="home-view">
    <home-plan></home-plan>
  </div>
</template>

<script>
import HomePlan from '@/components/HomePlan.vue'
export default {
  data: function () {
    return {

    }
  },
  components: {
    HomePlan
  }
}
</script>

<style lang="scss">
  .home-view{
    background-color: $background;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
