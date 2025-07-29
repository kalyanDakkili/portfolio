const username = "KalyanDakkili";

const repoImages = {
  "Typing-Test": "assets/Typing Test.png",
  "portfolio": "assets/portfolio.png",
  "Customer-Segmentation":"assets/Customer.jpg",
  "ecommerce-platform":"assets/sc.png",
  "Scalable-Observability-on-AWS":"assets/sooa.png",
  "System-Monitoring-Tool":"assets/symt.jpg",
  "URL-Shortner":"assets/generated-image.png",
  // Add more mappings like this
};

const repoWebsites = {
  "Typing-Test": "https://kalyandakkili.github.io/Typing-Test",
  "portfolio": "https://kalyandakkili.github.io/portfolio/",
  "Customer-Segmentation":"https://customer-segmentation-rxsd.onrender.com",
   "ecommerce-platform":"https://ecommerce-platform-3l13vtp18-dakkili-kalyan-s-projects.vercel.app",
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
