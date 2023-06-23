let btnAction = document.querySelector("#btn-action");
let formData = document.querySelector("#form-dados");
let result = document.querySelector(".result");

btnAction.addEventListener("click", function(event) {
    event.preventDefault();

    let formValues = new FormData(formData);
    let data = Object.fromEntries(formValues);
    data = Object.keys(data).reduce((curr, next) => {
        return {
            ...curr,
            [next]: Number(data[next])
        }
        }, {})
    result.textContent="Calculando...";
    
    fetch('https://sea-turtle-app-jolom.ondigitalocean.app/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        result.textContent = `Qualidade: ${data.prediction} | ${String(data.probability * 100).slice(0,5)}%` 
    })

})