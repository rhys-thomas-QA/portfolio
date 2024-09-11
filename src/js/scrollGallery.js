import jsIcon from '../assets/icons/js.png';
import tsIcon from '../assets/icons/ts.png';
import pythonIcon from '../assets/icons/python.jpeg';
import cypressIcon from '../assets/icons/cypress.svg';
import playwrightIcon from '../assets/icons/playwright.svg';
import codeceptIcon from '../assets/icons/codecept.png';
import mochaIcon from '../assets/icons/mocha.png';
import postmanIcon from '../assets/icons/postman.png';
import gitIcon from '../assets/icons/git.png';
import appiumIcon from '../assets/icons/appium.webp';
import gatlingIcon from '../assets/icons/gatling.webp';
import jenkinsIcon from '../assets/icons/jenkins.svg.png';
import jiraIcon from '../assets/icons/jira.png';
import notionIcon from '../assets/icons/notion.png';
import amplitudeIcon from '../assets/icons/amplitude.svg.png';

const skills = [
    { name: 'JavaScript', icon: jsIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Cypress', icon: cypressIcon },
    { name: 'Playwright', icon: playwrightIcon },
    { name: 'CodeceptJS', icon: codeceptIcon },
    { name: 'Mocha', icon: mochaIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Appium', icon: appiumIcon },
    { name: 'Gatling', icon: gatlingIcon },
    { name: 'Jenkins', icon: jenkinsIcon },
    { name: 'Jira', icon: jiraIcon },
    { name: 'Notion', icon: notionIcon },
    { name: 'Amplitude', icon: amplitudeIcon }
];

function populateSkills() {
    const container = document.querySelector('.skills-container');
    const skillsHtml = skills.concat(skills).map(skill => `
    <div class="skill-item">
      <img src="${skill.icon}" alt="${skill.name}" width="50" height="50">
    </div>
  `).join('');

    container.innerHTML = skillsHtml;
}

document.addEventListener('DOMContentLoaded', populateSkills);

export { populateSkills };
