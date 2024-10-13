function toggleBox(boxId) {
  const boxContent = document.getElementById(boxId);

  // Close all other open boxes
  document.querySelectorAll(".box-content").forEach((content) => {
    if (content !== boxContent) {
      content.style.display = "none";
    }
  });

  // Toggle the clicked box content
  if (boxContent.style.display === "none" || boxContent.style.display === "") {
    boxContent.style.display = "block";
  } else {
    boxContent.style.display = "none";
  }
}
