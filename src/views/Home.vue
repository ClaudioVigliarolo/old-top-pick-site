<template>
  <div>
    <SearchBar />
    <SectionList
      v-for="item in $store.getters.displayedTopics"
      v-bind:key="item.title"
      :section="item"
    >
      {{ item.title }}
    </SectionList>
  </div>
</template>

<script lang="ts">
import { Category, Lang, Section, Topic } from "@/interfaces/interfaces";
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "../components/SearchBar.vue";
import SectionList from "../components/SectionList.vue";
import { ActionTypes, MutationTypes } from "@/store";
@Component({
  components: {
    SectionList,
    SearchBar,
  },
})
export default class Home extends Vue {
  get topics(): Topic[] {
    return this.$store.state.topics;
  }
}
</script>

/*
<div slot-scope="{ data }">
      <SearchBar />
      <SectionList v-for="item in data" v-bind:key="item.title" :section="item">
        {{ item.title }}
      </SectionList>
    </div>
*/
