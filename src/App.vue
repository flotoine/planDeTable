<script setup>
import { ref } from 'vue';
  const nameList = ref([])
  const name = ref("")
  const numberOfTables = ref(0);
  const chairsPerTable = ref(0)

  const invalidName = ref(false)
  demoNameList()
  function demoNameList () {
    nameList.value = ["Léo", "Chloé", "Hugo", "Emma", "Gabriel", "Léa", "Lucas", "Camille", "Théo", "Jade", "Maxime", "Clara", "Nathan", "Sarah", "Louis", "Zoé", "Éloïse", "Martin", "Alice", "Arthur", "Manon", "Raphaël", "Louise", "Pierre", "Émilie", "Samuel", "Anaïs", "Adrien", "Margaux", "Thomas", "Inès", "Valentin", "Marion", "Lucien", "Lila", "Augustin", "Solène", "Baptiste", "César", "Léon", "Noémie", "Clara", "Éléonore", "Sacha", "Salomé", "Victor", "Myriam", "Ézéchiel", "Louna", "Léandro", "Mélissa", "Naïma", "Idriss", "Amira"]
  }

  function deleteAll() {
    nameList.value = []
  }
  
  function addName () {
    const nameRegex = /^[a-zA-ZÀ-Ÿ-]{2,20}$/;

    if (nameRegex.test(name.value)&&!nameList.value.includes(name._value)) { // checks sets of characters and if name already in list
      invalidName.value = false
      nameList.value.push(name.value)
    } else {
      invalidName.value = true
    }
  }

  function deleteName (name) {
    nameList.value = nameList.value.filter((nameToSearch) => name !== nameToSearch);
  }

</script>

<template>
  <div>
    <h1>Le plan de table</h1>
    <div>
      <button @click="demoNameList">Démo</button>
      <button @click="deleteAll">Tout effacer</button>
    </div>
    <div>
      <h2>Organiser les tables</h2>
      <label for="name">Nombre de tables : </label>
      <input v-model="numberOfTables" name="numberOfTables" type="number" min="1" max="100"/>
      <label for="name">Chaises par tables : </label>
      <input v-model="chairsPerTable" name="chairsPerTable" type="number" min="1" max="100"/>
      <p>Contrôle : il y a {{ numberOfTables }} tables de {{ chairsPerTable }} chaises</p>
    </div>
    <div>
      <h2>Ajouter un.e invité.e</h2>
      <label for="name">Nom : </label>
      <input v-model="name" name="name" type="text" placeholder="Michel" />
      <button @click="addName">Ajouter</button>
      <p v-if="invalidName">Le nom rentré est invalide ou déjà dans la liste</p>
    </div>
    <div class="list">
      <div class="list_name" @click="deleteName(name)" v-for="name in nameList" :key="name.id">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }

  .list_name {
    padding: 2px;
    border: solid 1px;
  }

</style>
