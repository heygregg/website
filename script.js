document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', (e) => {
    e.preventDefault(); // blocca il link #

    console.log('Click Spotify'); // tracking base

    // redirect al link in nuova scheda
    window.open(
      'https://www.linkedin.com/in/gregorio-clini-38949214b/',
      '_blank'
    );
  });
});
