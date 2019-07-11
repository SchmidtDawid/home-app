<template>
    <div class="walls" :class="{ lights_on: lightClass1 }">
      <div class="door"></div>
      <div class="chimney"></div>
      <div class="lights-holder" @click="lightSwitch1">
        <div class="light light1"></div>
        <div class="light light2"></div>
        <div class="light light3"></div>
        <div class="light light4"></div>
      </div>
      <div class="light_overflow">
        <div class="lights-holder2" @click="lightSwitch2" :class="{ walllamp_on: lightClass2 }">
          <div class="wall-lamp"></div>
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
    lightStatus1 () { return this.$store.state.items.Bathroom.state },
    lightClass1 () {
      if (this.lightStatus1 === 'ON') {
        return true
      } else {
        return false
      }
    },
    lightStatus2 () { return this.$store.state.items.BathroomWallLamp.state },
    lightClass2 () {
      if (this.lightStatus2 === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch1 () { this.$store.dispatch('lightSwitch', this.$store.state.items.Bathroom) },
    lightSwitch2 () { this.$store.dispatch('lightSwitch', this.$store.state.items.BathroomWallLamp) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.Bathroom)
    this.$store.dispatch('itemStateCheck', this.$store.state.items.BathroomWallLamp)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 195px;
    width: 323px;
    top: auto;
    bottom: 304px;
    position: absolute;
    margin: -14px;
    border: 14px solid $walls;
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
    width: 14px;
    top: 30px;
    right: -14px;
  }
  .chimney{
    width: 120px;
    height: 40px;
    background-color: $walls;
    position: absolute;
    top: 0;
    z-index: 5;
  }
  .lights-holder{
    height: 70px;
    width: 270px;
    background-color: #ffffff07;
    position: absolute;
    bottom: 30px;
    left: 25px;
    border-radius: 60px;
    border: 2px dashed #ffffff20;
  }
  .light_overflow{
    height: 115px;
    width: 203px;
    position: absolute;
    top: 0px;
    right: 0px;
    overflow: hidden;
  }
  .lights-holder2{
    height: 30px;
    width: 100px;
    background-color: #ffffff07;
    position: absolute;
    top: 2px;
    right: 30px;
    border-radius: 60px;
    border: 2px dashed #ffffff20;
    .wall-lamp{
      background-color: #ffffff22;
      height: 8px;
      width: 60px;
      position: absolute;
      border-radius: 10px;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all .15s ease-in-out;
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
  .light1{
    left: 20%;
  }
  .light3{
    left: 80%;
  }
  .light4{
    left: 80%;
    top: -50%;
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
    .wall-lamp{
      background-color: #e9ecf3;
      box-shadow: 0 0 45px 26px #fff, 0 0 8px 2px #fff;
    }
  }
</style>
