const username = "KalyanDakkili";

const repoImages = {
  "Typing-Test": "assets/Typing Test.png",
  "secure-file-sharing": "assets/secure file sharing.png",
  "portfolio": "assets/portfolio.png",
  "Customer-Segmentation": "assets/Customer.jpg",
  // Add more mappings like this
};

const repoWebsites = {
  "Typing-Test": "https://kalyandakkili.github.io/Typing-Test",
  "secure-file-sharing": "https://web-production-72c33.up.railway.app",
  "portfolio": "https://kalyandakkili.github.io/portfolio/",
  "Customer-Segmentation":"https://customer-segmentation-rxsd.onrender.com",
  // Add more manual website URLs here
};

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById("projects");

    repos.forEach(repo => {
      const imageSrc = repoImages[repo.name] || "assets/default.png"; // fallback image

      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${imageSrc}" alt="${repo.name}" class="project-image">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available."}</p>
        <div class="project-buttons">
          <a href="${repo.html_url}" target="_blank">GitHub</a>
          ${repoWebsites[repo.name] ? `<a href="${repoWebsites[repo.name]}" target="_blank">Website</a>` : ''}
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading repositories:", error);
  });
