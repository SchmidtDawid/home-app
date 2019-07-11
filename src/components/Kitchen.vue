<template>
    <div class="walls" :class="{ lights_on_wall: lightClass1 || lightClass2 }">
      <div class="lights-holder1" @click="lightSwitch1" :class="{ lights_on: lightClass1 }">
        <div class="light light1"></div>
        <div class="light light2"></div>
        <div class="light light3"></div>
      </div>
      <div class="lights-holder2" @click="lightSwitch2" :class="{ lights_on: lightClass2 }">
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
    lightStatus1 () { return this.$store.state.items.Kitchen1.state },
    lightStatus2 () { return this.$store.state.items.Kitchen2.state },
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
    lightSwitch1 () { this.$store.dispatch('lightSwitch', this.$store.state.items.Kitchen1) },
    lightSwitch2 () { this.$store.dispatch('lightSwitch', this.$store.state.items.Kitchen2) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.Kitchen1)
    this.$store.dispatch('itemStateCheck', this.$store.state.items.Kitchen2)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 185px;
    width: 261px;
    top: auto;
    bottom: 513px;
    position: absolute;
    margin: -14px;
    border: 14px solid $walls;
    border-top: none;
    color: rgb(177, 177, 177);
    z-index: 10;
    &:after{
      content: '';
      height: 160%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
  .lights-holder2,
  .lights-holder1{
    height: 70px;
    width: 230px;
    background-color: #ffffff07;
    position: absolute;
    bottom: 20px;
    left: 14px;
    border-radius: 0 0 35px 35px;
    border: 2px dashed #ffffff20;
  }
  .lights-holder1{
    height: 70px;
    width: 230px;
    background-color: #ffffff07;
    position: absolute;
    bottom: 94px;
    left: 14px;
    border-radius: 35px 35px 0 0;
    border: 2px dashed #ffffff20;
    border-bottom: none;
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
  .light1{
    left: 20%;
  }
  .light3{
    left: 80%;
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
  .lights_on_wall.walls{
    &::after{
      background: linear-gradient(#ffffff00 10%, #ffffff17 40%);
    }
  }
</style>
