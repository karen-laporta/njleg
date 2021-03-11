const closeOpenElements = (classToToggle) => {
  let classToQuery = '.' + classToToggle;
  //let elementsToClose = document.querySelectorAll(`.${classToToggle}`);
  let elementsToClose = document.querySelectorAll(classToQuery);

  for (let i = 0; i < elementsToClose.length; i++) {
    elementsToClose[i].classList.toggle(classToToggle);
  }
};

const toggleClickedElAndTarget = (thisEl, classToToggle) => {
  thisEl.classList.toggle(classToToggle);
  document.getElementById(thisEl.dataset.toToggle).classList.toggle(classToToggle);
};

const setClickFunction = (clickableEl, classToToggle) => {
  clickableEl.addEventListener("click", function() {
    if (this.classList.contains(classToToggle)) {
      toggleClickedElAndTarget(this, classToToggle);
    } else {
      closeOpenElements(classToToggle);
      toggleClickedElAndTarget(this, classToToggle);
    }
  });
};

const setSingleTogglerClicks = (selectorId, toggleClass) => {
  const clickableEmergencyBannerEl = document.getElementById(selectorId);
  setClickFunction(clickableEmergencyBannerEl, toggleClass);
};

const setMultiTogglerClicks = (selectorClass, toggleClass) => {
  const clickableElements = document.querySelectorAll(selectorClass);

  for (let i = 0; i < clickableElements.length; i++) {
    setClickFunction(clickableElements[i], toggleClass);
  }
};

const setupSelectLinkDropdownGO = (selectDropdown, selectDropdownButton) => {
  const selectDropdownEl = document.getElementById(selectDropdown);
  const selectDropdownButtonEl = document.getElementById(selectDropdownButton);

  selectDropdownButtonEl.addEventListener("click", function() {
    if (selectDropdownEl.value != "Select a Newspaper"){
      window.open(selectDropdownEl.value, "_blank");
    };
    if (selectDropdownEl.value != "Select a Committee"){
      selectDropdownEl.value.style.display = "block";
    };
  });
};

const init = () => {
  setSingleTogglerClicks("emergency__close", "emergency__closed");
  setSingleTogglerClicks("mainNav__mobileToggleButton", "mobileNavActive");
  setMultiTogglerClicks(".mainNav__toggler", "mobileOpen");
  setMultiTogglerClicks(".footer__toggler", "mobileOpen");
  setupSelectLinkDropdownGO("newsSelect", "newsSelectButton");
  setupSelectLinkDropdownGO("assemblyCommittee", "committeeOpen");
};

document.addEventListener("DOMContentLoaded", function(event) { 
  init();
});
