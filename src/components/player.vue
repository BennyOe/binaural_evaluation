<template>
  <div class="justify-content-center d-flex">
    <audio @click="play" controls="">
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
      return "assets/audio/" + this.$props.count + ".mp3";
    },
    play() {
      console.log("clicked");
      document.addEventListener(
        "play",
        function (e) {
          var audios = document.getElementsByTagName("audio");
          for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
              audios[i].pause();
            }
          }
        },
        true
      );
    },
  },
  computed: {},
};
</script>
