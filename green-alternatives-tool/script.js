// PRODUCT DATABASE WITH STRICT CATEGORIES
const categories = {
  Toothbrushes: [
    {
      name: "Plastic Toothbrush",
      tags: ["plastic toothbrush", "disposable"],
      co2: 60,
      water: 5,
      waste: 70,
      durability: 0.5,
      price: 1,
    },
    {
      name: "Bamboo Toothbrush",
      tags: ["toothbrush", "bamboo", "sustainable"],
      co2: 65,
      water: 10,
      waste: 80,
      durability: 3,
      price: 5,
      related: ["Compostable Toothbrush"],
    },
    {
      name: "Compostable Toothbrush",
      tags: ["toothbrush", "compostable", "eco"],
      co2: 62,
      water: 8,
      waste: 78,
      durability: 2,
      price: 4,
      related: ["Bamboo Toothbrush"],
    },
    {
      name: "Recycled Plastic Toothbrush",
      tags: ["toothbrush", "recycled", "sustainable"],
      co2: 58,
      water: 6,
      waste: 75,
      durability: 2.5,
      price: 3,
      related: ["Bamboo Toothbrush"],
    },
  ],
  Bags: [
    {
      name: "Plastic Bag",
      tags: ["plastic bag", "poly bag", "disposable"],
      co2: 70,
      water: 30,
      waste: 80,
      durability: 0.1,
      price: 0.5,
    },
    {
      name: "Organic Cotton Bag",
      tags: ["bag", "cotton", "sustainable"],
      co2: 75,
      water: 40,
      waste: 85,
      durability: 5,
      price: 8,
      related: ["Jute Bag"],
    },
    {
      name: "Jute Bag",
      tags: ["bag", "jute", "sustainable"],
      co2: 72,
      water: 35,
      waste: 82,
      durability: 6,
      price: 10,
      related: ["Organic Cotton Bag"],
    },
    {
      name: "Hemp Bag",
      tags: ["bag", "hemp", "sustainable"],
      co2: 74,
      water: 38,
      waste: 83,
      durability: 5.5,
      price: 9,
      related: ["Jute Bag"],
    },
  ],
  Bottles: [
    {
      name: "Plastic Bottle",
      tags: ["plastic bottle", "pet", "disposable"],
      co2: 80,
      water: 100,
      waste: 85,
      durability: 1,
      price: 2,
    },
    {
      name: "Stainless Steel Bottle",
      tags: ["bottle", "stainless steel", "sustainable"],
      co2: 85,
      water: 120,
      waste: 90,
      durability: 10,
      price: 25,
      related: ["Glass Bottle"],
    },
    {
      name: "Glass Bottle",
      tags: ["bottle", "glass", "sustainable"],
      co2: 80,
      water: 110,
      waste: 85,
      durability: 8,
      price: 20,
      related: ["Stainless Steel Bottle"],
    },
    {
      name: "Bamboo Bottle",
      tags: ["bottle", "bamboo", "sustainable"],
      co2: 70,
      water: 90,
      waste: 80,
      durability: 5,
      price: 18,
      related: ["Glass Bottle"],
    },
  ],
  Cups: [
    {
      name: "Plastic Cup",
      tags: ["plastic cup", "disposable"],
      co2: 65,
      water: 20,
      waste: 75,
      durability: 0.1,
      price: 0.3,
    },
    {
      name: "Stainless Steel Cup",
      tags: ["cup", "stainless steel", "sustainable"],
      co2: 80,
      water: 100,
      waste: 88,
      durability: 10,
      price: 15,
      related: ["Glass Cup"],
    },
    {
      name: "Glass Cup",
      tags: ["cup", "glass", "sustainable"],
      co2: 75,
      water: 90,
      waste: 85,
      durability: 8,
      price: 10,
      related: ["Stainless Steel Cup"],
    },
    {
      name: "Bamboo Cup",
      tags: ["cup", "bamboo", "sustainable"],
      co2: 68,
      water: 85,
      waste: 82,
      durability: 4,
      price: 12,
      related: ["Glass Cup"],
    },
  ],
  Straws: [
    {
      name: "Plastic Straw",
      tags: ["plastic straw", "disposable"],
      co2: 50,
      water: 10,
      waste: 60,
      durability: 0.1,
      price: 0.2,
    },
    {
      name: "Stainless Steel Straw",
      tags: ["straw", "stainless steel", "sustainable"],
      co2: 70,
      water: 50,
      waste: 80,
      durability: 10,
      price: 3,
      related: ["Bamboo Straw"],
    },
    {
      name: "Bamboo Straw",
      tags: ["straw", "bamboo", "sustainable"],
      co2: 65,
      water: 40,
      waste: 75,
      durability: 4,
      price: 2,
      related: ["Stainless Steel Straw"],
    },
    {
      name: "Silicone Straw",
      tags: ["straw", "silicone", "sustainable"],
      co2: 68,
      water: 45,
      waste: 78,
      durability: 6,
      price: 2.5,
      related: ["Bamboo Straw"],
    },
  ],
};

