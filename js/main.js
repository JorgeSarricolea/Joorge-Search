document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.querySelector("input");
  let linkTag = document.querySelector(".search-link");
  let webLink;

  // Suggestions
  let suggestions = [
    "Calorie Calculator",
    "Spotify",
    "Weather",
    "Photos",
    "Movies",
    "Photolens",
    "Rock paper scissors",
    "Breaking News",
    "Cooking Recipes",
    "How to lose weight",
    "How to learn a new language",
    "Nearby Tourist Places",
    "How to repair something at home",
    "Tips for improving mental health",
    "Job Offers",
    "How to improve productivity",
    "Tips for saving money",
    "How to buy something online",
    "Meaning of a word",
    "How to do crafts",
    "How to prepare for an exam",
    "Tips for improving memory",
    "How to start a business",
    "Best phone apps",
    "Tips for quitting smoking",
  ];

  // Hash table for mapping suggestions to URLs
  const suggestionUrls = {
    "calorie calculator": "https://kcal-calc.netlify.app/",
    "cooking recipes": "https://recipies-net.netlify.app/",
    spotify: "https://spotifyuicln.netlify.app",
    weather: "https://wtrapp.netlify.app/",
    photos: "https://photo-lens.netlify.app/",
    photolens: "https://photo-lens.netlify.app/",
    "rock paper scissors": "https://roc-paper-scissors.netlify.app/",
    movies: "https://the-movies-app-mocha.vercel.app",
  };

  // User Search Functions
  inputBox.addEventListener("keyup", function (e) {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter(function (data) {
        return data.toLowerCase().startsWith(userData.toLowerCase());
      });
      emptyArray = emptyArray.map((data) => {
        return `<li>${data}</li>`;
      });
      document.querySelector(".autocom-box").classList.add("active");
    } else {
      document.querySelector(".autocom-box").classList.remove("active");
    }
    showSuggestions(emptyArray);
  });

  // Handle "Enter" key press
  inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleSearch(inputBox.value.toLowerCase()); // Convert to lowecase
    }
  });

  // User Search Function Icon
  function select(element) {
    let selectData = element.textContent.toLowerCase(); // Convert to lowecase
    inputBox.value = selectData;
    handleSearch(selectData);
  }

  // Handle search action
  function handleSearch(query) {
    // Check if the suggestion exists in the hash table
    if (suggestionUrls.hasOwnProperty(query)) {
      webLink = suggestionUrls[query];
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    } else {
      webLink = `https://www.google.com/search?q=${query}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    // Reload the main page to new search input
    location.reload();
  }

  // List Data Function
  function showSuggestions(list) {
    let listData;
    if (!list.length) {
      userValue = inputBox.value;
      listData = `<li>${userValue}</li>`;
    } else {
      listData = list.join("");
    }
    document.querySelector(".autocom-box").innerHTML = listData;

    // Onclick function in listData
    document.querySelectorAll(".autocom-box li").forEach(function (item) {
      item.addEventListener("click", function () {
        select(this);
      });
    });
  }
});
