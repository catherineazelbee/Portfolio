// Function to check if an element is halfway in the viewport
function isHalfwayInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const pageHeight = document.body.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    return (scrollTop + windowHeight / 2 >= rect.top + scrollTop) && (scrollTop + windowHeight / 2 <= rect.bottom + scrollTop);
  }
  
  // Function to handle scroll event
  function handleScroll() {
    fadeElements.forEach(element => {
      if (isHalfwayInViewport(element)) {
        element.classList.add('fade-in-active');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check when the page loads
  handleScroll();  