// Expand to 1000+ items with realistic combinations
const materialCompatibility = {
  Toothbrushes: ["Bamboo", "Compostable", "Recycled Plastic"],
  Bags: ["Organic Cotton", "Jute", "Hemp"],
  Bottles: ["Stainless Steel", "Glass", "Bamboo"],
  Cups: ["Stainless Steel", "Glass", "Bamboo"],
  Straws: ["Stainless Steel", "Bamboo", "Silicone"],
};

const ecoDatabase = [];
Object.entries(categories).forEach(([category, baseProducts]) => {
  baseProducts.forEach((product) => {
    ecoDatabase.push({
      ...product,
      category,
      description: product.tags.includes("sustainable")
        ? `A ${product.tags[1]} alternative to traditional ${category
            .toLowerCase()
            .replace(/s$/, "")}s.`
        : `A conventional ${category.toLowerCase().replace(/s$/, "")}.`,
      co2Reduction: product.co2,
      waterSaved: product.water,
      wasteReduction: product.waste,
      durability: product.durability,
      price: product.price,
    });
  });
});

// Generate additional realistic products
const categoryList = Object.keys(categories);
for (let i = ecoDatabase.length; i < 1000; i++) {
  const category = categoryList[i % categoryList.length];
  const base =
    ecoDatabase.find(
      (p) => p.category === category && !p.tags.includes("sustainable")
    ) || ecoDatabase[0];
  const material =
    materialCompatibility[category][
      Math.floor(Math.random() * materialCompatibility[category].length)
    ];
  const name = `${material} ${category.replace(/s$/, "")}`;
  ecoDatabase.push({
    name,
    description: `A ${material.toLowerCase()} alternative to traditional ${category
      .toLowerCase()
      .replace(/s$/, "")}s.`,
    tags: [
      category.toLowerCase().replace(/s$/, ""),
      material.toLowerCase(),
      "sustainable",
    ],
    category,
    co2Reduction: base.co2Reduction * (1.1 + Math.random() * 0.2),
    waterSaved: base.waterSaved * (1.1 + Math.random() * 0.2),
    wasteReduction: base.wasteReduction * (1.1 + Math.random() * 0.2),
    durability:
      material === "Stainless Steel"
        ? 8 + Math.random() * 2
        : material === "Glass"
        ? 6 + Math.random() * 2
        : 2 + Math.random() * 2,
    price:
      base.price *
      (material === "Stainless Steel" ? 10 : material === "Glass" ? 8 : 5) *
      (0.8 + Math.random() * 0.4),
    related: [
      `${
        materialCompatibility[category][
          (materialCompatibility[category].indexOf(material) + 1) %
            materialCompatibility[category].length
        ]
      } ${category.replace(/s$/, "")}`,
    ],
  });
}

