document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("job-list");
  const filter = document.getElementById("filter");

  // Sample job data
  const jobs = [
    {
      title: "Environmental Scientist",
      type: "job",
      description: "Work with a team to analyze environmental data.",
    },
    {
      title: "Green Energy Intern",
      type: "internship",
      description: "Help in developing renewable energy projects.",
    },
    {
      title: "Beach Cleanup Volunteer",
      type: "volunteer",
      description: "Join a local group to clean up beaches.",
    },
    {
      title: "Wildlife Conservationist",
      type: "job",
      description: "Protect endangered species and their habitats.",
    },
    {
      title: "Sustainable Agriculture Intern",
      type: "internship",
      description: "Work on organic farming techniques.",
    },
  ];

  // Function to render job cards
  function renderJobs(filterType) {
    jobList.innerHTML = "";
    const filteredJobs = jobs.filter(
      (job) => filterType === "all" || job.type === filterType
    );
    filteredJobs.forEach((job) => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
      jobCard.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
      jobList.appendChild(jobCard);
    });
  }

  // Filter jobs based on selection
  filter.addEventListener("change", (e) => {
    renderJobs(e.target.value);
  });

  // Initial render
  renderJobs("all");
});
