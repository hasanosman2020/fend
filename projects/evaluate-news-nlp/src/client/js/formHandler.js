//taken from https://knowledge.udacity.com/questions/539331



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputText = document.getElementById('name').value
    Client.checkForUrl(inputText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
