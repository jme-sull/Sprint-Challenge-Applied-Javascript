// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    const headerSpan = document.createElement('span');
    const headerTitle = document.createElement('h2');
    const headerWeather = document.createElement('span');

    header.classList.add('header');
    headerSpan.classList.add('date');
    headerWeather.classList.add('temp');

    header.append(headerSpan);
    header.append(headerTitle);
    header.append(headerWeather);

    return header;
}

document.querySelector('.header-container').append(Header());


