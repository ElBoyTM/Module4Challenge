// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
readLocalStorage.addEventListener('click', function (event) {
    event.preventDefault();

    const formSubmission = {
        username: document.getElementById('username'),
        title: document.getElementById('title'),
        content: document.getElementById('content').trim(),
    };
});