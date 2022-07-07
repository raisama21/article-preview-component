const shareIcon = document.getElementById("share-icon");
const shareIcon2 = document.getElementById("share-icon2");
const shareToggle = document.getElementById("share-toggle");
const shareInfo = document.getElementById("share-info");

shareIcon.addEventListener("click", () => {
  if (shareInfo.style.display === "block") {
    shareInfo.style.display = "none";
  } else {
    shareInfo.style.display = "block";
  }
});

shareIcon2.addEventListener("click", () => {
  shareInfo.style.display = "none";
});
