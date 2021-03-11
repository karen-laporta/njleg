const showFullGlossary = (selectorId, classToToggle) => {
  const clickableEl = document.getElementById(selectorId);

  clickableEl.addEventListener("click", function() {
    if (this.classList.contains(classToToggle)) {
      return;
    } else {
      closeOpenElements(classToToggle);
      toggleClickedElAndTarget(this, classToToggle);
    }
  });
};

document.addEventListener("DOMContentLoaded", function(event) { 
  showFullGlossary("glossary__tab--All", "glossaryOpen");
  setMultiTogglerClicks(".glossary__toggler", "glossaryOpen");
});
