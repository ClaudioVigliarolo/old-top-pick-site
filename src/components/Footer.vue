<template>
  <div class="container">
    <div class="foot-container">
      <div class="foot-item-contacts">
        <h4 class="footer-header">Contacts:</h4>
        <div class="footer-description text-contact">
          Email:
          <span class="footer-description font-italic">
            top-pick@mail.com
          </span>
        </div>
        <div class="footer-description text-contact">
          Developer:
          <span class="footer-description font-italic">
            claudio.vigliarolo@techie.com
          </span>
        </div>
        <div class="footer-description instagram-container text-contact">
          Follow us on Instagram:
          <a-icon
            type="instagram"
            class="icon-instagram"
            onclick=" window.open('https://www.instagram.com/topick.community/','_blank')"
          />
        </div>
      </div>
      <div class="foot-item-section">
        <h4 class="footer-header">Sections:</h4>
        <a class="footer-description" :href="getAppPath()"> Get The App </a>
        <a
          class="footer-description"
          onclick="
            window.open(
              'https://www.paypal.com/donate?hosted_button_id=F5CKWMKTQJE9G',
            )
          "
        >
          Support us
        </a>
      </div>
      <div class="foot-item-info">
        <h4 class="footer-header">General Informations:</h4>
        <div class="footer-description text-center">
          Top Pick is a company designed for helping people find great topics
        </div>
        <div class="footer-description text-center">
          &copy; Copyright {{ new Date().getFullYear() }}, TopPick Company
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { SITE_HOSTNAME } from "@/constants/constants";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {
  getAppPath(): string {
    return SITE_HOSTNAME + "/" + this.$store.state.currentLanguage + "/get-app";
  }
}
</script>

<style scoped>
.footer-header {
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}
.footer-description {
  color: white;
  text-align: left;
}

.font-italic {
  font-style: italic;
}

.icon-instagram {
  color: white;
  cursor: pointer;
}

.text-center {
  text-align: center;
}

.container {
  height: 400px;
  display: flex;
  margin-top: 200px;
  padding-bottom: 50px;
  justify-content: center;
}
.foot-container {
  display: grid;
  background-color: rgba(189, 124, 3, 0.2);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-radius: 5px;
  grid-gap: 30px;
  padding: 20px;
  width: 80%;
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
  max-width: 400px;
}

.instagram-container {
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

.text-contact {
  text-align: left !important;
}

@media only screen and (max-width: 600px) {
  .foot-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }

  .container {
    height: 500px;
    display: flex;
    margin-top: 200px;
    padding-bottom: 50px;
    justify-content: center;
  }

  .footer-description {
    text-align: center;
  }

  .text-contact {
    margin-left: 20px;
  }
}
</style>
