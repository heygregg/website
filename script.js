document.addEventListener('DOMContentLoaded', () => { /*aspetto che tutta la pagina HTML sia caricata prima di eseguire il codice; documen è la pagina web, addEventListener ascolta un evento e DOMContentLoader è l'evento che scatta quando la pagina è pronta */
  const btn = document.querySelector('.btn'); /* cerca nella pagina un elemento con classe .btn e querySelector prende il primo elemento che trova */

  btn.addEventListener('click', (e) => { /*evento del click, (e) sono le informazioni sul click */
    e.preventDefault(); /* blocca il comportamento normale */

    console.log('Click Spotify'); /* scrive un messaggio nella console del browser */

    /* redirect al link in nuova scheda */come
    window.open(
      'https://open.spotify.com/artist/1osX1AI2YS7ZYZNkkry7iJ?si=nlDXldYaQV-tkPOSzMfUWA',
      '_blank'
    );
  });
});
