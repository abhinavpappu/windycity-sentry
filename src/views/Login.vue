<template>
  <div>
    <div class="card" id="firebase-auth">
      
    </div>
  </div>
</template>

<script>
import { authUi, uiConfig } from '../firebase.js';

export default {
  created() {
    // db.collection("users").add({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
    authUi.start('#firebase-auth', uiConfig);
  }
}
</script>

<style lang="sass" scoped>
@import '~firebaseui/dist/firebaseui.css'

.thing
  height: 500px

</style>

