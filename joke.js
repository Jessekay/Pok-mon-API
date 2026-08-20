const jokeBtn = document.getElementById('jokeBtn');
const statusEl = document.getElementById('status');
const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');

jokeBtn.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    jokeBtn.disabled = true;
    statusEl.textContent = 'Loading...';
    setupEl.textContent = '';
    punchlineEl.textContent = '';

    const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    if (!response.ok) {
      throw new Error('Could not fetch a joke');
    }

    const data = await response.json();

    setupEl.textContent = data.setup;
    punchlineEl.textContent = data.punchline;
    statusEl.textContent = '';

  } catch (error) {
    console.error(error);
    statusEl.textContent = 'Something went wrong. Please try again.';
  } finally {
    jokeBtn.disabled = false;
  }
}