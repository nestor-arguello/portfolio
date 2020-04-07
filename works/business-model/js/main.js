(function() {
  const glassesBoxes = document.querySelectorAll('.ribbons');
  const textBoxes = document.querySelectorAll('.text');
  const subtextBoxes = document.querySelectorAll('.subtext');
  const textBoxBg = document.querySelector('div.text-box');

  function showText(event) {
    const boxNumber = event.currentTarget.className.split('ribbon-')[1][0];
    const textBoxClass = `.text--${boxNumber}`;
    const actualTextBox = document.querySelector(textBoxClass);
    
    const subtextBoxClass = `.subtext--${boxNumber}`;
    const actualSubtextBox = document.querySelector(subtextBoxClass);


    if (!actualTextBox.classList.contains("active")) {
      actualTextBox.classList.add("active");
      actualSubtextBox.classList.add("active");
      textBoxBg.classList.add('hide');
      
    }
  }

  function hideText(event) {
    console.log(event.target);
    textBoxBg.classList.remove('hide');
    textBoxes.forEach(box => {
      box.classList.remove('active');
    });
    subtextBoxes.forEach(box => {
      box.classList.remove('active');
    });
  }

  glassesBoxes.forEach(box => {
    box.addEventListener('mouseover', showText);
    box.addEventListener('mouseout', hideText);
  });
  
})();