    // Define an array of image URLs and link URLs
    const imageUrls = [
      "../archive_assets/cover_scifi_ui.png",
      "../archive_assets/fractal1.png",
      "../archive_assets/Overview.png"
    ];

    const linkUrls = [
      "https://www.google.com/",
      "https://www.w3schools.com/",
      "hhttps://www.linkedin.com/feed/"
    ];

    // Define the fading time (in milliseconds)
    const fadeTime = 3000;

    // Create an empty array to hold the image elements
    const images = [];

    // Load the images
    for (let i = 0; i < imageUrls.length; i++) {
      const image = new Image();
      image.src = imageUrls[i];
      images.push(image);
    }

    // Listen for mouse movement
    document.addEventListener("mousemove", (event) => {
      // Create a new image element
      const image = images[Math.floor(Math.random() * images.length)];
      const newImage = document.createElement("img");
      newImage.src = image.src;
      newImage.style.left = event.clientX + "px";
      newImage.style.top = event.clientY + "px";

      // Add the image to the page
      document.body.appendChild(newImage);

      // Fade the image out after a delay
      setTimeout(() => {
        newImage.style.opacity = 0;
        setTimeout(() => {
          document.body.removeChild(newImage);
        }, fadeTime);
      }, fadeTime);

      // Add a click listener to the image
      const linkUrl = linkUrls[images.indexOf(image)];
      newImage.addEventListener("click", () => {
        window.open(linkUrl, "_blank");
      });
    });