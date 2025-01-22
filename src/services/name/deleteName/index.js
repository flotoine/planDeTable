export default function deleteName (name,nameList) {
    nameList.value = nameList.value.filter((nameToSearch) => name !== nameToSearch);
  }