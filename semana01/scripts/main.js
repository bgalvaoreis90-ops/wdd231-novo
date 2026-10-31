const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Ano atual no rodapé
document.querySelector("#anoAtual").textContent =
    new Date().getFullYear();

// Última modificação do documento
document.querySelector("#ultimaModificacao").textContent =
    `Last Modification: ${document.lastModified}`;
    // Exibir e filtrar os cursos
const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");

function displayCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach((course) => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    if (course.concluido) {
      card.classList.add("completed");
    }

    card.textContent = `${course.assunto} ${course.numero}`;
    courseList.appendChild(card);
  });

  const credits = courseArray.reduce(
    (total, course) => total + course.creditos,
    0
  );

  totalCredits.textContent = credits;
}

document.querySelector("#all").addEventListener("click", () => {
  displayCourses(cursos);
});

document.querySelector("#wdd").addEventListener("click", () => {
  displayCourses(cursos.filter((course) => course.assunto === "WDD"));
});

document.querySelector("#cse").addEventListener("click", () => {
  displayCourses(cursos.filter((course) => course.assunto === "CSE"));
});

displayCourses(cursos);