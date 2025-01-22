export default function dispatchInTables (nameList,numberOfTables) {
    let counter = 1;
    for (let i = 0 ; i < nameList.value.length; i++) {
      nameList.value[i].table = counter;
      counter ++;
      if (counter > numberOfTables.value) { counter = 1 }
    }
}