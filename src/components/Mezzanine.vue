<template>
  <transition name="fade">
    <div v-if="MezzanineViev" ref="mezzanine" class="mezzanine" :class="{ 'mezzanine-viev': MezzanineViev }">
      <div class="chimney"></div>
      <img class="stairs" src="../assets/stairs2.svg" @click="changeViev">
      <div class="light_overflow holder1">
        <div class="lights-holder2" @click="lightSwitch1" :class="{ walllamp_on: lightClass1 }">
          <div class="wall-lamp"></div>
        </div>
      </div>
      <div class="light_overflow holder2">
        <div class="lights-holder2" @click="lightSwitch2" :class="{ walllamp_on: lightClass2 }">
          <div class="wall-lamp"></div>
        </div>
      </div>
      <laundry></laundry>
    </div>
  </transition>
</template>

<script>
import Laundry from '@/components/Laundry.vue'
export default {
  data: function () {
    return {
    }
  },
  computed: {
    MezzanineViev () {
      return this.$store.state.MezzanineViev
    },
    lightStatus1 () { return this.$store.state.items.BedRoomDawid.state },
    lightClass1 () {
      if (this.lightStatus1 === 'ON') {
        return true
      } else {
        return false
      }
    },
    lightStatus2 () { return this.$store.state.items.BedRoomMilena.state },
    lightClass2 () {
      if (this.lightStatus2 === 'ON') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    lightSwitch1 () { this.$store.dispatch('lightSwitch', this.$store.state.items.BedRoomDawid) },
    lightSwitch2 () { this.$store.dispatch('lightSwitch', this.$store.state.items.BedRoomMilena) },
    changeViev () {
      this.$store.state.MezzanineViev = !this.$store.state.MezzanineViev
    }
  },
  mounted () {
    this.$store.dispatch('itemStateCheck', this.$store.state.items.BedRoomDawid)
    this.$store.dispatch('itemStateCheck', this.$store.state.items.BedRoomMilena)
  },
  components: {
    Laundry
  }

}
</script>

<style lang="scss" scoped>

  .fade-enter{
    opacity: 0;
    transform: scale(1.2);
  }
  .fade-enter-active{
    transition: all .5s ease-in-out;
  }
  .fade-leave-active{
    opacity: 0;
    transform: scale(1.2);
    transition: all .5s ease-in-out;
  }
  .mezzanine{
    height: 394px;
    width: 450px;
    top: auto;
    left: 35px;
    bottom: 370px;
    position: absolute;
    margin: -25px;
    border: 25px solid $walls;
    border-bottom-width: 14px;
    border-top: 1px solid $walls;
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
  .chimney{
    width: 120px;
    height: 54px;
    background-color: $walls;
    position: absolute;
    top: 185px;
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
    height: 250px;
    width: 250px;
    position: absolute;
    top: -20px;
    right: 0px;
    overflow: hidden;
  }
  .holder2{
    top: 140px;
  }
  .lights-holder2{
    height: 100px;
    width: 100px;
    background-color: #ffffff07;
    position: absolute;
    top: 70px;
    right: 0;
    border-radius: 60px;
    border: 2px dashed #ffffff20;
    .wall-lamp{
      background-color: #ffffff22;
      height: 10px;
      width: 10px;
      position: absolute;
      border-radius: 10px;
      top: 55px;
      right: 20px;
      transform: translate(-50%, -50%);
      transition: all .15s ease-in-out;
    }
  }
  .walllamp_on{
    .wall-lamp{
      background-color: #e9ecf3;
      box-shadow: -50px 0 79px 32px #fff, 0 0 80px 30px #fff, 0 0 8px 2px #fff;
    }
  }
  .stairs{
    position: relative;
    z-index: 20;
    height: 167px;
    top: -157px;
    left: 9px;
    opacity: .4;
    z-index: 10;
  }
  .stairs-cover{
    display: block;
    height: 150px;
    width: 100px;
    background-color: $floors;
    top: -241px;
    left: 199px;
    transform: rotate(50deg);
    position: relative;
    z-index: -2;
    &::after{
      content: '';
      display: block;
      height: 50px;
      width: 100px;
      background-color: $floors;
      top: -6px;
      left: -35px;
      transform: rotate(58deg);
      position: relative;
    }
  }
</style>
