document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const messagesContainer = document.getElementById('messages');
  const lyricsContainer = document.getElementById('lyrics');
  const progressBar = document.getElementById('progress');
  const volumeControl = document.getElementById('volume');
  const playPauseBtn = document.getElementById('playPause');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  const messagesArray = [
      '¡La canción está comenzando!',
      '¡Vamos a disfrutar del ritmo!',
      '¡Relájate y siente el flow!',
      'Cada nota tiene un propósito.',
      'Tu música, tu momento, tu historia.'
  ];

  const lyricsArray = [
      'Letra 1 de la canción...',
      'Letra 2 de la canción...',
      'Letra 3 de la canción...',
      'Letra 4 de la canción...',
      'Letra 5 de la canción...'
  ];

  let messageIndex = 0;
  let lyricIndex = 0;

  // Mostrar mensajes en el contenedor
  function showMessage() {
      const message = document.createElement('p');
      message.classList.add('message');
      message.innerText = messagesArray[messageIndex];
      messagesContainer.appendChild(message);

      messageIndex = (messageIndex + 1) % messagesArray.length;
      setTimeout(() => message.remove(), 4500);
  }

  // Mostrar letras de la canción
  function showLyrics() {
      const lyric = document.createElement('p');
      lyric.classList.add('lyric');
      lyric.innerText = lyricsArray[lyricIndex];
      lyricsContainer.appendChild(lyric);

      lyricIndex = (lyricIndex + 1) % lyricsArray.length;
      setTimeout(() => lyric.remove(), 4000);
  }

  // Actualizar barra de progreso
  function updateProgressBar() {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
  }

  // Manejar la reproducción/pausa
  playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          playPauseBtn.innerText = 'Pausa';
      } else {
          audio.pause();
          playPauseBtn.innerText = 'Reproducir';
      }
  });

  // Control de volumen
  volumeControl.addEventListener('input', (event) => {
      audio.volume = event.target.value;
  });

  // Intervalos para mensajes y letras
  audio.addEventListener('play', () => {
      setInterval(showMessage, 5000);
      setInterval(showLyrics, 7000);
  });

  // Actualizar la barra de progreso mientras se reproduce
  setInterval(updateProgressBar, 100);

  // Funcionalidad de botones anteriores y siguientes (se puede agregar funcionalidad aquí)

});
