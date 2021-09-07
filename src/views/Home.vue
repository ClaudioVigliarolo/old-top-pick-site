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
import { Topic } from "@/interfaces/interfaces";
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "../components/SearchBar.vue";
import SectionList from "../components/SectionList.vue";
import Footer from "../components/Footer.vue";
@Component({
  components: {
    SectionList,
    SearchBar,
    Footer,
  },
})
export default class Home extends Vue {
  get topics(): Topic[] {
    return this.$store.state.topics;
  }
}
</script>
