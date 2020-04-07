function handlePager() {
  const quizContainers = document.querySelectorAll('.quiz__container');
  const reactionIconContainers = document.querySelectorAll('.reaction__icon-container');
  const changers = document.querySelectorAll('.control-btn');
  const prevBtn = document.querySelector('.control-btn--left');
  const nextBtn = document.querySelector('.control-btn--right');
  const length = quizContainers.length;
  const digitRight = document.querySelector('.digit--right');
  const digitLeft = document.querySelector('.digit--left');
  
  let actualPage = 1;

  digitRight.innerHTML = length;
  digitLeft.innerHTML = actualPage;

  function removeDisabled() {
    changers.forEach(btn => {
      btn.classList.remove('is-disabled');
    });
  }

  function matchPageSelected(actualPage, containers) {
    containers.forEach((container, index) => {
      container.classList.remove('is-active');
      if (index + 1 === actualPage) {
        container.classList.add('is-active');
      }
    });
  }

  function handleCounter(actualPage) {
    setTimeout(() => {
      digitLeft.innerHTML = actualPage;
      
    }, 50);
  }

  nextBtn.addEventListener('click', function(event) {
    if (
      !this.classList.contains('is-disabled') && 
      actualPage < length
    ) {
      actualPage++;
      matchPageSelected(actualPage, quizContainers);
      matchPageSelected(actualPage, reactionIconContainers);
      handleCounter(actualPage);
      if (actualPage === length) {
        this.classList.add('is-disabled');
      } else {
        removeDisabled();
      }
    }
  });

  prevBtn.addEventListener('click', function(event) {
    if (
      !this.classList.contains('is-disabled') && 
      actualPage > 0
    ) {
      actualPage--;
      matchPageSelected(actualPage, quizContainers);
      matchPageSelected(actualPage, reactionIconContainers);
      handleCounter(actualPage);
      if (actualPage === 1) {
        this.classList.add('is-disabled');
      } else {
        removeDisabled();
      }
    }
  });
}
