// Grab input and response elements
const input = document.getElementById("commandInput");
const response = document.getElementById("response");

// Listen for Enter key
if (input) {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      input.value = "";
      if (!cmd) return; 

      if (cmd === "cv" || cmd === "open cv" || cmd === "show-cv" || cmd === "lebenslauf") {
        response.textContent = "> Lebenslauf wird geladen...";
        setTimeout(() => {
          window.location.href = "cv.html";
        }, 1500);
      } else if (cmd === "hireme") {
        response.textContent = "> Kontakt wird geöffnet...";
        setTimeout(() => {
          window.location.href = "mailto:stevanaleksandrov@gmail.com?subject=Kontakt%20über%20CV&body=Sehr%20geehrter%20Herr%20Aleksandrov,";
        }, 1200);
      } else if (cmd === "help") {           
        response.textContent = "> Befehle: cv | hireme | help | clear";
      } else {                                
        response.textContent = "> Unbekannter Befehl";
      }
    }
  });
}
