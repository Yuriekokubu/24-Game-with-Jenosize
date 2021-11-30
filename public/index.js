const form = document.querySelector('.gameForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputNumber = form.number.value;

  const result = await fetch('/twentyfour/jenosize', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ data: inputNumber }),
  })
    .then((response) => response.json())
    .then(({ result, failed }) => {
      let text;

      if (failed) {
        text = failed;

        return alert(text);
      }
      if (result) text = 'YES';
      else {
        text = 'NO';
      }
      return alert(text);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
