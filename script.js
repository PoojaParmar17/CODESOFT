const body = document.body;
const darkModeToggle = document.createElement('dark-mode-toggle');
body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const sections = document.querySelectorAll('section, header, footer, .skill, .project, .resume-button');
    sections.forEach(section => section.classList.toggle('dark-mode'));
});