<script setup>
import { computed, ref, watch } from 'vue';

import { API } from './services';

const nameList = ref([])  /// contains all guest names & their table number
const name = ref("")  /// contains guest name to enter
const numberOfTables = ref(0);
const invalidName = ref(false)   /// regex controlled



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
  API.table.dispatchInTables(nameList,numberOfTables)
})


</script>

<template>
  <div>
    <h1>Le plan de table</h1>
    <div>
      <h2>Organiser les tables</h2>
      <label for="name">Nombre de tables : </label>
      <input v-model="numberOfTables" name="numberOfTables" type="number" min="1" max="100"/>
      <p v-if="numberOfTables<=1">Contrôle : il y a {{ numberOfTables }} table</p> 
      <p v-else>Contrôle : il y a {{ numberOfTables }} tables</p> 
    </div>
    <div class="add-guest-card">
      <h2>Ajouter un.e invité.e</h2>
      <form class="add-guest-form">
        <label for="name">Nom :</label>
        <input v-model="name" name="name" type="text" placeholder="Michel" />
        <button @click.prevent="addNameButtonHandler">Ajouter</button>
        <button @click.prevent="demoButtonHandler">Démo</button>
        <button @click.prevent="deleteAllButtonHandler">Tout effacer</button>
      </form>
      <p v-if="invalidName">Le nom rentré est invalide ou déjà dans la liste</p>
    </div>
    <div class="list">
      <div class="list_name" @click="deleteNameButtonHandler(item,nameList)" v-for="item in nameList" :key="item.id">
        {{ item.name }} dans la table {{ item.table }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .add-guest-card {
    padding: 0 0 2% 0;
  }

  .add-guest-form {
    display: flex;
    justify-content: center;
    gap: 2%;
  }

  .add-guest-form > * {
    flex-shrink: 0;
    height: 50px;
    align-content: center;
  }

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
