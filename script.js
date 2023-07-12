const fetchData = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(new Error(response.statusText));
            }
        })
        .catch(error => {
            reject(error);
        });
    })
}

const url = "https://catfact.ninja/fact";

fetchData(url)
    .then(data => {
        document.getElementById("cat-fact").innerHTML = data.fact;
        document.getElementById("fact-number").innerHTML = `#${data.length}`;
    })
    .catch(error => console.log(error.message))


