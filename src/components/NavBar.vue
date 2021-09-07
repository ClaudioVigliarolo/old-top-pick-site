<template>
  <div class="content-container">
    <div class="navbar-brand-container">
      <a class="text-brand" href="/">TOP Pick</a>
    </div>

    <div class="navbar-bar-default" id="app-navbar">
      <ul class="sections-list">
        <li class="section-item">
          <a class="section-item-text" :href="getAppPath()"> Get The App </a>
        </li>
      </ul>
      <div class="language-input-container">
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
    <div class="icon-container">
      <a-icon type="menu" class="menu-icon" @click="toggleNavbar()" />
    </div>
  </div>
</template>

<script lang="ts">
import { SITE_HOSTNAME } from "@/constants/constants";
import { Lang } from "@/interfaces/interfaces";
import { ActionTypes } from "@/store/actions";
import { getLanguageLabel } from "@/utils/utils";
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

  getAppPath(): string {
    return SITE_HOSTNAME + "/" + this.$store.state.currentLanguage + "/get-app";
  }

  toggleNavbar() {
    var x = document.getElementById("app-navbar");
    if (x.className === "navbar-bar-default") {
      x.className = "navbar-bar-opened";
    } else {
      x.className = "navbar-bar-default";
    }
  }
}
</script>

<style scoped>
.text-brand {
  text-decoration: none;
  color: white;
  font-size: 25px;
  text-align: left;
}
.navbar-brand-container {
  width: 200px;
  display: flex;
}

.content-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 15px;
  width: 100%;
}

.icon-container {
  display: none;
}
.menu-icon {
  font-size: 20px;
  margin: 10px;
  color: white;
}
.sections-list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.section-item {
  margin-left: 50px;
  font-size: 17px;
}
.section-item-text {
  color: white;
}

.language-input {
  background-color: transparent !important;
  color: white;
  border-width: 0;
  font-size: 18px;
}

.language-input-container {
  width: 100px;
  float: right;
}
.brand {
  color: white;
  font-size: 30px;
  margin-left: 10px;
}
.language-input:focus {
  border-style: inset;
  outline-color: orange;
}

.navbar-bar-default {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

@media screen and (max-width: 800px) {
  .content-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    padding: 10px;
    width: 100%;
  }

  .navbar-bar-default {
    display: none;
    width: 100%;
    justify-content: space-between;
  }

  .navbar-bar-opened {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10000;
    left: 0;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 10px;
    background-color: rgb(237, 154, 1);
  }

  .sections-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-container {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: flex-end;
  }

  .section-item {
    margin-left: 0px;
    margin-top: 10px;
  }

  .language-input-container {
    float: none;
    align-self: center;
    margin-left: 50px;
  }
}
</style>
