<template>
  <div style="display: flex;flex-wrap: wrap;justify-content: center; flex-direction: row">
    <div v-for="(color) in colors">
      <v-btn
          class="mx-1 mb-2"
          :style="'background:' + color"
          :elevation="selectedColor === color?3:0"
          :outlined="color === '#fcfcfc'"
          style="display:flex; height: 40px; width: 70px"
          @click="setColor(color)"
      >
        <v-icon color="white" style="filter: drop-shadow(1px 1px 2px black)">
          {{ selectedColor === color ? "mdi-check" : "" }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "setInput"
  },
  props: ["value"],
  data() {
    return {
      selectedColor: "#000000",
      colors: {
        1: "#000000",
        2: "#777777",
        3: "#fcfcfc",
        4: "#770000",
        5: "#ff0000",
        6: "#ff7700",
        7: "#ffff00",
        8: "#007700",
        9: "#00ff00",
        10: "#77ff00",
        11: "#77ff77",
        12: "#77ffff",
        13: "#00ffff",
        14: "#0077ff",
        15: "#9400d3",
        17: "#000077",
      },
    }
  },
  methods: {
    setColor(color) {
      this.selectedColor = color
      this.$emit('setInput', color)
    }
  },

}
</script>

<style scoped>

</style>
