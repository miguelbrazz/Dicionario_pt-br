const url = "https://significado.herokuapp.com/v2/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
            <h3>${inpWord}</h3>
        </div>

        <div class="details">
            <p>${data[0].partOfSpeech}</p>
        </div>

        <p class="word-meaning">
            ${data[0].meanings[0]}
        </p>

        <p class="word-example">
            ${data[0].etymology}
        </p>`;
    })
        .catch( () => {
            result.innerHTML = '<h3 class="error">Palavra não encontrada</h3>';

            if(data[0].meanings[1] == null){
                result.innerHTML = ''
            }
    });
            
})

