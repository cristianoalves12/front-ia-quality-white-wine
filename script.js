let btnAction = document.querySelector("#btn-action");
let formData = document.querySelector("#form-dados");
let result = document.querySelector(".result");

btnAction.addEventListener("click", function(event) {
    event.preventDefault();

    let formValues = new FormData(formData);
    let data = Object.fromEntries(formValues);
    result.textContent="QUALIDADE";

    fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))

})