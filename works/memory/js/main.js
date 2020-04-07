(function() {
  function handleFlips() {
    const flipContainers = document.querySelectorAll('.flip-container');
  
    function handleClick(event) {
      const { currentTarget: target } = event;
      
      if (target.classList.contains('flip')) {
        target.classList.remove('flip');
      } else {
        flipContainers.forEach(container => {
          container.classList.remove('flip');
        });
        target.classList.add('flip');
      }
    }
  
    flipContainers.forEach(function(container) {
      container.addEventListener('click', handleClick);
    });
  }

  function handleStepper() {
    const steps = document.querySelectorAll('.ball-box');
    const reviews = document.querySelectorAll('.review');

    function handleTransitionEnd(event) {
      const { currentTarget: target } = event;

      if (!target.classList.contains('active')) {
        // target.style.display = "none";
      }
    }
    
    function handleClick(event) {
      event.preventDefault();
      const { currentTarget: target } = event;

      const stepKeyClass = 'ball--';
      const reviewKeyClass = 'review--';

      const actualStepNum = target.className.split(stepKeyClass)[1];
      const reviewClassName = `.${reviewKeyClass}${actualStepNum}`
      const actualReview = document.querySelector(reviewClassName);

      if (target.classList.contains('active')) {
        return;
      } else {
        reviews.forEach(review => {
          review.classList.remove('active');
        });

        steps.forEach(step => {
          step.firstElementChild.classList.remove("active");
        });

        target.firstElementChild.classList.add('active');
        // actualReview.style.display = 'block'
        actualReview.classList.add('active');
      }
    }

    reviews.forEach(review => {
      review.addEventListener('transitionend', handleTransitionEnd)
    });
    
    steps.forEach(step => {
      step.addEventListener('click', handleClick)
    });
  }
  
  
  handleFlips();
  handleStepper();
})();
