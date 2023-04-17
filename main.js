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
        "Recipies NET",
        "Spotify UI Clon",
        "Weather APP"
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
        icon.click(function() {

            /* Switch On My Projects
            ---------------------*/
            switch (selectData) {
                case "ChatGPT with Python":
                    webLink = `https://jorgesarricolea.com`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Calorie Calculator":
                    webLink = `https://jorgesarricolea.com/calorie-calculator`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Recipies NET":
                    webLink = `https://jorgesarricolea.com/recipies-net`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Spotify UI Clon":
                    webLink = `https://jorgesarricolea.com/spotify-ui-clon`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                case "Weather APP":
                    webLink = `https://jorgesarricolea.com/weather-app`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
                    break;

                default:
                    webLink = `https://www.google.com/search?q=${selectData}`;
                    linkTag.attr("href", webLink);
                    linkTag.get(0).click();
            }

        });
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