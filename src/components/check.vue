<template>
  <div class="pt-4">
    <h3>Horizontalebene</h3>

    <ul class="list-group">
      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[0]"
          :disabled="
            currentPositions[1] || currentPositions[2] || currentPositions[3]
          "
        />
        Links
      </li>

      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[1]"
          :disabled="
            currentPositions[0] || currentPositions[2] || currentPositions[3]
          "
        />
        Halblinks
      </li>

      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[2]"
          :disabled="
            currentPositions[1] || currentPositions[0] || currentPositions[3]
          "
        />
        Halbrechts
      </li>

      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[3]"
          :disabled="
            currentPositions[1] || currentPositions[2] || currentPositions[0]
          "
        />
        Rechts
      </li>
    </ul>
  </div>

  <div class="pt-4">
    <h3>Frontalebene</h3>

    <ul class="list-group">
      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[4]"
          :disabled="currentPositions[5]"
        />
        Oben
      </li>

      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[5]"
          :disabled="currentPositions[4]"
        />
        Unten
      </li>
    </ul>
  </div>

  <div class="pt-4">
    <h3>Medianebene</h3>

    <ul class="list-group">
      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[6]"
          :disabled="currentPositions[7]"
        />
        Vorne
      </li>

      <li class="list-group-item">
        <input
          @change="sendChecks"
          class="form-check-input me-1"
          type="checkbox"
          value="1"
          aria-label="..."
          v-model="currentPositions[7]"
          :disabled="currentPositions[6]"
        />
        Hinten
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["currentPositions"],
  data() {
    return {};
  },
  methods: {
    sendChecks() {
      this.$emit("getChecks", this.currentPositions);
    },
  },
  computed: {},
};
</script>
