// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const darkToggle = document.getElementById('toggle');

if (localStorage.getItem('darkMode') == null) {
  localStorage.setItem('darkMode', 'false');
};

const switchMode = function() {
  if (localStorage.getItem('darkMode') === 'true') {
    localStorage.setItem('darkMode', 'false');
    document.getElementsByTagName('body')[0].classList.add('light');
    document.getElementsByTagName('body')[0].classList.remove('dark');
  } else {
    localStorage.setItem('darkMode', 'true');
    document.getElementsByTagName('body')[0].classList.add('dark');
    document.getElementsByTagName('body')[0].classList.remove('light');
  };
};
switchMode();

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function() {
  const blogSubmission = JSON.parse(localStorage.getItem('formSubmission'));
  if (blogSubmission == null) {
    return [];
  } else {
    return blogSubmission;
  };
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const formArray = readLocalStorage();
const storeLocalStorage = function() {
  const blogSubmission = readLocalStorage();
  blogSubmission.push(formArray);
  localStorage.setItem('formSubmission', JSON.stringify(formArray));
};
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};