<script setup>
import player from "./components/player.vue";
import check from "./components/check.vue";
import buttons from "./components/buttons.vue";
import reference from "./components/reference.vue";
</script>

<template>
  <header>
    <div class="wrapper justify-content-center">
      <h1 v-if="finished">Vielen Dank</h1>
      <h4 v-if="!finished && !landing">Referenz vorne</h4>
      <reference
        v-if="!finished && !landing"
        class="mb-4"
        :count="count"
        :key="count"
      />
      <h4 v-if="!finished && !landing">Audiobeispiel {{ count + 1 }} / 24</h4>
      <player v-if="!finished && !landing" :count="count" :key="count" />
    </div>
  </header>

  <main>
    <h2 v-if="landing">Binaurale Positionsbestimmung</h2>
    <div v-if="landing" class="border border-light p-2 rounded mb-4 w-100">
      <p>
        Diese App ist dazu gedacht, den im Rahmen der Bachelorarbeit
        erarbeiteten binauralen Algorithmus zur Positionierung von
        Schallereignissen zu evaluieren. Um binaurale Schallereignisse bewerten
        zu können, muss zwingend ein Kopfhörer genutzt werden. Um
        auszuschließen, dass der Kopfhörer falsch herum aufgesetzt wurde, muss
        das folgende Schallereignis auf dem linken Ohr zu hören sein.
      </p>

      <audio class="my-3" controls="">
        <source :src="generateURL()" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>
        Bei der Bewertung muss <b>nicht</b> auf jeder Ebene eine Auswahl
        getroffen werden. Es kann sein, dass ein Schallereignis z. B. weder oben
        noch unten oder weder links noch rechts stattfindet. Es kann beliebig
        zwischen den einzelnen Schallereignissen gewechselt und die Auswahl
        korrigiert werden. Nach 24 Bewertungen erfolgt mittels des "Senden"
        Button die Übertragung an den Server.
      </p>
      <p>
        Die Referenz ist mittig vor dem Hörenden mit 0° Azimut und 0° Elevation
        ausgespielt.
      </p>
      <p>
        Die Audiobeispiele sind mit der KEMAR HRTF-Datenbank gefaltet und sind
        frei im Raum angeordnet. Der Radius zur Quelle beträgt dabei 1 Meter. Es
        wurde ein kurzer Raum (Reverb) beigemischt, um das Schallereignis etwas
        natürlicher wirken zu lassen.
      </p>
    </div>
    <check
      v-if="!finished && !landing"
      :currentPositions="positions[count].positions"
      @getChecks="storeChecks"
    />
    <buttons
      v-if="!finished"
      @next="setNext"
      @previous="setPrevious"
      @submit="submit"
      @start="start"
      :count="count"
      :landing="landing"
    />
  </main>
</template>

<script>
import sendData from "../rest/sendData";
export default {
  name: "Binaurale Evaluation",
  data() {
    return {
      count: 0,
      landing: true,
      positions: [],
      finished: false,
    };
  },
  methods: {
    generateURL() {
      return "assets/audio/links.mp3";
    },
    start() {
      this.landing = false;
    },
    storeChecks(value) {
      this.positions[this.count].positions = value;
    },
    setNext() {
      this.count <= 23 ? this.count++ : this.count;
    },
    setPrevious() {
      this.count > 0 ? this.count-- : this.count;
    },
    async submit() {
      let status = await sendData.methods.sendEval(this.positions);
      console.log(status);
      if (status) {
        this.finished = true;
        return true;
        // if message is not sent
      } else {
        return false;
      }
    },
  },
  created() {
    for (let i = 0; i <= 23; i++) {
      this.positions[i] = {
        id: i,
        positions: [false, false, false, false, false, false, false, false],
      };
    }
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
