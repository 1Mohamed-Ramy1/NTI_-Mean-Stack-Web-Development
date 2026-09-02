/**
 * Steps (with DOM):
 * 1) Create instance
 * 2) open(method, url, async)
 * 3) attach event listeners (load, error)
 * 4) send()
 * 5) On success → update DOM with Bootstrap cards
 */

const URL = "https://jsonplaceholder.typicode.com/posts";
const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer");

loadBtn.addEventListener("click", () => {
  // // 1) Create instance
  const xhr = new XMLHttpRequest();
  // // 2) Prepare request
  xhr.open("GET", URL);
  // 3b) Listen for load
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let posts = [];
      try {
        posts = JSON.parse(xhr.responseText);
      } catch {
        console.error("Failed to parse JSON");
      }
      // //Clear old content
      postsContainer.innerHTML = "";
      // //5) Render posts into Bootstrap cards
      posts.slice(0, 6).forEach((post) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        col.innerHTML = `
                  <div class="card h-100 shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text text-muted">${post.body}</p>
                    </div>
                  </div>
                `;
        postsContainer.appendChild(col);
      });
    } else {
      console.error("Request failed with status:", xhr.status);
      postsContainer.innerHTML =
        '<div class="alert alert-danger">Failed to load posts.</div>';
    }
  });
  // 3c) Listen for error
  xhr.addEventListener("error", () => {
    console.error("Network error");
    postsContainer.innerHTML =
      '<div class="alert alert-danger">Network error occurred.</div>';
  });
  // //4) Send the request
  xhr.send();
});
