
function App(params) {
    $("form.random").on("submit", function (event) {
        event.preventDefault();
        $("section").html('');
        let textInput = $("input.img-input").val();
        fetch(`https://dog.ceo/api/breeds/image/random/${textInput}`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                responseJson.message.forEach(picture => {
                    $("section").append(`<img src="${picture}" />`);
                });
            });
    })

    $("form.breed").on("submit", function (event) {
        event.preventDefault();
        $("section").html('');
        let textInput = $("input.breed-input").val();
        fetch(`https://dog.ceo/api/breed/${textInput}/images/random`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                if (responseJson.code !== 404) {
                    $("section").html(`<img src="${responseJson.message}" />`);
                }})
            .catch($("section").html("Sorry, whoopsies! :)"))
            });
    }

App();