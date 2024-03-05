document.querySelectorAll('.hexagonos img').forEach(img => {
    img.addEventListener('click', function() {
      this.src = 'hexagono-novo.png';
    });
  });
  