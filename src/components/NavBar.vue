<template>
  <b-navbar class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand brand" href="/">TOP Pick</a>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <ul class="navbar-nav">
          <li class="nav-item">
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
          </li>
        </ul>
      </div>
    </div>
  </b-navbar>
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
.navbar-dark .navbar-nav .nav-link {
  color: orange !important;
}

.language-input {
  background-color: transparent !important;
  border-color: red;
  color: white;
  border-width: 0;
  font-size: 18px;
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
