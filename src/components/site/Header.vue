<template>
  <span>
    <Menu></Menu>
  </span>
</template>

<script>
import Menu from "@/components/site/Menu";
export default {
  name: 'Header',
  components: {Menu},
  data() {
    return {
      appTitle: 'Planner',
    };
  },
  created() {
  }

}
</script>

