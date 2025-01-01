function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
  }
  
  function addClassToVisibleElements() {
    var aosElements = document.querySelectorAll(".aos");
    aosElements.forEach(function (aosElement) {
      if (!isElementInViewport(aosElement)) aosElement.classList.add("ed");
      else aosElement.classList.remove("ed");
    });
  }
  
  document.addEventListener("scroll", addClassToVisibleElements);
  addClassToVisibleElements();
  