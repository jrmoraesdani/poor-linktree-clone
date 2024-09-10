function toggleMode() {
  html = document.documentElement
  html.classList.toggle("light-mode")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light-mode")) {
    img.setAttribute("src", "./assets/assets/profile-img.jpg")
  } else {
    img.setAttribute("src", "./assets/assets/profile-img-dark.png")
  }
}
