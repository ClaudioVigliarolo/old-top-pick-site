<template>
  <div class="container">
    <div class="foot-container">
      <div class="foot-item-contacts">
        <h4 class="foot-item-header">Contacts:</h4>
        <dev class="foot-item-content-title">
          Email:
          <span class="foot-item-content-value"> top-pick@mail.com </span>
        </dev>
        <dev class="foot-item-content-title">
          Developer:
          <span class="foot-item-content-value">
            claudio.vigliarolo@techie.com
          </span>
        </dev>
        <dev class="foot-item-content-title line-container">
          Follow us on Instagram:
          <a-icon
            type="instagram"
            style="color: white; cursor: pointer"
            onclick=" window.open('https://www.instagram.com/topick.community/','_blank')"
          />
        </dev>
      </div>
      <div class="foot-item-section">
        <h4 class="foot-item-header">Sections:</h4>
      </div>
      <div class="foot-item-info">
        <h4 class="foot-item-header">General Informations:</h4>
        <dev class="foot-item-info-text">
          Top Pick is a company designed for helping people find great topics
        </dev>
        <dev class="foot-item-info-text">
          &copy; Copyright {{ new Date().getFullYear() }}, TopPick Company
        </dev>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {}
</script>

<style scoped>
.container {
  height: 300px;
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
.foot-container {
  display: grid;
  background-color: rgba(189, 124, 3, 0.15);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  width: 80%;
}

.foot-item-header {
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
}
.foot-item-content-title {
  color: white;
  text-align: left;
}
.foot-item-content-value {
  color: white;
  font-style: italic;
}

.foot-item-info-text {
  color: white;
  text-align: center;
}

.foot-item-contacts {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.foot-item-section {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.line-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
}

.foot-item-info {
  grid-row: 2;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
