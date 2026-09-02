
console.log("hello modules js");

// =====================================================================
// JS Modules Lab — Day 8
// =====================================================================


// =====================================================================
// 1) Named Import — استيراد قيمة واحدة بالاسم
// =====================================================================
// لازم الاسم يطابق الـ export في module1.js
// import {name , pi } from './module1.js'
//  // import {name , pi} from './module1.js'
// console.log("1) name =", name); // "Ahmed"
// console.log("1) pi =", pi); // 3.14159


// =====================================================================
// 2) Multiple Named Imports — أكتر من حاجة في سطر واحد
// =====================================================================

// import { add , subtract, divide,multiply  } from "./module1.js";

// console.log("2) add(3, 4)      =", add(3, 4));       // 7
// console.log("2) subtract(10, 4) =", subtract(10, 4)); // 6
// console.log("2) divide(10, 2)   =", divide(10, 2));   // 5
// console.log("2) multiply(2, 3)  =", multiply(2, 3));  // 6


// =====================================================================
// 3) Rename with `as` — إعادة تسمية وقت الاستيراد
// =====================================================================
// مفيد لو الاسم متعارض، أو عايز اسم أوضح في ملفك
// let name ="ali" ;
// console.log(name);

// function add (){
//     console.log("add fun");
    
// }
// import { name as fname, add as sum} from "./module1.js";

// console.log("3) firstName =", fname); // "Ahmed"
// console.log("3) sum(2, 5) =", sum(2, 5)); // 7
// console.log(name); // Error — الاسم الأصلي مش موجود هنا


// =====================================================================
// 4) Default Import — استيراد الـ default
// =====================================================================
// ملاحظة مهمة:
//   - مفيش { } حوالين الاسم
//   - تقدر تسميه أي اسم تحبه (person / user / anything)

// import person from "./module1.js";

// console.log("4) person.name =", person.name); // "Ali"
// console.log("4) person.age  =", person.age);  // 25
// person.greet(); // "Hello, my name is Ali"

// // نفس الـ default باسم تاني — شغال عادي:
// // import user from "./module1.js";
// // user.greet();


// =====================================================================
// 5) Default + Named مع بعض
// =====================================================================
// الـ default الأول (من غير { })، وبعدين الـ named جوّا { }

// import person, { add, multiply } from "./module1.js";

// person.greet();
// console.log("5) add(2, 3)      =", add(2, 3));      // 5
// console.log("5) multiply(2, 3) =", multiply(2, 3)); // 6


// =====================================================================
// 6) Import Arrays (Named)
// =====================================================================

// import { fruits, vegetables } from "./module1.js";

// console.log("6) fruits     =", fruits);     // ["Apple", "Banana", "Cherry"]
// console.log("6) vegetables =", vegetables); // ["Carrot", "Lettuce", "Spinach"]


// =====================================================================
// 7) Import All with `*` — كل الـ named exports في object واحد
// =====================================================================
// بيرجع object فيه كل الـ Named exports
// الـ default بيتحط تحت المفتاح: default

// import * as math from "./module1.js";

// console.log("7) math object =", math);
// console.log("7) math.add(2, 4)      =", math.add(2, 4));       // 6
// console.log("7) math.subtract(10, 4) =", math.subtract(10, 4)); // 6
// console.log("7) math.name           =", math.name);            // "Ahmed"
// console.log("7) math.default       =", math.default);          // الـ person object
// math.default.greet();


// =====================================================================
// 8) Math helpers — multiply / divide
// =====================================================================

// import { multiply, divide } from "./module1.js";

// console.log("8) multiply(2, 3) =", multiply(2, 3)); // 6
// console.log("8) divide(6, 3)   =", divide(6, 3));   // 2


// =====================================================================
// 9) أخطاء شائعة 
// =====================================================================
//
// ❌ نسيت type="module" في الـ HTML
//    → SyntaxError: Cannot use import statement outside a module
//
// ❌ فتحت الصفحة بـ file:// من غير Live Server
//    → CORS / Failed to load module
//
// ❌ Named import من غير { }
//    // import add from "./module1.js";  ← غلط (add مش default)
//
// ❌ Default import بـ { }
//    // import { person } from "./module1.js";  ← غلط (person هو default)
//
// ❌ نسيت امتداد الملف .js
//    // import { add } from "./module1";  ← غالباً هيفشل في المتصفح
//
// ❌ غلطت في اسم الـ Named export
//    // import { Add } from "./module1.js";  ← Error (case sensitive)



// =====================================================================
// ملخص سريع
// =====================================================================
// | في module1.js              | في main.js                              |
// |----------------------------|-----------------------------------------|
// | export const x             | import { x } from "./module1.js"        |
// | export function f() {}     | import { f } from "./module1.js"        |
// | export default person      | import person from "./module1.js"       |
// | (named + default)          | import person, { add } from "..."       |
// | كل الـ named               | import * as all from "./module1.js"     |
// | إعادة تسمية                | import { name as firstName } from "..." |
