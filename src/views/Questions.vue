<template>
  <div class="container">
    <div class="content-container">
      <div class="header-container">
        <h1 class="questions-header">{{ topic.title }}</h1>
        <div class="questions-info">
          Source:
          <span class="questions-info-value">{{ topic.source }}</span>
        </div>
        <div class="questions-info">
          Level:
          <span
            class="questions-info-value"
            v-bind:style="{ color: getTopicLevelColor(topic.level) }"
            >{{ this.getTopicLevelLabel(topic.level) }}</span
          >
        </div>
        <div class="questions-info questions-info-related">
          <span style="margin-right: 5px"> Related:</span>
          <div
            class="related-topics"
            v-for="rel in topic.related"
            v-bind:key="rel.id"
            @click="goQuestions(rel.id)"
          >
            {{ rel.title }}
          </div>
        </div>
      </div>
      <div class="questions-container">
        <ul>
          <li
            class="question-item"
            v-for="question in questions"
            v-bind:key="question.id"
          >
            {{ question.title }}
          </li>
        </ul>
      </div>
      <div class="questions-footer">
        <div class="download-button" @click="downloadPDF()">Download PDF</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Question, Topic, TopicLevel } from "@/interfaces/interfaces";
import { getQuestionsByTopic, getTopic } from "@/utils/api";
import { Component, Vue, Watch } from "vue-property-decorator";
import SearchBar from "../components/SearchBar.vue";
import {
  getTopicLevelLabel,
  getTopicLevelColor,
  downloadPDF,
} from "../utils/utilts";
import SectionList from "../components/SectionList.vue";

@Component({
  components: {
    SectionList,
    SearchBar,
  },
})
export default class Questions extends Vue {
  private questions: Question[] = [];
  private topic: Topic = {
    id: -1,
    title: "",
  };

  getTopicLevelLabel(level: TopicLevel): string {
    return getTopicLevelLabel(level);
  }
  getTopicLevelColor(level: TopicLevel): string {
    return getTopicLevelColor(level);
  }

  goQuestions(id: number): void {
    const route = this.$router.resolve({
      path: this.$route.path,
      query: { id: id.toString() },
    });
    window.open(route.href);
  }

  async mounted(): Promise<void> {
    console.log("orarotiro", this.$route);
    if (this.$route.query.id) {
      const retrievedTopic = await getTopic(
        parseInt(this.$route.query.id as string)
      );

      if (retrievedTopic) {
        this.topic = retrievedTopic;
      }

      const retrievedQuestions = await getQuestionsByTopic(
        parseInt(this.$route.query.id as string)
      );
      if (retrievedQuestions) {
        this.questions = retrievedQuestions;
        console.log("thiii", this.questions);
      }
    }
  }

  downloadPDF(): void {
    downloadPDF(this.topic.title, this.questions);
  }
}
</script>

<style scoped>
.questions-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
}
.questions-header {
  text-align: left;
  color: orange;
  text-transform: capitalize;
  margin-bottom: 30px;
  font-size: 40px;
}

.header-container {
  margin-bottom: 30px;
}

.content-container {
  display: flex;
  background-color: white;
  width: 70%;
  padding: 5%;
  flex-direction: column;
}
.questions-info-related {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media only screen and (max-width: 1200px) {
  .content-container {
    width: 100%;
  }
}

.container {
  display: flex;
  justify-content: center;
}
.question-item {
  margin-bottom: 10px;
  text-align: left;
  font-size: 15px;
}

.questions-info {
  color: black;
  text-align: left;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 15px;
}

.questions-info-value {
  font-weight: 200;
}

.related-topics {
  color: orangered;
  text-transform: uppercase;
  text-decoration: underline;
  margin-right: 12px;
  font-size: 15px;
  cursor: pointer;
}

.questions-footer {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: start;
  flex-direction: column;
}
.download-button {
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: underline;
  color: black;
  text-align: left;
  font-size: 17px;
}
</style>
