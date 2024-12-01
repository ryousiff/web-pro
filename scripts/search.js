function displayShoes(shoes) {
    const shoesContainer = document.querySelector(".collection__section");
    shoesContainer.innerHTML = ""; // Clear previous content
  
    shoes.forEach((brand) => {
      brand.items.forEach((shoe) => {
        // Create a new anchor element for each shoe
        const shoeElement = document.createElement("a");
        shoeElement.href = "show_item.html";
        shoeElement.classList.add("shoe-item");
  
        // Populate the inner HTML
        shoeElement.innerHTML = `
          <div>
            <img
              width="250"
              height="250"
              src="${shoe.image}"
              alt="${shoe.name}"
            />
            <div class="pricing">
              <p>${shoe.name}</p>
              <span>${shoe.price}</span>
            </div>
          </div>
        `;
  
        // Append the shoe to the container
        shoesContainer.appendChild(shoeElement);
      });
    });
  }
  
  // Search functionality
  document.addEventListener("DOMContentLoaded", function () {
    // Initial display of all shoes
    displayShoes(shoesData);
  
    // Search input element
    const searchInput = document.querySelector(".input__search");
  
    // Event listener for search input
    searchInput.addEventListener("input", function (e) {
      const query = e.target.value.toLowerCase();
  
      // Filter the shoes based on the search query
      const filteredShoes = shoesData.map((brand) => {
        return {
          ...brand,
          items: brand.items.filter((shoe) =>
            shoe.name.toLowerCase().includes(query)
          ),
        };
      });
  
      // Display the filtered shoes
      displayShoes(filteredShoes);
    });
  });