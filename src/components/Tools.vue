<template>
    <div class="tools">
      <input type="number" v-model="scaleValue" @change="changeScale">
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      scaleValue: window.localStorage.getItem('mapScale')
    }
  },
  methods: {
    changeScale () {
      window.localStorage.setItem('mapScale', this.scaleValue)
      document.querySelector('.main-container').style.transform = 'scale(' + this.scaleValue + ')'
    }
  },
  mounted () {
    (this.scaleValue = window.localStorage.getItem('mapScale')) || (this.scaleValue = 1)
    document.querySelector('.main-container').style.transform = 'scale(' + this.scaleValue + ')'
  }
}

</script>

<style lang="scss" scoped>
  .tools{
    top: 500px;
    position: relative;
  }
</style>
