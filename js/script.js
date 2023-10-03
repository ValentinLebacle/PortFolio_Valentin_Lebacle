function scrollToAnchor(anchorId, duration) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
      const targetOffset = targetElement.offsetTop;
      const startingY = window.pageYOffset;
      const diff = targetOffset - startingY;
      let start;

      // Calculer l'incrément de scroll en fonction de la durée
      const increment = diff / (duration / 15);  // On divise par 15 pour obtenir une fluidité raisonnable

      // Utiliser setInterval pour simuler le défilement progressif
      const scrollInterval = setInterval(function () {
        if (!start) start = Date.now();

        const elapsedTime = Date.now() - start;
        if (elapsedTime < duration) {
          window.scrollBy(0, increment);
        } else {
          window.scrollTo(0, targetOffset);
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  }