document.addEventListener("DOMContentLoaded", function () {
  // Create map instance centered on India
  const map = L.map("map").setView([20.5937, 78.9629], 5);

  // Add tile layer from OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Handle window resize
  window.addEventListener("resize", function () {
    map.invalidateSize();
  });

  // Variables for disaster reporting
  let selectedCoords = null;
  let selectionMarker = null;
  let reportedDisasters = [];

  // Click event to add disaster location
  map.on("click", function (e) {
    if (selectionMarker) {
      map.removeLayer(selectionMarker);
    }

    const disasterType = document.getElementById("disaster-type").value;
    const severity = document.getElementById("severity-level").value;

    selectedCoords = e.latlng;
    selectionMarker = L.marker(selectedCoords, {
      icon: getDisasterIcon(disasterType, severity),
      zIndexOffset: 1000,
    }).addTo(map);

    selectionMarker
      .bindPopup(`<b>${disasterType} (${severity})</b><br>Selected location`)
      .openPopup();

    document.getElementById("location-name").focus();
  });

  // Search functionality
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.getElementById("map-search");

  searchBtn.addEventListener("click", searchLocation);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchLocation();
    }
  });

  function searchLocation() {
    const query = searchInput.value.trim();
    if (!query) return;

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          map.setView([lat, lon], 10);

          if (selectionMarker) {
            map.removeLayer(selectionMarker);
          }

          selectionMarker = L.marker([lat, lon], {
            icon: getDisasterIcon(
              document.getElementById("disaster-type").value,
              document.getElementById("severity-level").value
            ),
          }).addTo(map);

          selectedCoords = { lat, lng: lon };
          selectionMarker
            .bindPopup(`<b>Location: ${data[0].display_name}</b>`)
            .openPopup();
          document.getElementById("location-name").value =
            data[0].display_name.split(",")[0];
        } else {
          alert("Location not found!");
        }
      })
      .catch((error) => {
        console.error("Search error:", error);
        alert("Error searching location. Please try again.");
      });
  }

  // Function to get custom disaster icon
  function getDisasterIcon(type, severity) {
    let iconColor;
    switch (type) {
      case "Earthquake":
        iconColor = "#f39c12";
        break;
      case "Flood":
        iconColor = "#3498db";
        break;
      case "Fire":
        iconColor = "#e74c3c";
        break;
      case "Storm":
        iconColor = "#9b59b6";
        break;
      default:
        iconColor = "#27ae60";
    }

    let iconSize = severity === "High" ? 35 : severity === "Critical" ? 40 : 30;

    return L.divIcon({
      className: "custom-icon",
      html: `<div style="background:${iconColor}; width:${iconSize}px; height:${iconSize}px; border-radius:50%; 
                display:flex; align-items:center; justify-content:center; color:white; font-size:14px;
                border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);">
              ${getDisasterSymbol(type)}
          </div>`,
      iconSize: [iconSize, iconSize],
      iconAnchor: [iconSize / 2, iconSize / 2],
    });
  }

  function getDisasterSymbol(type) {
    switch (type) {
      case "Earthquake":
        return "🌍";
      case "Flood":
        return "🌊";
      case "Fire":
        return "🔥";
      case "Storm":
        return "🌪️";
      default:
        return "⚠️";
    }
  }

  // Function to clear map selection
  window.clearSelection = function () {
    if (selectionMarker) {
      map.removeLayer(selectionMarker);
      selectionMarker = null;
    }
    selectedCoords = null;
    document.getElementById("map-search").value = "";
  };

  // Function to submit disaster report
  window.submitDisaster = function () {
    const submitBtn = document.querySelector(".report-form .btn.btn-lg");
    submitBtn.classList.add("loading");

    if (!selectedCoords) {
      alert("Please select a location on the map first!");
      submitBtn.classList.remove("loading");
      return;
    }

    const locationName = document.getElementById("location-name").value;
    if (!locationName || locationName.trim() === "") {
      alert("Please enter a location name!");
      submitBtn.classList.remove("loading");
      return;
    }

    const disasterType = document.getElementById("disaster-type").value;
    const severity = document.getElementById("severity-level").value;
    const description = document.getElementById("disaster-description").value;
    const timestamp = new Date().toLocaleString();

    setTimeout(() => {
      const marker = L.marker([selectedCoords.lat, selectedCoords.lng], {
        icon: getDisasterIcon(disasterType, severity),
      }).addTo(map).bindPopup(`
          <b>${disasterType} (${severity})</b><br>
          ${locationName}<br>
          ${description || "No description provided"}<br>
          <small>Reported: ${timestamp}</small>
      `);

      reportedDisasters.push({
        type: disasterType,
        location: locationName,
        severity: severity,
        description: description || "No description provided",
        timestamp: timestamp,
        marker: marker,
      });
      updateReportsList();

      document.getElementById("location-name").value = "";
      document.getElementById("disaster-description").value = "";
      if (selectionMarker) {
        map.removeLayer(selectionMarker);
        selectionMarker = null;
      }
      selectedCoords = null;

      submitBtn.classList.remove("loading");
      alert("Disaster reported successfully!");
    }, 1000);
  };

  // Function to update reports list
  function updateReportsList() {
    const reportsTable = document.getElementById("reports-table");
    reportsTable.innerHTML = `
      <div class="report-item report-item-header">
        <span>Type</span>
        <span>Location</span>
        <span>Severity</span>
        <span>Timestamp</span>
        <span>Action</span>
      </div>
    `;

    reportedDisasters.forEach((report, index) => {
      const reportDiv = document.createElement("div");
      reportDiv.className = "report-item";
      reportDiv.innerHTML = `
        <span>${report.type}</span>
        <span>${report.location}</span>
        <span>${report.severity}</span>
        <span>${report.timestamp}</span>
        <button class="delete-btn" onclick="deleteReport(${index})"><i class="fas fa-trash"></i></button>
      `;
      reportDiv.addEventListener("click", (e) => {
        if (!e.target.classList.contains("delete-btn")) {
          map.setView(
            [report.marker.getLatLng().lat, report.marker.getLatLng().lng],
            10
          );
          report.marker.openPopup();
        }
      });
      reportsTable.appendChild(reportDiv);
    });

    document.getElementById("disasters-count").textContent =
      reportedDisasters.length;
    document.getElementById("reports-count").textContent =
      reportedDisasters.length;
  }

  // Function to delete a report
  window.deleteReport = function (index) {
    if (confirm("Are you sure you want to delete this report?")) {
      const report = reportedDisasters[index];
      map.removeLayer(report.marker);
      reportedDisasters.splice(index, 1);
      updateReportsList();
    }
  };

  // Function to reset form
  window.resetForm = function () {
    document.getElementById("location-name").value = "";
    document.getElementById("disaster-description").value = "";
    document.getElementById("disaster-type").selectedIndex = 0;
    document.getElementById("severity-level").value = "Medium";
    window.clearSelection();
  };

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Zoom to all disasters
  window.zoomToAllDisasters = function () {
    if (reportedDisasters.length > 0) {
      const bounds = L.latLngBounds(
        reportedDisasters.map((report) => report.marker.getLatLng())
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    } else {
      alert("No disasters reported yet!");
    }
  };

  // Contact Us function (placeholder)
  window.contactUs = function () {
    alert("Contact us at: support@airelief.org");
    // In a real application, this could open a contact form or email client
  };
});