// TECHNICAL TERM MAPPING
const plasticTermMap = {
  disposable: "plastic",
  "single-use": "plastic",
  throwaway: "plastic",
  pet: "plastic bottle",
  hdpe: "plastic bag",
  ldpe: "plastic wrap",
  pp: "plastic straw",
  polybag: "plastic bag",
  "plastic bag": "plastic bag",
  "tooth brush": "toothbrush",
  "tooth-brush": "toothbrush",
};

// ENHANCED SEARCH ALGORITHM
function calculateSustainabilityScore(product) {
  return (
    product.co2Reduction * 0.4 +
    product.waterSaved * 0.3 +
    product.wasteReduction * 0.2 +
    product.durability * 10 * 0.1
  );
}

function preprocessQuery(query) {
  const stopWords = ["a", "an", "the", "for", "to", "with", "and"];
  let processed = query.toLowerCase();
  for (const [term, mapped] of Object.entries(plasticTermMap)) {
    processed = processed.replace(term, mapped);
  }
  return processed
    .split(" ")
    .filter((word) => !stopWords.includes(word))
    .join(" ");
}

function detectCategory(query) {
  const lowerQuery = query.toLowerCase();
  for (const category of Object.keys(categories)) {
    const catLower = category.toLowerCase().replace(/s$/, "");
    if (
      lowerQuery.includes(catLower) ||
      lowerQuery.includes(category.toLowerCase())
    ) {
      return category;
    }
  }
  for (const [term, mapped] of Object.entries(plasticTermMap)) {
    if (lowerQuery.includes(term)) {
      return (
        Object.keys(categories).find(
          (cat) =>
            categories[cat].some((p) => p.tags.includes(mapped)) ||
            cat.toLowerCase().includes(mapped.replace("plastic ", ""))
        ) || "Bags"
      ); // Default to Bags for bag-related terms
    }
  }
  return null;
}

function findAlternatives(query) {
  console.log("Searching for:", query);
  const processedQuery = preprocessQuery(query);
  const targetCategory = detectCategory(processedQuery);
  console.log("Detected category:", targetCategory);

  if (!targetCategory) {
    console.log("No category detected, returning general sustainable items");
    return ecoDatabase
      .filter((p) => p.tags.includes("sustainable"))
      .slice(0, 5)
      .map((product) => ({
        ...product,
        sustainabilityScore: calculateSustainabilityScore(product),
        relevance: 0.7,
      }));
  }

  let results = [];
  try {
    const fuseOptions = {
      keys: [
        { name: "name", weight: 0.3 },
        { name: "tags", weight: 0.4 },
        { name: "description", weight: 0.1 },
        { name: "category", weight: 0.2 },
      ],
      threshold: 0.15, // Stricter matching
      includeScore: true,
      distance: 30,
    };

    const fuse = new Fuse(
      ecoDatabase.filter((p) => p.category === targetCategory),
      fuseOptions
    );
    results = fuse
      .search(processedQuery)
      .map((result) => ({
        item: result.item,
        score: result.score,
      }))
      .filter(({ item }) => item.tags.includes("sustainable")); // Only sustainable items
  } catch (error) {
    console.error("Fuse.js error:", error);
  }

  if (!results.length) {
    console.log(
      "No exact matches, falling back to sustainable items in category:",
      targetCategory
    );
    results = ecoDatabase
      .filter(
        (product) =>
          product.category === targetCategory &&
          product.tags.includes("sustainable")
      )
      .map((product) => ({ item: product, score: 0.4 }));
  }

  return results
    .map(({ item, score }) => ({
      ...item,
      sustainabilityScore: calculateSustainabilityScore(item),
      relevance: targetCategory === item.category ? 1 - score : 0.1, // Heavily penalize wrong categories
    }))
    .sort(
      (a, b) =>
        b.sustainabilityScore * b.relevance -
        a.sustainabilityScore * a.relevance
    )
    .slice(0, 5);
}

