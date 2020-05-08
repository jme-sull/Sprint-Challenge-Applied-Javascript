// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

//axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    ////console.log(response)
//})

function createCard (articleInfo) {
    
    const { headline, authorPhoto, authorName } = articleInfo
    
    //create elements
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthorContainer = document.createElement('div')
    const cardImageContainer = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    //assemble

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthorContainer)
    cardAuthorContainer.appendChild(cardImageContainer)
    cardImageContainer.appendChild(cardImage)
    cardAuthorContainer.appendChild(cardAuthorName)

    //add class
    
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthorContainer.classList.add('author')
    cardImageContainer.classList.add('img-container')

    //add data 

    cardHeadline.textContent = headline
    cardImage.src = authorPhoto
    cardAuthorName.textContent = authorName

    

    return card
}


//


axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    const bootstrap = response.data.articles.bootstrap
    bootstrap.forEach(item => {
        document.querySelector('.cards-container').appendChild(createCard(item));
    })  

    const javascript = response.data.articles.javascript
    javascript.forEach(item => {
        document.querySelector('.cards-container').appendChild(createCard(item));
    }) 
    
    const jquery = response.data.articles.jquery
    jquery.forEach(item => {
        document.querySelector('.cards-container').appendChild(createCard(item));
    }) 

    const technology = response.data.articles.technology
    technology.forEach(item => {
        document.querySelector('.cards-container').appendChild(createCard(item));
    }) 

    const node = response.data.articles.node
    node.forEach(item => {
        document.querySelector('.cards-container').appendChild(createCard(item));
    }) 

    })
    




