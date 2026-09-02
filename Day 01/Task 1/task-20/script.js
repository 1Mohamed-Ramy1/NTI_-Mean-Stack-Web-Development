document.getElementById('runBtn').addEventListener('click', function () {
  const a = Number(prompt('First number:') || 0);
  const b = Number(prompt('Second number:') || 0);

  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
  console.log(`${a} % ${b} = ${a % b}`);
  console.log(`${a} ** ${b} = ${a ** b}`);
});