function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users/as')
            .then((res) => res.json())
            .then(result => resolve(result))
            .catch((err) => reject(`Error:${err}` ))
        }, 4000)
    })
}

function displayData(data) {
    console.log(`We got users:`, data)
}

function onError(err) {
    console.log("WE got error", err)
}

getUsers()
.then(displayData)
.catch(onError)