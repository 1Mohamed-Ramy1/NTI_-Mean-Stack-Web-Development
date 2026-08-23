document.getElementById('runBtn').addEventListener('click', function () {
  const course = { title: 'JS', hours: 12, level: 'Beginner' };
  course.title = 'JavaScript Fundamentals';
  console.log(course.hours);
  console.log(course);
});