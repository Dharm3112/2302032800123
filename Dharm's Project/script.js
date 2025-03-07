// Basic interactivity example
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded. You can add your interactive code here.");
    
    // Example: Animate the main heading on each slide
    const mainHeading = document.querySelector('h2');
    if (mainHeading) {
      mainHeading.style.opacity = 0;
      setTimeout(() => {
        mainHeading.style.transition = "opacity 1.5s ease-in";
        mainHeading.style.opacity = 1;
      }, 300);
    }
  
    // Additional logic: e.g. show/hide elements, event listeners, etc.
  });
  