const setMultiToCloseFunction = (clickableEl, classToToggle) => {
  clickableEl.addEventListener("click", function() {
    closeOpenElements(classToToggle);
  });
};

const setMultiToClose = (selectorClass, toggleClass) => {
  const clickableElements = document.querySelectorAll(selectorClass);

  for (let i = 0; i < clickableElements.length; i++) {
    setMultiToCloseFunction(clickableElements[i], toggleClass);
  }
};

document.addEventListener("DOMContentLoaded", function(event) { 
  setMultiTogglerClicks(".modalTrigger", "modalShowing");
  setMultiToClose(".modalCloser", "modalShowing");
});