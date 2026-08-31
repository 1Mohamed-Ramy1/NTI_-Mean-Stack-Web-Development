// Task 15: var vs let in loops

const handlersVar = {};
for (var i = 0; i < 3; i++) {
    handlersVar["fn" + i] = function () {
        return i;
    };
}
console.log(handlersVar.fn0());
console.log(handlersVar.fn1());
console.log(handlersVar.fn2());

const handlersLet = {};
for (let i = 0; i < 3; i++) {
    handlersLet["fn" + i] = function () {
        return i;
    };
}
console.log(handlersLet.fn0());
console.log(handlersLet.fn1());
console.log(handlersLet.fn2());
