// Initialize the map with a light theme
var map = L.map("map").setView([20.5937, 78.9629], 5); // Centered on India

// Add OpenStreetMap tiles with light theme
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

// Custom marker icons with different colors based on severity
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

  // Adjust icon size based on severity
  let iconSize = 30;
  if (severity === "High") iconSize = 35;
  if (severity === "Critical") iconSize = 40;

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

// Helper function to get symbol for disaster type
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

// Retrieve disasters from localStorage
var disasters = JSON.parse(localStorage.getItem("disasters")) || [];
var markers = {}; // Store marker references
var selectedCoords = null;
var selectionMarker = null;

// Click event to add disaster location
map.on("click", function (e) {
  // Remove previous selection marker if exists
  if (selectionMarker) {
    map.removeLayer(selectionMarker);
  }

  const disasterType = document.getElementById("disaster-type").value;
  const severity = document.getElementById("severity-level").value;

  // Add new selection marker with the chosen disaster icon
  selectionMarker = L.marker(e.latlng, {
    icon: getDisasterIcon(disasterType, severity),
    zIndexOffset: 1000,
  }).addTo(map);

  selectedCoords = e.latlng;

  // Bind popup to show this is a preview
  selectionMarker
    .bindPopup(
      `
    <div class="disaster-preview-popup">
      <b>${disasterType} (${severity})</b><br>
      <i>Preview - Click "Report Disaster" to submit</i>
    </div>
  `
    )
    .openPopup();

  // Animate the marker
  selectionMarker.setOpacity(0);
  selectionMarker.animate({ opacity: 1 }, { duration: 500 });

  // Show notification
  showNotification(
    `Location selected: ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`,
    "success"
  );

  // Auto-focus the location name field
  document.getElementById("location-name").focus();
});

// Function to clear map selection
function clearSelection() {
  if (selectionMarker) {
    map.removeLayer(selectionMarker);
    selectionMarker = null;
  }
  selectedCoords = null;
  showNotification("Selection cleared", "info");
}

// Function to zoom to show all disasters
function zoomToAllDisasters() {
  if (disasters.length === 0) {
    showNotification("No disasters to show", "info");
    return;
  }

  const bounds = new L.LatLngBounds();
  disasters.forEach((disaster) => {
    bounds.extend([disaster.lat, disaster.lng]);
  });

  map.fitBounds(bounds, { padding: [50, 50] });
  showNotification("Zoomed to show all disasters", "success");
}

// Function to show notification
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  }, 100);
}

// Function to report a disaster
function submitDisaster() {
  if (!selectedCoords) {
    showNotification("Please select a location on the map first!", "error");
    return;
  }

  const locationName = document.getElementById("location-name").value;
  if (!locationName || locationName.trim() === "") {
    showNotification("Please enter a location name!", "error");
    return;
  }

  const disasterType = document.getElementById("disaster-type").value;
  const severity = document.getElementById("severity-level").value;

  // Create disaster object
  const newDisaster = {
    id: Date.now(), // Unique ID
    type: disasterType,
    location: locationName,
    severity: severity,
    lat: selectedCoords.lat,
    lng: selectedCoords.lng,
    timestamp: new Date().toISOString(),
  };

  disasters.push(newDisaster);
  localStorage.setItem("disasters", JSON.stringify(disasters));

  // Remove the preview marker
  if (selectionMarker) {
    map.removeLayer(selectionMarker);
    selectionMarker = null;
  }

  addDisasterToUI(newDisaster);
  addMarker(newDisaster);

  // Reset form
  document.getElementById("location-name").value = "";
  selectedCoords = null;

  showNotification("Disaster reported successfully!", "success");

  // Animate the new disaster item
  const newItem = document.getElementById(`disaster-${newDisaster.id}`);
  if (newItem) {
    newItem.style.animation = "pulse 2s";
    setTimeout(() => {
      newItem.style.animation = "";
    }, 2000);
  }
}

