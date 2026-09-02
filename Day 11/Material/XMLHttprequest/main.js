/**
 * ============================
 * الخطوات بالترتيب الصح:
 *   1) إنشاء instance
 *   2) open(method, url)
 *   3) ربط الـ event listeners (قبل send)
 *   4) send()
 *
 */


// ─────────────────────────────────────────────
// 1) إنشاء instance من XMLHttpRequest
// ─────────────────────────────────────────────
const URL = "https://jsonplaceholder.typicode.com/posts"; // get

const xhr = new XMLHttpRequest();
// console.log("[1] Created XMLHttpRequest instance");
// console.log("    readyState =", xhr.readyState); // 0 = UNSENT

// ─────────────────────────────────────────────
// 2) تجهيز الطلب: method + URL
//    مهم: open مش بيبعت الطلب — بس بيجهّزه
// ─────────────────────────────────────────────
xhr.open("GET", URL);
// console.log("[2] open('GET', url) called");
// console.log("    readyState =", xhr.readyState); // 1 = OPENED

// ─────────────────────────────────────────────
// 3) ربط الـ listeners — لازم قبل send()
// ─────────────────────────────────────────────

// 3a) readystatechange → بيتنفذ مع كل تغيير في readyState (0→4)
// xhr.addEventListener("readystatechange", () => {
//   console.log("    readystatechange → readyState =", xhr.readyState);

//   // بعد استلام الـ headers نقدر نقرأ status
//   if (xhr.readyState === 2) {
//     console.log("    Headers received. status =", xhr.status, xhr.statusText);
//   }

//   // DONE = الطلب خلص (نجاح أو فشل من السيرفر)
//   if (xhr.readyState === 4) {
//     console.log("[DONE] Request finished. status =", xhr.status);

//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("    Success! responseText length =", xhr.responseText.length);

//       try {
//         const data = JSON.parse(xhr.responseText);
//         console.log("    Parsed JSON (first item):", data[0]);
//         console.log("    Total posts:", data.length);
//       } catch {
//         console.log("    Response was not valid JSON.");
//       }
//     } else {
//       console.error("    Request failed with status:", xhr.status);
//     }
//   }
// });

// 3b) load → بيتنفذ مرة واحدة لما الطلب يخلص (حتى لو status = 404)
xhr.addEventListener("load", () => {
  console.log("[load] event fired. status =", xhr.response);
});

// 3c) error → بيتنفذ لو حصل مشكلة شبكة (مش لو السيرفر رجّع 404)
xhr.addEventListener("error", () => {
  console.log("[error] Network problem — request never reached the server.",xhr.statusText );
});

// ─────────────────────────────────────────────
// 4) إرسال الطلب فعليًا
//    ملاحظة: response لسه فاضي هنا — الرد بيجي async بعدين
// ─────────────────────────────────────────────
xhr.send();
// console.log("[3] send() called — waiting for response...");
// console.log("    response right after send() =", xhr.response); // فاضي دلوقتي

/**
 * معاني readyState:
 *   0  UNSENT            → لسه ما استدعيناش open()
 *   1  OPENED            → استدعينا open()
 *   2  HEADERS_RECEIVED  → استلمنا status والـ headers
 *   3  LOADING           → بنستلم الـ response body
 *   4  DONE              → الطلب خلص (نجاح أو فشل)
 *
 * فرق مهم:
 *   - load   → الطلب خلص (شيك على status جواه)
 *   - error  → مشكلة شبكة فقط
 *   - status 2xx → نجاح من السيرفر
 */
