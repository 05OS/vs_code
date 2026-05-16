// Live-Uhr für den Button im Header
// Diese Funktion liest die aktuelle Zeit aus und formatiert Stunden, Minuten und Sekunden.
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Der Text wird im Button mit der ID "time-button" angezeigt.
  const timeButton = document.getElementById('time-button');
  if (timeButton) {
    timeButton.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Die Uhr wird sofort einmal aktualisiert und dann jede Sekunde neu gesetzt.
updateTime();
setInterval(updateTime, 1000);