// Function to add a disaster to UI
function addDisasterToUI(disaster) {
  const container = document.getElementById("disasters-container");
  const div = document.createElement("div");
  div.className = "disaster-item";
  div.id = "disaster-" + disaster.id;

  const date = new Date(disaster.timestamp);
  const formattedDate = date.toLocaleString();

  div.innerHTML = `
    <div class="disaster-type">
      ${getDisasterEmoji(disaster.type)} ${disaster.type}
      <span style="float: right; color: ${getSeverityColor(disaster.severity)}">
        ${disaster.severity}
      </span>
    </div>
    <div class="disaster-location">
      <i class="fas fa-map-marker-alt"></i> ${disaster.location}
    </div>
    <div class="disaster-coords">
      <i class="fas fa-location-dot"></i> ${disaster.lat.toFixed(
        4
      )}, ${disaster.lng.toFixed(4)}
    </div>
    <div class="disaster-time">
      <i class="fas fa-clock"></i> ${formattedDate}
    </div>
    <button class="delete-btn" onclick="deleteDisaster(${disaster.id})">
      <i class="fas fa-trash"></i> Remove
    </button>
  `;

  container.prepend(div); // Add to top of list
}

// Helper function to get emoji for disaster type
function getDisasterEmoji(type) {
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

// Helper function to get color for severity level
function getSeverityColor(severity) {
  switch (severity) {
    case "Low":
      return "#2ecc71";
    case "Medium":
      return "#f39c12";
    case "High":
      return "#e74c3c";
    case "Critical":
      return "#c0392b";
    default:
      return "#3498db";
  }
}

// Function to add a marker to the map
function addMarker(disaster) {
  const marker = L.marker([disaster.lat, disaster.lng], {
    icon: getDisasterIcon(disaster.type, disaster.severity),
  }).addTo(map).bindPopup(`
    <div class="disaster-popup">
      <b>${disaster.type} (${disaster.severity})</b><br>
      <i class="fas fa-map-marker-alt"></i> ${disaster.location}<br>
      <i class="fas fa-location-dot"></i> ${disaster.lat.toFixed(
        4
      )}, ${disaster.lng.toFixed(4)}<br>
      <i class="fas fa-clock"></i> ${new Date(
        disaster.timestamp
      ).toLocaleString()}
    </div>
  `);

  markers[disaster.id] = marker;

  // Animate marker appearance
  marker.setOpacity(0);
  marker.animate({ opacity: 1 }, { duration: 1000 });
}

// Function to delete a disaster
function deleteDisaster(disasterId) {
  if (!confirm("Are you sure you want to remove this disaster report?")) {
    return;
  }

  disasters = disasters.filter((d) => d.id !== disasterId);
  localStorage.setItem("disasters", JSON.stringify(disasters));

  // Remove from UI
  const div = document.getElementById("disaster-" + disasterId);
  if (div) {
    div.style.animation = "fadeOut 0.5s";
    setTimeout(() => div.remove(), 500);
  }

  // Remove marker from map
  if (markers[disasterId]) {
    markers[disasterId].animate(
      { opacity: 0 },
      {
        duration: 500,
        onEnd: () => {
          map.removeLayer(markers[disasterId]);
          delete markers[disasterId];
        },
      }
    );
  }

  showNotification("Disaster report removed", "info");
}

// Add event listeners to update the preview marker when disaster type or severity changes
document
  .getElementById("disaster-type")
  .addEventListener("change", function () {
    updatePreviewMarker();
  });

document
  .getElementById("severity-level")
  .addEventListener("change", function () {
    updatePreviewMarker();
  });

function updatePreviewMarker() {
  if (!selectionMarker || !selectedCoords) return;

  const disasterType = document.getElementById("disaster-type").value;
  const severity = document.getElementById("severity-level").value;

  // Create new marker with updated icon
  const newMarker = L.marker(selectedCoords, {
    icon: getDisasterIcon(disasterType, severity),
    zIndexOffset: 1000,
  }).addTo(map);

  // Transfer the popup if it exists
  if (selectionMarker.getPopup()) {
    newMarker.bindPopup(selectionMarker.getPopup().getContent()).openPopup();
  }

  // Remove old marker and update reference
  map.removeLayer(selectionMarker);
  selectionMarker = newMarker;
}

// Load saved disasters when the page loads
window.addEventListener("DOMContentLoaded", () => {
  disasters.forEach((disaster) => {
    addDisasterToUI(disaster);
    addMarker(disaster);
  });

  // Add event listener for location name input
  document
    .getElementById("location-name")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        submitDisaster();
      }
    });
});
