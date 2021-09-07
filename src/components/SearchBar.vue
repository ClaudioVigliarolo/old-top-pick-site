<template>
  <div class="container">
    <div class="bar-container">
      <a-input
        placeholder="Search a Topic"
        v-model="searchKeyword"
        :value="searchKeyword"
        class="text-input"
      />
      <select v-model="currentCategoryId" class="select-input">
        <option :value="-1" :selected="-1 === currentCategoryId">
          Category
        </option>
        <option
          v-for="categ in categories"
          :value="categ.id"
          v-bind:key="categ.id"
          :selected="categ.id === currentCategoryId"
        >
          {{ categ.title }}
        </option>
      </select>

      <select
        name="Level"
        id="Level"
        class="select-input"
        v-model="currentLevel"
      >
        <option :value="-1" :selected="-1 === currentLevel">Level</option>
        <option
          v-for="lev in levels"
          :value="lev"
          v-bind:key="lev"
          :selected="lev === currentLevel"
        >
          {{ getLevelLabel(lev) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Category, Lang, TopicLevel } from "@/interfaces/interfaces";
import { Component, Vue } from "vue-property-decorator";
import { getLevelLabel } from "@/utils/utilts";
import { MutationTypes } from "@/store";

@Component({
  components: {},
})
export default class SearchBar extends Vue {
  isError = false;
  level = -1;
  levels = [TopicLevel.EASY, TopicLevel.MEDIUM, TopicLevel.HARD];

  getLevelLabel(level: TopicLevel) {
    return getLevelLabel(level);
  }

  get currentLevel(): TopicLevel | number {
    return this.$store.state.currentLevel;
  }

  set currentLevel(val: TopicLevel | number) {
    this.$store.commit(MutationTypes.SET_CURR_LEVEL, val);
  }

  get categories(): Category[] {
    return this.$store.state.categories;
  }

  get currentCategoryId(): number {
    return this.$store.state.currentCategoryId;
  }

  set currentCategoryId(val: number) {
    this.$store.commit(MutationTypes.SET_CURR_CATEGORY_ID, val);
  }

  get searchKeyword(): string {
    return this.$store.state.searchKeyword;
  }

  set searchKeyword(val: string) {
    this.$store.commit(MutationTypes.SET_KEYWORD, val);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.select-input {
  background-color: orange !important;
  color: white;
  font-size: 18px;
  border: solid 1px white;
  padding: 5px;
  width: 250px;
  text-transform: capitalize;
  border-radius: 3px;
}
.text-input {
  width: 250px;
  height: 40px;
  font-size: 17px;
  border-radius: 3px;
}

.text-input:focus {
  outline: none !important;
  border: 1px solid white;
  box-shadow: 0 0 10px white;
}

.bar-container {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 800px) {
  .bar-container {
    display: flex;
    flex-direction: column;
  }
  .select-input {
    width: 300px;
  }
  .text-input {
    width: 300px;
  }
}

.select-input:focus {
  border-style: inset;
  outline-color: orange;
}
</style>
