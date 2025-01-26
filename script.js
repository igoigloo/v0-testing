document.addEventListener("DOMContentLoaded", () => {
    const video1 = document.getElementById("video1")
    const video2 = document.getElementById("video2")
    const startDemoBtn = document.getElementById("startDemoBtn")
    const videoOverlays = document.querySelectorAll(".video-overlay")
  
    let isPlaying = false
  
    function startDemo() {
      if (!isPlaying) {
        isPlaying = true
        video1.play()
        video2.play()
        video1.classList.remove("blur")
        video2.classList.remove("blur")
        videoOverlays.forEach((overlay) => (overlay.style.display = "none"))
        startDemoBtn.textContent = "Demo Started"
        startDemoBtn.disabled = true
      }
    }
  
    startDemoBtn.addEventListener("click", startDemo)
  
    // Initially blur the videos
    video1.classList.add("blur")
    video2.classList.add("blur")
  })
  
  