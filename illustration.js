document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-description");

    // prede
    const descriptions = {
        "illust_Comic.png": "Comic strip created for Color and Composition final project. Created using Adobe Photoshop 2023.",
        "illust_MaxBlaire.png": "Illustration of original characters Max and Blair. Created in Adobe Photoshop 2025.",
        "illust_mindysFriends.png": "Illustration of original characters (from left: Jacob, Mindy, Alia). Created in Adobe Photoshop 2025.",
        "illust_princess.gif": "Princess Flora character design and illustration created for Game Jam: Slice of Jam 2025. Created using Adobe Photoshop 2025.",
        "illust_knight.gif": "Knight Mars character design and illustration created for Game Jam: Slice of Jam 2025. Created using Adobe Photoshop 2025.",
        "illust_phoneCall.gif": "Animated GIF illustration. Created using Adobe Photoshop 2025."
    };

 // Attach click listener to all .content-container elements
 document.querySelectorAll(".content-container").forEach(container => {
    container.addEventListener("click", (e) => {
      // Prevent modal from opening if a link was clicked
      if (e.target.tagName.toLowerCase() === "a") return;

      // get img in container
      const img = container.querySelector("img");
      if (!img) return;

      const src = img.getAttribute("src");
      modalImg.setAttribute("src", src);
      modalDesc.innerHTML = descriptions[src] || "No description available.";
      modal.style.display = "flex";
    });
  });

  // close modal when click outside of the image or description
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === modalImg || e.target === modalDesc) {
      modal.style.display = "none";
    }
  });
});