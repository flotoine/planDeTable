<script setup>
import { ref, watch } from 'vue';

import { API } from './services';

const nameList = ref([])
const name = ref("")
const numberOfTables = ref(0);
const invalidName = ref(false)



/////////////////////////// NAME API BUTTON HANDLERS

const deleteAllButtonHandler = () => {
  API.name.deleteAllNames(nameList)
}

const addNameButtonHandler = () => {
  API.name.addName(name,invalidName,nameList)
}

const deleteNameButtonHandler = (item) => {
  API.name.deleteName(item,nameList)
}

const demoButtonHandler = () => {
  API.name.useDemoNameList(nameList)
}

/////////////////////////////

watch(numberOfTables, (newNumberOfTables) => {
dispatchInTables ()
})

function dispatchInTables () {
  let counter = 1;
  for (let i = 0 ; i < nameList.value.length; i++) {
    nameList.value[i].table = counter;
    counter ++;
    if (counter > numberOfTables.value) { counter = 1 }
  }
}

</script>

<template>
  <div>
    <h1>Le plan de table</h1>
    <div>
      <button @click="demoButtonHandler">Démo</button>
      <button @click="deleteAllButtonHandler">Tout effacer</button>
    </div>
    <div>
      <h2>Organiser les tables</h2>
      <label for="name">Nombre de tables : </label>
      <input v-model="numberOfTables" name="numberOfTables" type="number" min="1" max="100"/>
      <p>Contrôle : il y a {{ numberOfTables }} tables</p>
    </div>
    <div>
      <h2>Ajouter un.e invité.e</h2>
      <label for="name">Nom : </label>
      <input v-model="name" name="name" type="text" placeholder="Michel" />
      <button @click="addNameButtonHandler">Ajouter</button>
      <p v-if="invalidName">Le nom rentré est invalide ou déjà dans la liste</p>
    </div>
    <br>
    <div class="list">
      <div class="list_name" @click="deleteNameButtonHandler(item,nameList)" v-for="item in nameList" :key="item.id">
        {{ item.name }} dans la table {{ item.table }}
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
