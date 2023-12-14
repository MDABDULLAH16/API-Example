const LoadUsers = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => DisplayUsers(data));
};

const DisplayUsers = (users) => {
  const getUsersContainer = document.getElementById("user-container");
  const usersName =
    users.results[0].name.first + " " + users.results[0].name.last;
  const userGender = users.results[0].gender;
  const ages = users.results[0].registered.age;
  const userImage = users.results[0].picture.large;
  const email = users.results[0].email;
  const city = users.results[0].location.city;
  const div = document.createElement("div");
  div.innerHTML = `
            <img src=${userImage} alt="">
            <h1>Name: ${usersName} </h1>
            <h3>Gender: ${userGender} </h3>
            <h3>Ages: ${ages} </h3>
            <p>Email: ${email} </p>
            <p>City: ${city} </p>
  `;

  getUsersContainer.appendChild(div);
  console.log(usersName);
  console.log(userGender);
  console.log(users);
};

LoadUsers();
