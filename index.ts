document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const toggleSkillsButton = document.getElementById("toggle-skills");

    if (skillsSection && toggleSkillsButton) {
        toggleSkillsButton.addEventListener("click", () => {
            skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
        });
    }
});
