import { API_URL, sendRequest } from "./api.js";

const getButton = document.getElementById("getButton");
const postsContainer = document.getElementById("postsContainer");
const postForm = document.getElementById("postForm");
const putForm = document.getElementById("putForm");
const deleteForm = document.getElementById("deleteForm");
const message = document.getElementById("message");
const result = document.getElementById("result");

function showMessage(text) {
  message.textContent = text;
}

function showResult(data) {
  result.textContent = JSON.stringify(data);
}

getButton.addEventListener("click", () => {
  sendRequest("GET", API_URL, null, (status, responseText) => {
    if (status >= 200 && status < 300) {
      const posts = JSON.parse(responseText);
      postsContainer.innerHTML = "";

      posts.slice(0, 10).forEach((post) => {
        const postElement = document.createElement("p");
        postElement.textContent = `${post.id} - ${post.title}`;
        postsContainer.appendChild(postElement);
      });

      showMessage("GET request succeeded");
    } else {
      showMessage("GET request failed");
    }
  });
});

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    title: document.getElementById("postTitle").value,
    body: document.getElementById("postBody").value,
    userId: 1
  };

  sendRequest("POST", API_URL, data, (status, responseText) => {
    if (status >= 200 && status < 300) {
      showMessage("POST request succeeded");
      showResult(JSON.parse(responseText));
      postForm.reset();
    } else {
      showMessage("POST request failed");
    }
  });
});

putForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.getElementById("putId").value;
  const data = {
    id: Number(id),
    title: document.getElementById("putTitle").value,
    body: document.getElementById("putBody").value,
    userId: 1
  };

  sendRequest("PUT", `${API_URL}/${id}`, data, (status, responseText) => {
    if (status >= 200 && status < 300) {
      showMessage("PUT request succeeded");
      showResult(JSON.parse(responseText));
    } else {
      showMessage("PUT request failed");
    }
  });
});

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.getElementById("deleteId").value;

  sendRequest("DELETE", `${API_URL}/${id}`, null, (status) => {
    if (status >= 200 && status < 300) {
      showMessage("DELETE request succeeded");
      showResult(`Post ${id} was deleted`);
    } else {
      showMessage("DELETE request failed");
    }
  });
});
