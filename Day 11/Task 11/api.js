const API_URL = "https://jsonplaceholder.typicode.com/posts";

export function sendRequest(method, url, data, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  if (data) {
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  }

  xhr.addEventListener("load", () => {
    callback(xhr.status, xhr.responseText);
  });

  xhr.addEventListener("error", () => {
    callback(0, "Network error");
  });

  if (data) {
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}

export { API_URL };
