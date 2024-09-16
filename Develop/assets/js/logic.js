// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const darkToggle = document.getElementById('darkMode');

if (localStorage.getItem('darkMode') == null) {
  localStorage.setItem('darkMode', 'false');
};

const toggleStatus = function() {
  if (localStorage.getItem('darkMode') === 'true') {
    darkToggle.checked = true;
    document.getElementsByTagName('body')[0].classList.toggle('dark');
  } else {
    darkToggle.checked = false;
    document.getElementsByTagName('body')[0].classList.toggle('light');
  };
};
toggleStatus();

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
const storeLocalStorage = function(formArray) {
  localStorage.setItem('formSubmission', JSON.stringify(formArray));
};
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};