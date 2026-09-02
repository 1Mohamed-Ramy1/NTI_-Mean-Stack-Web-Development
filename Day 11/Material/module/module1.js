// =====================================================================
// module1.js — ملف الـ EXPORTS (المكتبة)
// =====================================================================
// الفكرة: أي حاجة عايز تستخدمها في ملف تاني → لازم تعملها export من هنا
// وفي الملف التاني تعملها import
//
// نوعين أساسيين:
//   1) Named Export   → export { name } أو export const / function
//   2) Default Export → export default ...  (واحد بس لكل ملف)
// =====================================================================


// =====================================================================
// 1) Named Exports — قيم ومتغيرات
// =====================================================================
// كل واحد ليه اسم ثابت — وقت الـ import لازم تستخدم نفس الاسم
// (أو تعيد تسميته بـ as — هنشوفها في main.js)

export let name = "Ahmed";

export const pi = 3.14159;


// =====================================================================
// 2) Named Exports — Functions
// =====================================================================

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}


// =====================================================================
// 3) Named Exports — Arrays / Objects
// =====================================================================

export const fruits = ["Apple", "Banana", "Cherry"];
export const vegetables = ["Carrot", "Lettuce", "Spinach"];


// =====================================================================
// 4) Default Export — واحد بس لكل ملف
// =====================================================================
// الفرق عن Named:
//   - مش لازم نفس الاسم وقت الـ import
//   - ملف واحد = default واحد بس
//   - تقدر تجمع Named + Default في نفس الملف

const person = {
  name: "Aya",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

export default person;

// let nora = "Nora";
// export default nora; // Named export
// var x =5 ;
// export default  x ;