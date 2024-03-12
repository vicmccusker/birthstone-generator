
const el = document.getElementById('select');
const januaryContent = document.querySelector(".january-content");
const februaryContent = document.querySelector(".february-content");
const marchContent = document.querySelector(".march-content");
const aprilContent = document.querySelector(".april-content");
const mayContent = document.querySelector(".may-content");
const juneContent = document.querySelector(".june-content");
const julyContent = document.querySelector(".july-content");
const augustContent = document.querySelector(".august-content");
const septemberContent = document.querySelector(".september-content");
const octoberContent = document.querySelector(".october-content");
const novemberContent = document.querySelector(".november-content");
const decemberContent = document.querySelector(".december-content");
const mainContent = document.querySelector(".main-content");



document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let selection = document.getElementById('selection').value;

  if (selection === '1') {
    window.location.href = "january.html";

  }

  else if (selection === '2') {
    window.location.href = "february.html";
  }

  else if (selection === '3') {
    window.location.href = "march.html";

  }

  else if (selection === '4') {
    window.location.href = "april.html";

  }

  else if (selection === '5') {
    window.location.href = "may.html";

  }

  else if (selection === '6') {
  window.location.href = "june.html";

  }

  else if (selection === '7') {
    window.location.href = "july.html";

  }

  else if (selection === '8') {
    window.location.href = "august.html";

  }

  else if (selection === '9') {
    window.location.href = "september.html";

  }

  else if (selection === '10') {
    window.location.href = "october.html";

  }

  else if (selection === '11') {
    window.location.href = "november.html";

  }

  else if (selection === '12') {
    window.location.href = "december.html";
  
    }

  })

