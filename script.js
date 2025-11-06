// Get the hero image element
const heroImg = document.querySelector(".hero-img");

// Define the list of image URLs to cycle through
const heroImages = [
  "Media/wjeffersonfront-1920x1000-1.png",
  "Media/wjeffersoninside1-scaled (1).jpg",
  "Media/wjeffersoninside1-scaled.jpg"
];

// Time between rotations (in milliseconds)
const intervalTime = 4000;

let currentIndex = 0;

function changeHeroImage() {
  // Update the src attribute
  heroImg.src = heroImages[currentIndex];

  // Go to next image (loop back to start)
  currentIndex = (currentIndex + 1) % heroImages.length;
}

// Initialize the first image
changeHeroImage();

// Start the automatic rotation
setInterval(changeHeroImage, intervalTime);
