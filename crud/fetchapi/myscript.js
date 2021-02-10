function createData() {
  const newSiteName = document.getElementById("siteName").value;
  const newSiteURL = document.getElementById("siteURL").value;

  if (newSiteName === "" || newSiteURL === "") return;

  const siteInfo = {
    name: newSiteName,
    url: newSiteURL,
  };

  fetch("http://localhost:3000/sites", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(siteInfo),
  })
    .then(() => {
      document.getElementById("siteName").value = "";
      document.getElementById("siteURL").value = "";
    })
    .catch((err) => console.log(err));
}

function readData() {
  const list = document.getElementById("dataList");
  list.innerHTML = "";

  fetch("http://localhost:3000/sites")
    .then((res) => res.json())
    .then((sites) => {
      sites.map((site) => {
        list.innerHTML += `<li>${site.id} ${site.name} ${site.url}</li>`;
      });
    })
    .catch((err) => console.log(err));
}

function updateData() {
  const updateId = document.getElementById("updateId").value;
  const updateName = document.getElementById("updateName").value;
  const updateURL = document.getElementById("updateURL").value;

  if (updateId === "" || updateName === "" || updateURL === "") return;

  const siteInfo = {
    name: updateName,
    url: updateURL,
  };

  fetch(`http://localhost:3000/sites/${updateId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(siteInfo),
  })
    .then(() => {
      document.getElementById("updateId").value = "";
      document.getElementById("updateName").value = "";
      document.getElementById("updateURL").value = "";
    })
    .catch((err) => console.log(err));
}

function deleteData() {
  const deleteId = document.getElementById("deleteId").value;

  if (deleteId === "") return;

  fetch(`http://localhost:3000/sites/${deleteId}`, {
    method: "DELETE",
  })
    .then(() => {
      document.getElementById("deleteId").value = "";
    })
    .catch((err) => console.log(err));
}
