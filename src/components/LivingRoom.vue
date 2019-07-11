<template>
    <div class="walls" :class="{ lights_on_wall: lightClass1 || lightClass2 }">
      <div class="lights-holder1" @click="lightSwitch1" :class="{ lights_on: lightClass1 }">
        <div class="light light1"></div>
        <div class="light light2"></div>
        <div class="light light3"></div>
        <div class="light light4"></div>
        <div class="light light5"></div>
        <div class="light light6"></div>
      </div>
      <div class="lights-holder2" @click="lightSwitch2" :class="{ lights_on: lightClass2 }">
        <div class="light light1"></div>
        <div class="light light2"></div>
        <div class="light light3"></div>
        <div class="light light4"></div>
        <div class="light light5"></div>
        <div class="light light6"></div>
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
    lightStatus1 () { return this.$store.state.items.LivingRoom1.state },
    lightStatus2 () { return this.$store.state.items.LivingRoom2.state },
    lightClass1 () {
      if (this.lightStatus1 === 'ON') {
        return true
      } else {
        return false
      }
    },
    lightClass2 () {
      if (this.lightStatus2 === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch1 () { this.$store.dispatch('lightSwitch', this.$store.state.items.LivingRoom1) },
    lightSwitch2 () { this.$store.dispatch('lightSwitch', this.$store.state.items.LivingRoom2) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.LivingRoom1)
    this.$store.dispatch('itemStateCheck', this.$store.state.items.LivingRoom2)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 388px;
    width: 450px;
    top: 0;
    bottom: auto;
    position: absolute;
    background-color: $floors;
    color: rgb(177, 177, 177);
    z-index: 8;
    &:after{
      content: '';
      height: 126%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .lights-holder2,
  .lights-holder1{
    height: 100px;
    width: 200px;
    background-color: #ffffff07;
    position: absolute;
    top: 69px;
    left: calc(50% - 50px);
    transform: translateX(-50%) rotate(90deg);
    border-radius: 0 0 50px 50px;
    border: 2px dashed #ffffff20;
  }
  .lights-holder2{
    .light1{
      top: 44px;
      left: 65px;
    }
    .light2{
      top: 6px;
      left: 43px;
    }
    .light3{
      top: -46px;
      left: 40px;
    }
    .light4{
      top: 46px;
      left: 140px;
    }
    .light5{
      top: 5px;
      left: 123px;
    }
    .light6{
      top: -44px;
      left: 102px;
    }
  }
  .lights-holder1{
    top: 70px;
    left: calc(50% + 53px);
    border-radius: 50px 50px 0 0;
    border: 2px dashed #ffffff20;
    border-bottom: none;
    .light1{
      top: 174px;
      left: 34px;
    }
    .light2{
      top: 79px;
      left: 63px;
    }
    .light3{
      top: 22px;
      left: 76px;
    }
    .light4{
      top: 180px;
      left: 109px;
    }
    .light5{
      top: 121px;
      left: 168px;
    }
    .light6{
      top: 42px;
      left: 156px;
    }
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
  }
  .lights_on{
    .light{
      background-color: #ffffffa3;
      box-shadow: 0 0 60px 16px #fff, 0 0 8px 2px #fff;
    }
    &.walls{
      background-color: #ffffff17;
    }
  }
  .lights_on_wall.walls::after{
      background: linear-gradient(#ffffff17 43%, #ffffff00 89%);
  }
</style>
