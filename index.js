function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}
function generateResume() {
    var name = document.getElementById('userName').value;
    var email = document.getElementById('userEmail').value;
    var university = document.getElementById('userUniversity').value;
    var skills = document.getElementById('userSkills').value.split(',');
    document.getElementById('name').innerText = name;
    document.getElementById('email').innerText = email;
    document.getElementById('university').innerText = university;
    var skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}
