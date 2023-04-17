$(document).ready(function() {

    const inputBox = $("input");
    const icon = $(".icon");
    let linkTag = $(".search-link");
    let webLink;

    /* Suggestions
    ---------------------*/

    let suggestions = [
        "ChatGPT with Python",
        "Calorie Calculator",
        "Spotify",
        "Weather",
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
        "Movie schedules",
        "How to do crafts",
        "How to prepare for an exam",
        "Tips for improving memory",
        "How to start a business",
        "Best phone apps",
        "Tips for quitting smoking"
    ];

    /* User Search Functions
    ---------------------*/

    inputBox.on("keyup", function(e) {
        let userData = e.target.value;
        let emptyArray = [];
        if (userData) {
            emptyArray = suggestions.filter(function(data) {
                // The suggestions will appear according to the first letter that the user enters
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data)=>{
                // Passing return data inside li tag
                return data = `<li>${data}</li>`;
            });
            $(".autocom-box").addClass("active");
        } else {
            $(".autocom-box").removeClass("active");
        }
        showSuggestions(emptyArray);
    });

    /* User Search Function Icon
    ---------------------*/

    function select(element) {
        let selectData = $(element).text();
        inputBox.val(selectData);
        console.log(selectData);
        icon.click(function() {

            /* Switch On My Projects
            ---------------------*/

            switch (selectData) {
                case "ChatGPT with Python":
                    webLink = `https://github.com/JorgeSarricolea/ChatGPT-Python`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Calorie Calculator":
                    webLink = `https://jorgesarricolea.com/calorie-calculator`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Cooking Recipes":
                    webLink = `https://jorgesarricolea.com/recipies-net`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Spotify":
                    webLink = `https://jorgesarricolea.com/spotify-ui-clon`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Weather":
                    webLink = `https://jorgesarricolea.com/weather-app`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                default:
                    webLink = `https://www.google.com/search?q=${selectData}`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
            }
        // Reload the main page to new search input
        location.reload();
        });
        $(".autocom-box").removeClass("active");
    }

    /* List Data Function
    ---------------------*/

    function showSuggestions(list) {
        let listData;
        if (!list.length) {
            userValue = inputBox.val();
            listData = `<li>${userValue}</li>`;
        } else {
            listData = list.join('');
        }
        $(".autocom-box").html(listData);

        // Onclick function in listData
        $(".autocom-box li").each(function() {
            $(this).click(function() {
                select(this);
            });
        });
    }
});