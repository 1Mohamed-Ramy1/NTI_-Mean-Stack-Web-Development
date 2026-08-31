// Task 6: TDZ with let

try {
    console.log(a);
    let a = 5;
} catch (error) {
    console.log(error.message);
}
