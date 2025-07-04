// Dummy data – Replace this with live API or Firebase later

const content = {
  jobs: [
    { title: "Remote Data Entry - UN", url: "https://example.com/un-data-entry" },
    { title: "Freelance Translator - Swahili", url: "https://example.com/translator" },
  ],
  music: [
    { title: "New Bongo Hit - 2025", url: "https://example.com/bongo2025.mp3" },
    { title: "Amapiano Mix", url: "https://example.com/amapiano.mp3" },
  ],
  videos: [
    { title: "Job Interview Tips", url: "https://example.com/interview-tips.mp4" },
    { title: "Motivational Video", url: "https://example.com/motivation.mp4" },
  ],
  ajira: [
    { title: "TAKUKURU Call for Interview", url: "https://example.com/takukuru" },
    { title: "Ajira Portal Updates", url: "https://example.com/ajira-updates" },
  ]
};

function populateSection(id, items) {
  const ul = document.querySelector(`#${id} ul`);
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
    ul.appendChild(li);
  });
}

populateSection("jobs", content.jobs);
populateSection("music", content.music);
populateSection("videos", content.videos);
populateSection("ajira", content.ajira);