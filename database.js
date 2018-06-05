const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    
return JSON.parse(databaseString)
}

let allTheStuff = loadDatabase("HomeInventory");
 
console.log("This is the stuff", allTheStuff);



// THE NEXT PART

//     const HomeInventoryDatabase = loadDatabase("HomeInventory")

//     const myStuffArticle = document.querySelector("#myStuff")

// const homeInventoryFragment = document.createDocumentFragment()

// for (let tableForm in HomeInventoryDatabase) {
//   const invTable = HomeInventoryDatabase[tableForm]

//   invTable.forEach(item => {
//     const sectionElement = document.createElement("section")
//     for (let key in item) {
//       const paragraphElement = document.createElement("p")
//       paragraphElement.textContent = `${key}: ${item[key]}`
//       sectionElement.appendChild(paragraphElement)
//     }
//     homeInventoryFragment.appendChild(sectionElement)
//   })
// } 

// myStuffArticle.appendChild(homeInventoryFragment)

// ADVANCED CHALLENGE
const HomeInventoryDatabase = loadDatabase("HomeInventory")

const myStuffArticle = document.querySelector("#myStuff")

const homeInventoryFragment = document.createDocumentFragment()


const populateDomForDataSet = (dataSet) => {
    const invTable = HomeInventoryDatabase[dataSet]
    invTable.forEach(item => {
      const sectionElement = document.createElement("section")
      for (let key in item) {
        const paragraphElement = document.createElement("p")
        paragraphElement.textContent = `${key}: ${item[key]}`
        sectionElement.appendChild(paragraphElement)
      }
      homeInventoryFragment.appendChild(sectionElement)
    })
   
  }
  
  populateDomForDataSet("crafts")
  
  
  
  myStuffArticle.appendChild(homeInventoryFragment)