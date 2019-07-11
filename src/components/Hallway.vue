<template>
    <div class="walls" :class="{ lights_on: lightClass }">
      <div class="lights-holder" @click="lightSwitch">
        <div class="light light1"></div>
        <div class="light light2"></div>
        <div class="light light3"></div>
        <div class="light light4"></div>
        <div class="light light5"></div>
      </div>
      <div class="wardrobe"></div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
    lightStatus () { return this.$store.state.items.Hallway.state },
    lightClass () {
      if (this.lightStatus === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch () { this.$store.dispatch('lightSwitch', this.$store.state.items.Hallway) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.Hallway)
    // this.$store.dispatch('ItemStateChangedEventmUpdater', this.$store.state.items.Hallway)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 560px;
    width: 176px;
    top: auto;
    bottom: 304px;
    position: absolute;
    left: 274px;
    color: #b1b1b1;
    z-index: 9;
    overflow: hidden;
  }
  .wardrobe{
    height: 171px;
    width: 62px;
    top: auto;
    bottom: 223px;
    left: 15px;
    position: absolute;
    margin: -14px;
    border-top: 14px solid $walls;
    background-color: $floors;
    color: #b1b1b1;
    z-index: 7;
  }
  .lights-holder{
    height: 360px;
    width: 69px;
    background-color: #ffffff07;
    position: absolute;
    bottom: 10px;
    left: 85px;
    border-radius: 50px;
    border: 2px dashed #ffffff20;
    z-index: 7;
  }
  .light{
    background-color: #ffffff22;
    height: 14px;
    width: 14px;
    top: 30px;
    right: 27px;
    position: absolute;
    border-radius: 50%;
    transition: all .15s ease-in-out;
  }
  .light2{
    top: 102px
    }
  .light3{
    top: 174px
  }
  .light4{
    top: 246px
  }
  .light5{
    top: 318px
  }
  .lights_on{
    .wardrobe{
      background-color: #ffffff00;
    }
    .light{
      background-color: #ffffffa3;
      box-shadow: 0 0 60px 16px #fff, 0 0 8px 2px #fff;
    }
    &.walls{
          background: linear-gradient(#ffffff00, #ffffff17);
    }
  }
</style>
