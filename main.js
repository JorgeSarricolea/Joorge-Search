$(document).ready(function() {

    const inputBox = $("input");

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
            console.log(emptyArray);
            $(".autocom-box").addClass("active"); //show autocomplete box
        } else {
            $(".autocom-box").removeClass("active");
        }
        showSuggestions(emptyArray);
    });

    function showSuggestions(list) {
        let listData;
        if (!list.length) {
            userValue = inputBox.val();
            listData = `<li>${userValue}</li>`;
        } else {
            listData = list.join('');
        }
        $(".autocom-box").html(listData);
    }
});