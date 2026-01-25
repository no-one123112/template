const courses = [
  {
    title: "Web Development",
    instructor: "Ahmed Ali",
    desc: "Learn HTML, CSS, and JavaScript from scratch."
  },
  {
    title: "Data Science",
    instructor: "Sara Mohamed",
    desc: "Python, data analysis, and machine learning basics."
  }
];

const list = document.getElementById("coursesList");

courses.forEach((course, index) => {
  const div = document.createElement("div");
  div.className = "course";
  div.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.instructor}</p>
    <a class="btn" onclick="openDetails(${index})">View Details</a>
  `;
  list.appendChild(div);
});

function openPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openDetails(index) {
  const c = courses[index];
  dTitle.textContent = c.title;
  dInstructor.textContent = c.instructor;
  dDesc.textContent = c.desc;
  openPage("details");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function toggleDir() {
  document.documentElement.dir =
    document.documentElement.dir === "rtl" ? "ltr" : "rtl";
}
