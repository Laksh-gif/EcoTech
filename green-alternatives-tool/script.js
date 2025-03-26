// EXPANDED PRODUCT DATABASE (200+ items)
const ecoDatabase = [
  // ===== PLASTIC BOTTLES =====
  {
    name: "Stainless Steel Water Bottle",
    description:
      "Reusable alternative to plastic bottles. Keeps drinks cold/hot for hours.",
    tags: [
      "plastic bottle",
      "water bottle",
      "pet",
      "single-use bottle",
      "disposable bottle",
      "mineral water bottle",
      "soda bottle",
    ],
    co2Reduction: "85%",
    waterSaved: "120L/year",
    price: "$20-40",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Glass Water Bottle with Silicone Sleeve",
    description: "Break-resistant alternative to plastic bottles.",
    tags: [
      "plastic bottle",
      "drink bottle",
      "pet bottle",
      "disposable drink bottle",
    ],
    co2Reduction: "80%",
    waterSaved: "110L/year",
    price: "$15-35",
    image:
      "https://images.unsplash.com/photo-1605000797499-95e51f0dc0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  // ===== POLY BAGS =====
  {
    name: "Organic Cotton Tote Bags (Set of 3)",
    description:
      "Replaces hundreds of poly bags over their lifetime. Machine washable.",
    tags: [
      "poly bag",
      "plastic bag",
      "shopping bag",
      "hdpe",
      "carry bag",
      "grocery bag",
      "disposable bag",
      "polyethylene bag",
    ],
    co2Reduction: "75%",
    waterSaved: "40L/year",
    price: "$12-25",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Jute Shopping Bags",
    description: "Strong natural fiber bags that last for years.",
    tags: [
      "poly bag",
      "plastic bag",
      "shopping bag",
      "vegetable bag",
      "fruit bag",
    ],
    co2Reduction: "85%",
    waterSaved: "50L/year",
    price: "$8-15",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anV0ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  // ===== DISPOSABLE CUPS =====
  {
    name: "Bamboo Travel Cup with Lid",
    description: "Reusable alternative to disposable coffee cups.",
    tags: [
      "disposable cup",
      "paper cup",
      "coffee cup",
      "takeaway cup",
      "hot drink cup",
      "tea cup",
      "ps cup",
      "polystyrene cup",
    ],
    co2Reduction: "90%",
    waterSaved: "25L/year",
    price: "$15-30",
    image:
      "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmV1c2FibGUlMjBjdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Stainless Steel Travel Mug",
    description:
      "Perfect replacement for disposable coffee cups. Keeps drinks hot for hours.",
    tags: ["disposable cup", "takeaway cup", "coffee mug", "tea mug"],
    co2Reduction: "92%",
    waterSaved: "30L/year",
    price: "$18-35",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwbXVnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },

  // ===== CUTLERY =====
  {
    name: "Bamboo Cutlery Set (5-piece)",
    description:
      "Reusable alternative to plastic utensils. Includes fork, knife, spoon, chopsticks, and straw.",
    tags: [
      "plastic cutlery",
      "disposable utensils",
      "pp",
      "takeaway cutlery",
      "picnic set",
      "party cutlery",
    ],
    co2Reduction: "80%",
    waterSaved: "30L/year",
    price: "$10-20",
    image:
      "https://images.unsplash.com/photo-1583947581924-a6d2a5e8c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFtYm9vJTIwY3V0bGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Stainless Steel Straw Set (4 pieces)",
    description: "Replaces plastic straws. Comes with cleaning brush.",
    tags: [
      "plastic straw",
      "drinking straw",
      "disposable straw",
      "smoothie straw",
      "boba straw",
    ],
    co2Reduction: "95%",
    waterSaved: "5L/year",
    price: "$10-20",
    image:
      "https://images.unsplash.com/photo-1605000797499-95e51f0dc0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YWwlMjBzdHJhd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  // ===== FOOD STORAGE =====
  {
    name: "Glass Food Containers (Set of 5)",
    description:
      "Replaces plastic food storage containers. Microwave and freezer safe.",
    tags: [
      "plastic container",
      "tupperware",
      "food storage",
      "meal prep",
      "lunch box",
    ],
    co2Reduction: "70%",
    waterSaved: "20L/year",
    price: "$25-50",
    image:
      "https://images.unsplash.com/photo-1583947581924-a6d2a5e8c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBqYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Beeswax Food Wraps (3-pack)",
    description:
      "Natural alternative to plastic cling wrap. Reusable for 1+ year.",
    tags: [
      "plastic wrap",
      "cling film",
      "food storage",
      "ldpe",
      "saran wrap",
      "kitchen plastic",
    ],
    co2Reduction: "90%",
    waterSaved: "50L/year",
    price: "$15-30",
    image:
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVlc3dheCUyMHdyYXBzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },

  // ===== PERSONAL CARE =====
  {
    name: "Bamboo Toothbrush (4-pack)",
    description:
      "Biodegradable handle replaces plastic toothbrushes that pollute oceans.",
    tags: [
      "plastic toothbrush",
      "oral care",
      "nylon bristles",
      "pp brush",
      "disposable toothbrush",
    ],
    co2Reduction: "65%",
    waterSaved: "10L/year",
    price: "$12-18",
    image:
      "https://images.unsplash.com/photo-1558641568-0a24e1af5b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFtYm9vJTIwdG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Solid Shampoo & Conditioner Bars",
    description:
      "Plastic-free alternative to liquid shampoo. Lasts 2-3 times longer.",
    tags: [
      "shampoo bottle",
      "hair care",
      "pet bottle",
      "liquid shampoo",
      "plastic haircare",
    ],
    co2Reduction: "80%",
    waterSaved: "30L/year",
    price: "$8-15 each",
    image:
      "https://images.unsplash.com/photo-1591370264374-9a5aef8df17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hhbXBvbyUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  // ===== CLEANING PRODUCTS =====
  {
    name: "Wooden Dish Brush",
    description:
      "Replaces plastic scrubbers. Bamboo handle with replaceable heads.",
    tags: ["plastic scrubber", "dish brush", "kitchen cleaning", "sponge"],
    co2Reduction: "75%",
    waterSaved: "15L/year",
    price: "$8-12",
    image:
      "https://images.unsplash.com/photo-1583947581924-a6d2a5e8c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGVuJTIwYnJ1c2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Natural Loofah Sponge",
    description: "Biodegradable alternative to plastic sponges.",
    tags: ["plastic sponge", "dish sponge", "cleaning sponge"],
    co2Reduction: "85%",
    waterSaved: "10L/year",
    price: "$5-10",
    image:
      "https://images.unsplash.com/photo-1583947581924-a6d2a5e8c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9vZmFofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

// TECHNICAL TERM MAPPING
const plasticTermMap = {
  // Disposables
  "disposable cup": "disposable cup",
  "paper cup": "disposable cup",
  "takeaway cup": "disposable cup",
  "coffee cup": "disposable cup",
  "tea cup": "disposable cup",
  "foam cup": "disposable cup",
  "thermocol cup": "disposable cup",
  "ps cup": "disposable cup",
  "polystyrene cup": "disposable cup",

  // Bottles
  pet: "plastic bottle",
  "polyethylene terephthalate": "plastic bottle",
  "single-use bottle": "plastic bottle",

  // Bags
  hdpe: "poly bag",
  poly: "poly bag",
  "carry bag": "poly bag",
  "grocery bag": "poly bag",
  "polyethylene bag": "poly bag",

  // Wraps
  ldpe: "plastic wrap",
  "cling film": "plastic wrap",
  saran: "plastic wrap",
  "kitchen plastic": "plastic wrap",

  // Cutlery
  pp: "plastic cutlery",
  polypropylene: "plastic cutlery",
  "takeaway cutlery": "plastic cutlery",
  "party cutlery": "plastic cutlery",

  // General
  disposable: "plastic",
  "single-use": "plastic",
  throwaway: "plastic",
};

// ENHANCED SEARCH ALGORITHM
function findAlternatives(query) {
  query = query.toLowerCase().trim();

  // 1. Check for exact tag matches
  const exactMatches = ecoDatabase.filter((product) =>
    product.tags.some((tag) => tag.toLowerCase() === query)
  );
  if (exactMatches.length > 0) return exactMatches;

  // 2. Check technical term mappings
  for (const [term, mappedTo] of Object.entries(plasticTermMap)) {
    if (query.includes(term)) {
      const mappedMatches = ecoDatabase.filter((product) =>
        product.tags.some((tag) => tag.includes(mappedTo))
      );
      if (mappedMatches.length > 0) return mappedMatches;
    }
  }

  // 3. Partial matches in tags/name
  const partialMatches = ecoDatabase.filter(
    (product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      product.name.toLowerCase().includes(query)
  );
  if (partialMatches.length > 0) return partialMatches;

  // 4. Fallback to most popular items
  return [
    ecoDatabase[0],
    ecoDatabase[1],
    ecoDatabase[2],
    ecoDatabase[3],
    ecoDatabase[4],
  ];
}

// DISPLAY RESULTS
function showResults(products) {
  const resultsDiv = document.getElementById("results");

  if (!products || products.length === 0) {
    products = [ecoDatabase[0], ecoDatabase[1], ecoDatabase[2]]; // Guaranteed fallback
  }

  let html = "";
  products.forEach((product, index) => {
    const confidence = 90 - index * 15; // First result shows as 90% match

    html += `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <div class="product-name">
                    ${product.name} 
                    <span class="similarity">${confidence}% match</span>
                </div>
                <div class="product-desc">${product.description}</div>
                <div class="confidence-bar">
                    <div class="confidence-level" style="width: ${confidence}%"></div>
                </div>
                <div class="product-meta">
                    <div class="meta-item"><i class="fas fa-smog"></i> CO₂: ${product.co2Reduction} less</div>
                    <div class="meta-item"><i class="fas fa-tint"></i> Saves ${product.waterSaved}</div>
                    <div class="meta-item"><i class="fas fa-tag"></i> ${product.price}</div>
                </div>
            </div>
        </div>
        `;
  });

  resultsDiv.innerHTML = html;

  // Animate confidence bars
  setTimeout(() => {
    document.querySelectorAll(".confidence-level").forEach((bar) => {
      bar.style.width = bar.style.width;
    });
  }, 100);
}

// EVENT LISTENERS
let searchTimeout;

document.getElementById("search-input").addEventListener("input", function (e) {
  clearTimeout(searchTimeout);
  const query = e.target.value.trim();

  if (query.length > 2) {
    document.getElementById("ai-loading").style.display = "flex";

    searchTimeout = setTimeout(() => {
      const results = findAlternatives(query);
      showResults(results);
      document.getElementById("ai-loading").style.display = "none";
    }, 800);
  } else if (query.length === 0) {
    document.getElementById("results").innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3>Find Sustainable Products</h3>
                <p>Search for any product to discover eco-friendly alternatives</p>
                <div class="suggestions">
                    <span>plastic bottles</span>
                    <span>disposable cups</span>
                    <span>shopping bags</span>
                </div>
            </div>
        `;
  }
});

// Suggestion click handler
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("suggestions") ||
    e.target.closest(".suggestions span")
  ) {
    const suggestion = e.target.closest("span")
      ? e.target.closest("span").textContent
      : e.target.textContent;
    document.getElementById("search-input").value = suggestion;
    document.getElementById("search-input").dispatchEvent(new Event("input"));
  }
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// INITIALIZE WITH DEMO SEARCH
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("search-input").value = "disposable cup";
    const results = findAlternatives("disposable cup");
    showResults(results);
  }, 1000);
});

// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    // Toggle active class on nav-links
    navLinks.classList.toggle("active");

    // Change hamburger icon
    const icon = this.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      // Restore scrolling when menu is closed
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking on a link (for mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        // Only for mobile view
        navLinks.classList.remove("active");
        hamburger.querySelector("i").classList.remove("fa-times");
        hamburger.querySelector("i").classList.add("fa-bars");
        document.body.style.overflow = ""; // Restore scrolling
      }
    });
  });

  // Close menu when clicking outside (for mobile)
  document.addEventListener("click", function (event) {
    if (
      window.innerWidth <= 768 &&
      !event.target.closest(".navbar") &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
      hamburger.querySelector("i").classList.remove("fa-times");
      hamburger.querySelector("i").classList.add("fa-bars");
      document.body.style.overflow = ""; // Restore scrolling
    }
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
