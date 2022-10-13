function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    // fill in the rest
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
  };

  // make request to server to get the data
  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    // add the data the server returns to the document
    // (you can add it to the end of the div with ID "profiles")
    .then((responseJson) => {
      const message = `<li>${responseJson.fullname} the ${responseJson.occupation} is ${responseJson.age} </li>`;
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', message)
    });
};

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
