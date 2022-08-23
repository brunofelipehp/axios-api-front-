const url = "http://localhost:5510/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
  .then(response => {
    const {name, city, avatar} = response.data
    userName.textContent = name
    userCity.textContent = city
    userAvatar.src = avatar
  })
  .catch(error => console.error(error))
}

function addNewUser(newUser) {
  axios.post(url, newUser)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
  .then(response => {
    apiStatus.textContent = response.data
  })
  .catch(error => console.error(error))
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
  .then(response => {
    apiStatus.textContent = response.data
  })
  .catch(error => console.error(error))
}

const userUpdated = {
  name: "Bruno Felipe",
  avatar: "https://picsum.photos/200/300",
  city: "São Paulo"
}

const newUser = {
  name: "Juliana Satiro",
  avatar: "https://picsum.photos/200/300",
  city: "São Paulo"
}

getUsers()
getUser(7)
//updateUser(3, userUpdated)
//addNewUser(newUser)
deleteUser(2)