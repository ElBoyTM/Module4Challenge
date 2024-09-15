// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const formArray = readLocalStorage();

document.querySelector('#submission').addEventListener('submit', function (event) {
    event.preventDefault();

    const formSubmission = {
        username: document.getElementById('username').value.trim(),
        title: document.getElementById('title').value.trim(),
        content: document.getElementById('content').value.trim(),
    };

    if (!formSubmission.username || !formSubmission.title || !formSubmission.content) {
        document.querySelector('#error').textContent = "Please complete the form"
    } else {
        formArray.push(formSubmission);
        storeLocalStorage(formArray);
        window.location.href = "blog.html"
    }
});