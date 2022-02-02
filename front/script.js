fetch('http://localhost:8080/')
    .then(res => res.json())
    .then(data => {data.forEach(car => {
        const createCarWrapper = document.createElement('li')
        createCarWrapper.textContent = car
        document.querySelector('ul').append(createCarWrapper)
    })})