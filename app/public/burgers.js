// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }


// UPDATE
const changeDevourBtns = document.querySelectorAll('.devour-burger');

// Set up the event listener for the create button
if (changeDevourBtns) {
    changeDevourBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
    console.log('test');
    // Grabs the id of the element that goes by the name, "id"
    const id = e.target.getAttribute('data-id');
    const newDevoured = e.target.getAttribute('data-newDevoured');

    console.log(id)

    const newDevouredState = {
        devoured: newDevoured,
    };

    fetch(`/api/burgers/${id}`, {
        method: 'PUT',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newDevouredState),
    }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
        console.log(`changed devoured to: ${newDevoured}`);
        // location.reload('/');
        } else {
        alert('something went wrong!');
        }
    }).catch(err => {
        console.log(err)
    });
    });
});
}    

const createBurgerBtn = document.getElementById('create-form');

if (createBurgerBtn) {
  createBurgerBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    // Grabs the value of the textarea that goes by the name, "quote"
    const newBurger = {
      name: document.getElementById('burger').value.trim(),
      devoured: false,
    };

    // Send POST request to create a new quote
    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      // Make sure to serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      document.getElementById('burger').value = '';

      // Reload the page so the user can see the new quote
      console.log('Created a new burger!');
    //   location.reload();
    });
  });
}
});