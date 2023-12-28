const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
  });
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });

// set year
date.innerHTML = new Date().getFullYear();

 // LOGO SLIDER

  document.addEventListener('DOMContentLoaded', (event) => {
    const logos = document.querySelectorAll('.logo');
    let currentLogoIndex = 0;

    function slideNextLogo() {
        // Slide up the current logo
        logos[currentLogoIndex].classList.add('slide-up');
        
        // Determine the next logo index
        const nextLogoIndex = (currentLogoIndex + 1) % logos.length;

        // Set a timeout to reset the current logo and prepare the next one
        setTimeout(() => {
            // Reset the current logo to its initial state
            logos[currentLogoIndex].classList.remove('slide-up');
            logos[currentLogoIndex].style.transform = 'translateY(100%)';
            logos[currentLogoIndex].style.opacity = '0';

            // Prepare the next logo to slide up
            logos[nextLogoIndex].classList.add('ready');
            logos[nextLogoIndex].style.opacity = '1';
            logos[nextLogoIndex].style.transform = 'translateY(0)';

            // Update the index for the next logo
            currentLogoIndex = nextLogoIndex;
        }, 500); // Timeout duration should match the CSS transition duration
    }

    // Start the sequence
    setInterval(slideNextLogo, 1000); // Interval should be greater than the CSS transition duration
});



// ======================  MOST POPULAR  ===============================


document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  let slidesToShow = 3; // Default number of slides to show
  const sliderContainer = document.querySelector('.slider-container');
  const slider = document.querySelector('.cards-slider');
  const slides = slider.querySelectorAll('.card');
  let totalSets; // Will be set in the setSliderWidths function

  // Function to set the widths for the slider and cards
  function setSliderWidths() {
    // Adjust slidesToShow based on the screen width
    slidesToShow = window.innerWidth <= 768 ? 2 : 3;
    totalSets = Math.ceil(slides.length / slidesToShow);

    const sliderWidth = sliderContainer.clientWidth;
    const slideWidth = sliderWidth / slidesToShow;
    slider.style.width = `${slideWidth * slides.length}px`;
    slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });

    // Update the slider position because the number of slidesToShow might have changed
    updateSlidePosition();
  }

  // Function to update the position of the slider
  function updateSlidePosition() {
    const shiftWidth = sliderContainer.clientWidth / slidesToShow * currentSlide;
    slider.style.transform = `translateX(-${shiftWidth}px)`;
  }

  // Function to navigate to the previous set of slides
  function slideLeft() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSets - 1;
    updateSlidePosition();
  }

  // Function to navigate to the next set of slides
  function slideRight() {
    currentSlide = (currentSlide < totalSets - 1) ? currentSlide + 1 : 0;
    updateSlidePosition();
  }

  // Attach event listeners to the buttons
  document.querySelector('.left-btn').addEventListener('click', slideLeft);
  document.querySelector('.right-btn').addEventListener('click', slideRight);

  // Set initial widths and update on window resize
  setSliderWidths();
  window.addEventListener('resize', setSliderWidths);
});





//========================= TRENDING NOW =============================

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  let slidesToShow = 3; // Default number of slides to show
  const sliderContainer = document.querySelector('.trending-container');
  const slider = document.querySelector('.trending-slider');
  const slides = slider.querySelectorAll('.card');
  let totalSets; // Will be set in the setSliderWidths function

  // Function to set the widths for the slider and cards
  function setSliderWidths() {
    // Adjust slidesToShow based on the screen width
    slidesToShow = window.innerWidth <= 768 ? 2 : 3;
    totalSets = Math.ceil(slides.length / slidesToShow);

    const sliderWidth = sliderContainer.clientWidth; // Width of the slider container
    const slideWidth = sliderWidth / slidesToShow; // Width of each individual slide
    slider.style.width = `${slideWidth * slides.length}px`; // Total width of the slider
    slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`; // Width for each slide
    });

    // Update the slider position because the number of slidesToShow might have changed
    updateSlidePosition();
  }

  // Function to update the position of the slider
  function updateSlidePosition() {
    const shiftWidth = sliderContainer.clientWidth / slidesToShow * currentSlide;
    slider.style.transform = `translateX(-${shiftWidth}px)`;
  }

  // Function to navigate to the previous set of slides
  function slideLeft() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSets - 1;
    updateSlidePosition();
  }

  // Function to navigate to the next set of slides
  function slideRight() {
    currentSlide = (currentSlide < totalSets - 1) ? currentSlide + 1 : 0;
    updateSlidePosition();
  }

  // Attach event listeners to the buttons
  document.querySelector('.trending-container .left-btn').addEventListener('click', slideLeft);
  document.querySelector('.trending-container .right-btn').addEventListener('click', slideRight);

  // Set initial widths and update on window resize
  setSliderWidths();
  window.addEventListener('resize', setSliderWidths);
});






