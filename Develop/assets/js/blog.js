// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let blogArray = readLocalStorage();
const blogSpace = document.querySelector('main');

const noPosts = function() {
    const noPosts = document.createElement('h2');
    noPosts.textContent = "No posts to display";
    blogSpace.appendChild(noPosts);
};

if (blogArray.length == 0) {
    noPosts();
};