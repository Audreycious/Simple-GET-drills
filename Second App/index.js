
function App(params) {
    $("form.breed").on("submit", function (event) {
        event.preventDefault();
        $("section").html('');
        let textInput = $("input.breed-input").val();
        fetch(`https://dog.ceo/api/breed/${textInput}/images/random`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                if (responseJson.status == "success") {
                    $("section").html(`<img src="${responseJson.message}" />`);
                }
                else {
                    throw responseJson;
                }
            })
            .catch((error) => {
                $("section").html(error.message);
            })
        }
    );
}

App();