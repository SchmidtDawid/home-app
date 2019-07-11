<template>
  <div class="main-container">
    <div class="main-walls" :class="{ 'mezzanine-viev': MezzanineViev }">
      <dawids-room></dawids-room>
      <bathroom></bathroom>
      <kitchen></kitchen>
      <hallway></hallway>
      <living-room></living-room>
      <wardrobe-room></wardrobe-room>
      <img class="stairs" src="../assets/stairs1.svg" @click="changeViev">
      <div class="door"></div>
    </div>
    <div class="aside">

      <tools></tools>
    </div>
    <mezzanine></mezzanine>
  </div>
</template>

<script>
import Tools from '@/components/Tools.vue'
import DawidsRoom from '@/components/DawidsRoom.vue'
import Bathroom from '@/components/Bathroom.vue'
import Kitchen from '@/components/Kitchen.vue'
import Hallway from '@/components/Hallway.vue'
import LivingRoom from '@/components/LivingRoom.vue'
import WardrobeRoom from '@/components/WardrobeRoom.vue'
import Mezzanine from '@/components/Mezzanine.vue'
export default {
  components: {
    Tools,
    DawidsRoom,
    Bathroom,
    Kitchen,
    Hallway,
    LivingRoom,
    WardrobeRoom,
    Mezzanine
  },
  computed: {
    MezzanineViev () {
      return this.$store.state.MezzanineViev
    }
  },
  methods: {
    changeViev () {
      this.$store.state.MezzanineViev = !this.$store.state.MezzanineViev
      console.log('change')
    }
  },
  mounted () {
    this.$store.dispatch('ItemStateChangedEventmUpdater', this.$store.state.items)
  }
}
</script>

<style lang="scss" scoped>
  .main-container{
    display: flex;
    padding: 30px 10px;
    transform-origin: top center;
  }
  .main-walls{
    position: relative;
    height: 1100px;
    width: 450px;
    border: 25px solid $walls;
    background-color: $floors;
    transition: all .5s ease-in-out;
    &.mezzanine-viev{
      transform: scale(.9);
      opacity: .6;
    }
  }
  .aside{
    position: relative;
    height: 1150px;
    width: 305px;
  }
  .door{
    background-color: #37538f;
    position: absolute;
    height: 90px;
    width: 25px;
    bottom: 450px;
    right: -25px;
  }
  .stairs{
    position: relative;
    height: 211px;
    bottom: -240px;
    left: 9px;
    opacity: .4;
    z-index: 10;
    transition: all .5s ease-in-out;
  }
  .mezzanine-viev .stairs{
    height: 189px;
    bottom: -211px;
    left: 9px;
  }
</style>
