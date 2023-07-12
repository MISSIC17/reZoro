document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#discussion .d_w-icon img")) {
    document.querySelector("#discussion .d_w-icon img").src =
      "https://i.imgur.com/CCPnKjm.png";
  }

  const logos = document.querySelectorAll('img[alt="AniWatch"]');
  for (let logo of logos) {
    logo.src = "https://i.imgur.com/E06KlTl.png";
    logo.style.display = "block";
  }
  const zoro = document.querySelector('img[alt="aniwatch"]');
  if (zoro) {
    zoro.src = "https://i.imgur.com/PDmB7KJ.png";
    zoro.style.display = "block";
  }
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    if (element.classList.contains("en", "jp")) return;
    const color = window.getComputedStyle(element).color;
    if (color === "rgb(255, 221, 149)" || color === "#ffdd95") {
      element.style.setProperty("color", "#CAE862", "important");
    }

    const bg = window.getComputedStyle(element).backgroundColor;
    if (bg === "rgb(255, 221, 149)") {
      element.style.setProperty("background-color", "#CAE862", "important");
    }
    if (element.classList.contains("btn-primary")) {
      element.style.setProperty("border-color", "#CAE862", "important");
    }

    const borColor = window.getComputedStyle(element).borderColor;
    if (borColor === "rgb(255, 211, 149") {
      element.style.setProperty("border-color", "#CAE862", "important");
    }
    const borBottomColor = window.getComputedStyle(element).borderBottomColor;
    if (borBottomColor === "rgb(255, 211, 149") {
      element.style.setProperty("border-bottom-color", "#CAE862", "important");
    }
  });
});
