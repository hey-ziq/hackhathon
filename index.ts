function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

function generateResume(): void {
    const name = (document.getElementById('userName') as HTMLInputElement).value;
    const email = (document.getElementById('userEmail') as HTMLInputElement).value;
    const university = (document.getElementById('userUniversity') as HTMLInputElement).value;
    const skills = (document.getElementById('userSkills') as HTMLInputElement).value.split(',');

    (document.getElementById('name') as HTMLElement).innerText = name;
    (document.getElementById('email') as HTMLElement).innerText = email;
    (document.getElementById('university') as HTMLElement).innerText = university;

    const skillsList = document.getElementById('skills-list') as HTMLUListElement;
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}
