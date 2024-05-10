const content = document.getElementById("content");

function doPolling(lastModified) {
  $.ajax({
    method: "POST",
    url: "http://127.0.0.1:8001/api/polling/",
    data: { lastModified: lastModified },
    timeout: 60000, 
    success: function (res) {
      const data = res;

      if (
        data.server_time > lastModified &&
        data.applications &&
        data.applications.length > 0
      ) {
        const application = data.applications[0];

        content.innerHTML = `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Application ID: ${application.id}</h5>
              <p class="card-text">
                Email: ${application.email} <br>
                Phone Number: ${application.phoneNumber} <br>
                Status: ${application.status} <br>
                Created At: ${application.created_at} <br>
                Updated At: ${application.updated_at} <br>
              </p>
              <a href="${application.resume}" class="btn btn-primary" target="_blank">View Resume</a>
            </div>
          </div>
        `;

        doPolling(data.server_time);
      } else {
        console.log("No update.");
      }
    },
    error: function (error) {
      console.error("Error during polling:", error);

      setTimeout(() => doPolling(lastModified), 5000); 
    },
  });
}

// doPolling(0);
