const content = document.getElementById("content");
const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dummyjson.com/users/1", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const responseData = JSON.parse(xhr.responseText);

      const card = `
            <div class="card" style="width: 18rem;">
              <img src="${responseData.image}" class="card-img-top" alt="${responseData.firstName} ${responseData.lastName}">
              <div class="card-body">
                <h5 class="card-title">${responseData.firstName} ${responseData.lastName}</h5>
                <p class="card-text">
                  Email: ${responseData.email} <br>
                  Phone: ${responseData.phone} <br>
                  Age: ${responseData.age} <br>
                  Gender: ${responseData.gender}
                </p>
              </div>
            </div>
          `;
      content.innerHTML = card;
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error("An error occurred during the AJAX request.");
  };

  xhr.send();
});
