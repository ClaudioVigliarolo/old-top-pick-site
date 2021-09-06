<template>
  <div class="navbar">
    <div class="navbar-brand">
      <a class="text-brand" href="/">TOP Pick</a>
    </div>

    <div class="navbar-sections">
      <ul class="sections-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
    <div class="navbar-language">
      <select v-model="currentLanguage" class="language-input">
        <option
          v-for="lang in languages"
          :value="lang"
          v-bind:key="lang"
          :selected="lang === currentLanguage"
        >
          {{ getLanguageLabel(lang) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Lang } from "@/interfaces/interfaces";
import { ActionTypes, MutationTypes } from "@/store";
import { getLanguageLabel } from "@/utils/utilts";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {
  get languages(): Lang[] {
    return this.$store.state.languages;
  }

  get currentLanguage(): Lang {
    return this.$store.state.currentLanguage;
  }

  set currentLanguage(val: Lang) {
    this.$store.dispatch(ActionTypes.SET_CURR_LANGUAGE, val);
  }

  getLanguageLabel(lang: Lang) {
    return getLanguageLabel(lang);
  }
}
</script>

<style scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  background-color: red;
}

.navbar-sections {
  display: flex;
  background-color: blue;
  flex-direction: row;
}
.navbar-language {
  display: flex;
  flex-direction: column;
}

.text-brand {
  text-decoration: none;
  color: white;
  font-size: 25px;
}
.navbar-brand {
  display: flex;
  background-color: pink;
  padding-left: 15px;
}

.sections-list {
  text-align: left;
  display: inline-block;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  align-self: flex-end;
  background-color: aqua;
}

.language-input {
  background-color: transparent !important;
  color: white;
  border-width: 0;
  font-size: 18px;
  width: 150px;
}

.brand {
  color: white !important;
  font-size: 30px;
  margin-left: 10px;
}
.language-input:focus {
  border-style: inset;
  outline-color: orange;
}
</style>
