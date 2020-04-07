function handleSelectBox(event) {
  const boxes = document.querySelectorAll('.quiz__answer');
  
  function addNonClickable(quizNumber) {
    const actualBoxesClass = `.quiz__answer--${quizNumber}`;
    const actualBoxes = document.querySelectorAll(actualBoxesClass);
    actualBoxes.forEach(box => {
      box.classList.add('non-clickable')
    })
  }

  function showIcon(type, quizNumber) {
    const iconContainersClass = `.reaction__icon-container--${quizNumber} .reaction__icon`;
    const actualIconsContainers = document.querySelectorAll(iconContainersClass);
    const iconClass = {
      correct: 'reaction__icon--correct',
      wrong: 'reaction__icon--wrong'
    }

    actualIconsContainers.forEach(icon => {
      icon.classList.remove("is-active");
      if (icon.classList.contains(iconClass[type])) {
        icon.classList.add("is-active");
      }
    });
  }

  function changeReactionIcon(status, quizNumber) {
    if (status) {
      addNonClickable(quizNumber);
      showIcon('correct', quizNumber);
    } else {
      showIcon('wrong', quizNumber);
    }
  }

  function addReactionAnimation(quizNumber, reaction, reactionIcon) {
    const animationClass = {
      wrong: 'wrong-animation',
      correct: 'correct-animation'
    }

    reactionIcon.classList.add(animationClass[reaction]);
    reactionIcon.addEventListener('animationend', function (event) {
      this.classList.remove(animationClass[reaction]);
    });
  }

  function clickNextBtn() {
    const nextBtn = document.querySelector('.control-btn--right');
    setTimeout(() => {
      nextBtn.click();
    }, 2500);
  }

  boxes.forEach(function (box) {
    box.addEventListener('mousedown', function (event) {
      if (!box.classList.contains('non-clickable')) {
        const quizNumber = box.className.split('quiz__answer--')[1][0];
        const wrongIconClass = `.reaction__icon-container--${quizNumber} .reaction__icon--wrong`;
        const actualWrongIcon = document.querySelector(wrongIconClass);
        const correctIconClass = `.reaction__icon-container--${quizNumber} .reaction__icon--correct`;
        const actualCorrectIcon = document.querySelector(correctIconClass);

        
        if (box.classList.contains('is-true')) {
          this.classList.add('true-color');
          changeReactionIcon(true, quizNumber);
          addReactionAnimation(quizNumber, "correct", actualCorrectIcon);
          actualCorrectIcon.classList.add('shine-animation');
          clickNextBtn();
        } else {
          this.classList.add("false-color");
          changeReactionIcon(false, quizNumber);
          addReactionAnimation(quizNumber, 'wrong', actualWrongIcon);
        }
      }
    });
  });

}