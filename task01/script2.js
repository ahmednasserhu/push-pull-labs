const content = document.getElementById("content");
const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", () => {
  $.ajax({
    method: "GET",
    url: "https://dummyjson.com/users/1",
    success: (res) => {
      const card = `
            <div class="card" style="width: 18rem;">
              <img src="${res.image}" class="card-img-top" alt="${res.firstName} ${res.lastName}">
              <div class="card-body">
                <h5 class="card-title">${res.firstName} ${res.lastName}</h5>
                <p class="card-text">
                  Email: ${res.email} <br>
                  Phone: ${res.phone} <br>
                  Age: ${res.age} <br>
                  Gender: ${res.gender}
                </p>
              </div>
            </div>
          `;
      content.innerHTML = card;
    },
    error: () => {
      console.log("error");
    },
  });
});
