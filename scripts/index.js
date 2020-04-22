const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://yahoo.com"

];

const navLinks = document.createElement('ul');
const navContainer = document.querySelector('nav.js-link-container');

navContainer.appendChild(navLinks);

// ONE WAY
function createLink(address) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', address);
    link.textContent = address;
    listItem.appendChild(link);
    navLinks.appendChild(listItem);
}
addresses.forEach(createLink);

// ANOTHER WAY
// addresses.forEach(function (address) {
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.setAttribute('href', address);
//     link.textContent = address;
//     listItem.appendChild(link);
//     navLinks.appendChild(listItem);
// })
