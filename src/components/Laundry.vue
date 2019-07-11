<template>
    <div class="walls" :class="{ lights_on: lightClass1 }">
      <div class="door"></div>
      <div class="light_overflow">
        <div class="lights-holder2" @click="lightSwitch2" :class="{ walllamp_on: lightClass2 }">
          <div class="wall-lamp light0"></div>
          <div class="wall-lamp light1"></div>
          <div class="wall-lamp light2"></div>
        </div>
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
    lightStatus2 () { return this.$store.state.items.Laundry.state },
    lightClass2 () {
      if (this.lightStatus2 === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch2 () { this.$store.dispatch('lightSwitch', this.$store.state.items.Laundry) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.Laundry)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 155px;
    width: 110px;
    top: auto;
    bottom: 0px;
    position: absolute;
    margin: -10px;
    border: 10px solid $walls;
    background-color: $floors;
    color: rgb(177, 177, 177);
    z-index: 10;
    &:after{
      content: '';
      height: 100%;
      width: 100%;
      background-color: $floors;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .door{
    background-color: #37538f;
    position: absolute;
    height: 85px;
    width: 10px;
    top: 30px;
    right: -10px;
  }
  .light_overflow{
    height: 154px;
    width: 110px;
    position: absolute;
    top: 0px;
    right: 0px;
    overflow: hidden;
  }
  .lights-holder2{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 2px;
    right: 0px;
    border-radius: 60px;
    .wall-lamp{
      background-color: #ffffff22;
      height: 9px;
      width: 9px;
      position: absolute;
      border-radius: 10px;
      top: 70px;
      left: 80%;
      transform: translate(-50%, -50%);
      transition: all .15s ease-in-out;
    }
    .light0{
      top: 50px;
    }
    .light2{
      top: 90px;
    }
  }
  .lights_on{
    .light{
      background-color: #ffffffa3;
      box-shadow: 0 0 60px 16px #fff, 0 0 8px 2px #fff;
    }
    &.walls::after{
      background-color: #ffffff17;
    }
  }
  .walllamp_on{
    background-color: #ffffff17 !important;
    border-radius: 0;
    .wall-lamp{
      background-color: #e9ecf3;
      box-shadow: 0 0 40px 15px #fff, 0 0 8px 2px #fff;
    }
  }
</style>
