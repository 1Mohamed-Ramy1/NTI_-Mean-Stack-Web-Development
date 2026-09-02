/**
 * XMLHttpRequest — POST (إضافة Post)
 * ==================================
 * الفرق عن GET:
 *   - method = "POST"
 *   - بنبعت data في send()
 *   - لازم نحدد Content-Type في الـ header
 *
 * الخطوات:
 *   1) استلام بيانات الفورم
 *   2) إنشاء instance
 *   3) open("POST", url)
 *   4) setRequestHeader (نوع البيانات)
 *   5) ربط listeners (load / error)
 *   6) send(JSON.stringify(payload))
 *
 */

const URL = "https://jsonplaceholder.typicode.com/posts";
const postForm = document.getElementById("postForm");
const resultContainer = document.getElementById("resultContainer");

postForm.addEventListener("submit", (e) => {
  // منع الـ reload الافتراضي للفورم
  e.preventDefault();

  // ─────────────────────────────────────────────
  // 1) قراءة بيانات الفورم
  // ─────────────────────────────────────────────
  const title = document.getElementById("titleInput").value.trim();
  const body = document.getElementById("bodyInput").value.trim();

  if (!title || !body) {
    alert("Please fill in both fields");
    return;
  }

  console.log("[1] Form data:", { title, body });

  // ─────────────────────────────────────────────
  // 2) إنشاء instance
  // ─────────────────────────────────────────────
  const xhr = new XMLHttpRequest();
  console.log("[2] Created XMLHttpRequest instance");

  // ─────────────────────────────────────────────
  // 3) تجهيز طلب POST
  //    المعامل التالت true = async (الافتراضي)
  // ─────────────────────────────────────────────
  xhr.open("POST", URL, true);
  console.log("[3] open('POST', url) called");

  // ─────────────────────────────────────────────
  // 4) نخبر السيرفر إننا نبعت JSON
  //    مهم في POST — من غير الـ header السيرفر مش هيفهم الـ body
  // ─────────────────────────────────────────────
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); // meta data
  console.log("[4] Content-Type header set to JSON");

  // ─────────────────────────────────────────────
  // 5) ربط الـ listeners — لازم قبل send()
  // ─────────────────────────────────────────────

  // load → الطلب خلص (شيك على status)
  xhr.addEventListener("load", () => {
    console.log("[load] status =", xhr.status);

    if (xhr.status >= 200 && xhr.status < 300) {
      const newPost = JSON.parse(xhr.responseText);
      console.log("    Success! Server response:", newPost);

      // عرض النتيجة في الصفحة
      resultContainer.innerHTML += `
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <h5 class="card-title">${newPost.title}</h5>
            <p class="card-text">${newPost.body}</p>
            <span class="badge bg-primary">Post ID: ${newPost.id}</span>
          </div>
        </div>
      `;
    } else {
      console.error("    Failed with status:", xhr.status);
      resultContainer.innerHTML =
        '<div class="alert alert-danger">Failed to add post.</div>';
    }
  });

  // error → مشكلة شبكة فقط (مش لو السيرفر رجّع 404)
  xhr.addEventListener("error", () => {
    console.error("[error] Network problem");
    resultContainer.innerHTML =
      '<div class="alert alert-danger">Network error.</div>';
  });

  // ─────────────────────────────────────────────
  // 6) إرسال الطلب + الـ data
  //    ملاحظة: send بياخد string — عشان كده JSON.stringify
  //    jsonplaceholder بيرجع الـ post مع id جديد (وهمي)
  // ─────────────────────────────────────────────
  const payload = { title, body, userId: 1 };
  xhr.send(JSON.stringify(payload));
  console.log("[5] send() called with payload:", payload);
});

/**
 * ملخص الفرق GET vs POST:
 *   GET  → xhr.open("GET", url)  ثم xhr.send()
 *   POST → xhr.open("POST", url)
 *          xhr.setRequestHeader("Content-Type", "application/json")
 *          xhr.send(JSON.stringify(data))
 */
