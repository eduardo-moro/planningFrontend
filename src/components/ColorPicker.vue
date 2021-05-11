<template>
  <div style="display: flex;flex-wrap: wrap;justify-content: center; flex-direction: row">
    <div v-for="(color) in colors">
      <v-btn
          class="mx-1 mb-2"
          :elevation="selectedColor === color?10:0"
          :style="'background:' + color"
          style="display:flex; height: 40px; width: 70px"
          @click="selectedColor = color"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  data() {
    return {
      colors: {
        red: "red",
        pink: "pink",
        purple: "purple",
        deeppurple: "#663399",
        indigo: "indigo",
        blue: "blue",
        lightblue: "lightblue",
        cyan: "cyan",
        teal: "teal",
        green: "green",
        lightgreen: "lightgreen",
        lime: "lime",
        yellow: "yellow",
        orange: "orange",
        brown: "brown",
        grey: "grey",
        black: "black",
      },
      selectedColor: "cyan",
    }
  }
}
</script>

<style scoped>

</style>
