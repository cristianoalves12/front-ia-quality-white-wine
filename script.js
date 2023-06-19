let btnAction = document.querySelector("#btn-action");
let formDados = document.querySelector("#form-dados");
let result = document.querySelector(".result");

btnAction.addEventListener("click", function(event) {
    event.preventDefault();

    let formValues = new FormData(formDados);
    let data = Object.fromEntries(formValues);
    result.textContent="QUALIDADE";

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))

})