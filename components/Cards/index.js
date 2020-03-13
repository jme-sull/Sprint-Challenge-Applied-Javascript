// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    //console.log(response);



    response.data.articles.javascript.forEach(item => 
        document.querySelector('.cards-container').append(createCard(item)));

    response.data.articles.bootstrap.forEach(item =>
        document.querySelector('.cards-container').append(createCard(item)));

    response.data.articles.technology.forEach(item =>
        document.querySelector('.cards-container').append(createCard(item)));
    
    response.data.articles.jquery.forEach(item =>
        document.querySelector('.cards-container').append(createCard(item)));

    response.data.articles.node.forEach(item =>
        document.querySelector('.cards-container').append(createCard(item)));
    
    })

    .catch(error => {
        console.log(`The data was not returned`, error);
    })


    



function createCard(item){
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImgCont = document.createElement ('div');
    const cardImg = document.createElement('img');
    const cardAuthorSpan = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgCont.classList.add('img-container');
    
    cardHeadline.textContent = item.headline; 
    cardImg.setAttribute('src', item.authorPhoto); 
    cardAuthorSpan.textContent = item.authorName;

    card.append(cardHeadline);
    card.append(cardAuthor);
    cardAuthor.append(cardImgCont);
    cardImgCont.append(cardImg);
    cardAuthor.append(cardAuthorSpan);


    return card; 


}