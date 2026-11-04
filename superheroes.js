document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  const result = document.getElementById("result");

  function search() {
    // Trim, then URL-encode so special characters can't break the query string
    const query = encodeURIComponent(searchInput.value.trim());

    fetch("superheroes.php?query=" + query)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then((html) => {
        // The PHP escapes all output, so it's safe to render as HTML
        result.innerHTML = html;
      })
      .catch((error) => {
        result.textContent = "Something went wrong: " + error.message;
      });
  }

  searchBtn.addEventListener("click", search);

  // Bonus: pressing Enter in the text field also searches
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });
});