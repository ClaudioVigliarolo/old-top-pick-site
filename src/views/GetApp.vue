<template>
  <div class="container">
    <div class="content-container">
      <div class="header-container">
        <h1 class="header-text">
          TOP Pick is available for both App Store and Google Play. Download it
          now on your smartphone!
        </h1>
      </div>
      <div class="icons-container">
        <div class="icon-container">
          <img
            class="store-icon"
            alt="img"
            src="../assets/app-store.png"
            onclick=" window.open('https://apps.apple.com/it/app/top-pick-find-great-topics/id1571806777','_blank')"
          />
        </div>
        <div class="icon-container">
          <img
            class="store-icon"
            alt="img"
            src="../assets/google-play.png"
            onclick=" window.open('https://play.google.com/store/apps/details?id=com.topick','_blank')"
          />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class GetApp extends Vue {}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.content-container {
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
  align-items: center;
}
.header-text {
  color: white;
}

.icons-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.store-icon {
  width: 300px;
  margin-bottom: 50px;
  cursor: pointer;
}
</style>
