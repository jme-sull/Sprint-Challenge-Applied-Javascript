// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

  
//Study Data
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    console.log(response)
})

//Create Tab
function createTab (topic) {
    //create
    tab = document.createElement('div')

    //add class
    tab.classList.add('tab')

    //add text from response
    tab.textContent = topic

    return tab
}

//Add data and append
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    const topicsArray = response.data.topics
    topicsArray.forEach(item => {
        const newTab = createTab(item)
        const entryPoint = document.querySelector('div.topics')
        entryPoint.appendChild(newTab)
    })
})

