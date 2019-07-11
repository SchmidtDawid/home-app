<template>
    <div class="walls" :class="{ lights_on: lightClass }">
      <div class="door"></div>
      <div class="lights-holder" @click="lightSwitch">
        <div class="light light1"></div>
        <div class="light light2"></div>
        <div class="light light3"></div>
      </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
    lightStatus () { return this.$store.state.items.DawidsRoom.state },
    lightClass () {
      if (this.lightStatus === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch () { this.$store.dispatch('lightSwitch', this.$store.state.items.DawidsRoom) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.DawidsRoom)
    // this.$store.dispatch('ItemStateChangedEventmUpdater', this.$store.state.items.DawidsRoom)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 290px;
    width: 450px;
    top: auto;
    bottom: 0;
    position: absolute;
    margin: -14px;
    border: 14px solid $walls;
    background-color: transparent;
    color: rgb(177, 177, 177);
    transition: all .04s ease-in-out;
    z-index: 10;
  }
  .door{
    background-color: #37538f;
    position: absolute;
    height: 14px;
    width: 85px;
    top: -14px;
    right: 11px;
  }
  .lights-holder{
    height: 150px;
    width: 80px;
    background-color: #ffffff07;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 60px;
    border: 2px dashed #ffffff20;
  }
  .light{
    background-color: #ffffff22;
    height: 14px;
    width: 14px;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .15s ease-in-out;
    // box-shadow: 0 0 100px 40px rgba(255, 255, 0, 0.521);
  }
  .light1{
    top: 30%
  }
  .light3{
    top: 70%
  }
  .lights_on{
    .light{
      background-color: #ffffffa3;
      box-shadow: 0 0 135px 33px #fff, 0 0 8px 2px #fff;
    }
    .light1{
      box-shadow: -100px 0 135px 33px #fff, 0 0 8px 2px #fff;
    }
    .light3{
      box-shadow: 100px 0 135px 33px #fff, 0 0 8px 2px #fff;
    }
    &.walls{
      background-color: #ffffff17;
    }
  }
</style>
