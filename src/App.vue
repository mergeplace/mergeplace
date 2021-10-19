<template>
  <div id="app">
    <transition
      appear
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated d03 delay-01s fadeOut"
    >
      <navigation v-show="showNav" :navi="showNav"></navigation>
    </transition>
    <transition
      appear
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Navigation,
  },
  methods: {
    ...mapActions({
      getPricePerHour: "meetingRoom/getPrice",
      getPricesOfWorkplace: "workplace/getPrices",
    }),
  },
  computed: {
    showNav() {
      let name = this.$route.name;
      if (
        name == "Hello" ||
        name == "Start" ||
        name == "Coworking" ||
        name == "MeetingRoom" ||
        name == "Events" ||
        name == "About"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  beforeMount() {
    this.getPricePerHour();
    this.getPricesOfWorkplace();
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  @extend %flex-row;
  background-color: $MAIN-DARK-COLOR;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