// DISPLAY RESULTS
function showResults(products) {
  const resultsDiv = document.getElementById("results");
  if (!products || !products.length) {
    products = ecoDatabase
      .filter((p) => p.tags.includes("sustainable"))
      .slice(0, 5)
      .map((product) => ({
        ...product,
        sustainabilityScore: calculateSustainabilityScore(product),
        relevance: 0.8,
      }));
  }

  console.log("Displaying products:", products);
  let html = "";
  products.forEach((product, index) => {
    const confidence = Math.min(
      95 - index * 5,
      product.sustainabilityScore * product.relevance * 100
    );
    html += `
          <div class="product-card">
              <div class="product-name">
                  ${product.name}
                  <span class="similarity">${confidence.toFixed(
                    0
                  )}% match</span>
              </div>
              <div class="product-desc">${product.description}</div>
              <div class="product-meta">
                  <div class="meta-item"><i class="fas fa-smog"></i> CO₂: ${product.co2Reduction.toFixed(
                    0
                  )}%</div>
                  <div class="meta-item"><i class="fas fa-tint"></i> ${product.waterSaved.toFixed(
                    0
                  )}L</div>
                  <div class="meta-item"><i class="fas fa-trash"></i> ${product.wasteReduction.toFixed(
                    0
                  )}%</div>
                  <div class="meta-item"><i class="fas fa-clock"></i> ${product.durability.toFixed(
                    1
                  )} yrs</div>
                  <div class="meta-item"><i class="fas fa-tag"></i> $${product.price.toFixed(
                    2
                  )}</div>
              </div>
              ${
                product.related && product.related.length
                  ? `
                  <div class="related-suggestion" data-related="${product.related[0]}">
                      Explore: ${product.related[0]}
                  </div>`
                  : ""
              }
          </div>`;
  });

  resultsDiv.innerHTML = html;
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
    }, 500);
  } else {
    document.getElementById("results").innerHTML = `
          <div class="no-results">
              <h3>Explore Eco-Friendly Options</h3>
              <p>Enter a product name to find sustainable alternatives</p>
              <div class="suggestions">
                  <span>toothbrush</span>
                  <span>polybag</span>
                  <span>plastic bottle</span>
              </div>
          </div>`;
  }
});

document.getElementById("sort-by").addEventListener("change", (e) => {
  const sortBy = e.target.value;
  const currentQuery = document.getElementById("search-input").value;
  let results = findAlternatives(currentQuery);

  if (sortBy === "sustainability") {
    results.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore);
  } else if (sortBy === "price") {
    results.sort((a, b) => a.price - b.price);
  }

  showResults(results);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("related-suggestion")) {
    const relatedProduct = e.target.dataset.related;
    document.getElementById("search-input").value = relatedProduct;
    document.getElementById("search-input").dispatchEvent(new Event("input"));
  }

  if (e.target.closest(".suggestions span")) {
    const suggestion = e.target.textContent;
    document.getElementById("search-input").value = suggestion;
    document.getElementById("search-input").dispatchEvent(new Event("input"));
  }
});

document.getElementById("calc-btn").addEventListener("click", () => {
  const weeklyUse = parseInt(document.getElementById("plastic-use").value) || 0;
  const yearlyCO2 = weeklyUse * 52 * 0.05;
  const waterSaved = weeklyUse * 52 * 0.5;
  const wasteReduced = weeklyUse * 52 * 0.1;

  document.getElementById("calc-result").innerHTML = `
      Switching to eco alternatives could:<br>
      - Reduce CO₂ by ${yearlyCO2.toFixed(1)} kg/year<br>
      - Save ${waterSaved.toFixed(1)} L of water/year<br>
      - Cut waste by ${wasteReduced.toFixed(1)} kg/year
  `;
});

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  showResults(
    ecoDatabase.filter((p) => p.tags.includes("sustainable")).slice(0, 5)
  );

  setTimeout(() => {
    document.getElementById("search-input").value = "toothbrush";
    const results = findAlternatives("toothbrush");
    showResults(results);
  }, 1000);

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
});
