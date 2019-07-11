<template>
    <div class="walls" :class="{ lights_on: lightClass }">
      <div class="door"></div>
      <div class="lights-holder" @click="lightSwitch">
        <div class="light light1"></div>
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
    lightStatus () { return this.$store.state.items.WardrobeRoom.state },
    lightClass () {
      if (this.lightStatus === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch () { this.$store.dispatch('lightSwitch', this.$store.state.items.WardrobeRoom) }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.WardrobeRoom)
    // this.$store.dispatch('ItemStateChangedEventmUpdater', this.$store.state.items.WardrobeRoom)
  }

}
</script>

<style lang="scss" scoped>
  .walls{
    height: 390px;
    width: 280px;
    top: 46px;
    right: -305px;
    bottom: auto;
    position: absolute;
    margin: -25px;
    border: 25px solid $walls;
    background-color: $floors;
    color: #b1b1b1;
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
    height: 90px;
    width: 25px;
    bottom: 20px;
    left: -25px;
  }
  .lights-holder{
    height: 100px;
    width: 100px;
    background-color: #ffffff07;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px dashed #ffffff20
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
      box-shadow: 0 0 135px 33px #fff, 0 0 8px 2px #fff;
    }
    &.walls::after{
      background-color: #ffffff17;
    }
  }

</style>
