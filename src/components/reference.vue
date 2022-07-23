<template>
  <div class="justify-content-center d-flex">
    <audio controls="">
      <source :src="generateURL()" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
<script>
export default {
  props: ["count"],
  data() {
    return {};
  },
  methods: {
    generateURL() {
      return this.$props.count <= 11
        ? "assets/audio/1.mp3"
        : "assets/audio/13.mp3";
    },
  },
  computed: {},
};
</script>
