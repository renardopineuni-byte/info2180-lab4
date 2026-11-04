document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener("click", () => {
    fetch("superheroes.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert("Something went wrong: " + error.message);
      });
  });
});
