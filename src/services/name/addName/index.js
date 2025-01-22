export default function addName (name,invalidName,nameList) {
    const nameRegex = /^[a-zA-ZÀ-Ÿ-]{2,20}$/;
  
    if (nameRegex.test(name.value)&&!nameList.value.some(item => item.name === name.value)) { // checks sets of characters and if name already in list
      invalidName.value = false
      nameList.value.push({"name": name.value, "table": 0})
    } else {
      invalidName.value = true
    }
    
  }