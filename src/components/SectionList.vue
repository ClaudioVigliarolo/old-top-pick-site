<template>
  <div class="container">
    <div class="content-container">
      <h1 class="section-header">{{ section.title }}</h1>
      <div class="grid-container">
        <div class="grid" v-if="section">
          <div
            v-bind:key="topic.id"
            v-for="topic in section.data"
            class="grid-item"
            @click="goQuestions(topic.id)"
          >
            {{ topic.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Section } from "@/interfaces/interfaces";
import router from "@/router";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SectionList extends Vue {
  @Prop() section!: Section;
  goQuestions(id: number): void {
    router.push({
      path: this.$route.fullPath + "/questions",
      query: { id: id.toString() },
    });
  }
}
</script>

<style scoped>
.content-container {
  display: flex;
  background-color: white;
  width: 70%;
  padding: 3%;
  padding-top: 2%;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 5px;
  min-height: 400px;
}

.container {
  display: flex;
  justify-content: center;
}

.grid-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section-header {
  text-align: left;
  color: orange;
  font-size: 40px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  width: 100%;
}

.grid-item {
  height: 50px;
  max-width: 280px;
  min-width: 200px;
  font-size: 30px;
  border-bottom: solid 4px orange;
  border-image: linear-gradient(to left, orange, orange);
  border-image-slice: 1;
  cursor: pointer;
  transform: scale(1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease-in-out 0.2s;
}

.grid-item:hover {
  transform: scale(1.2);
  transition: all 0.3s ease-in-out 0.1s;
}

@media only screen and (max-width: 1200px) {
  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
