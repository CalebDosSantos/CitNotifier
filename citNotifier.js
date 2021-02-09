(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;
document.body.style.border = "5px solid blue";
document.getElementById("user").style.border = "5px solid blue";

//document.getElementById("btnEntrar").click();

//*********************************************************************
document.getElementById("header-toolbar-access-system").click();

})();


