<template>
  <div class="pt-4 d-flex justify-content-between">
    <button
      type="button"
      v-show="this.$props.count > 0"
      class="btn btn-secondary btn-lg"
      @click="$emit('previous')"
    >
      Zurück
    </button>
    <button
      type="button"
      v-if="this.$props.count < 23 && this.$props.landing == false"
      class="btn btn-primary btn-lg"
      @click="$emit('next')"
    >
      Weiter
    </button>
    <button
      type="button"
      v-if="this.$props.count == 23"
      class="btn btn-primary btn-lg"
      @click="$emit('submit')"
    >
      Senden
    </button>
    <button
      type="button"
      v-if="this.$props.landing == true"
      class="btn btn-primary btn-lg"
      @click="$emit('start')"
    >
      Start
    </button>
  </div>
</template>
<script>
export default {
  props: ["count", "landing"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
