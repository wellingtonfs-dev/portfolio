function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;
  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;
  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;
  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = "tel:${profileData.phone}";
  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.harSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map(
      (project) => `<li>
                        <h3 class="github">${project.name}</h3>
                        <a href="${project.url}" target="_blank">Github</a>
                    </li>  `
    )
    .join("");
}

function updateExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );
  professionalExperience.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `<li>
                        <h3>${experience.name}</h3>
                        <p class="period">${experience.period}</p>
                        <p>${experience.description}</p>
                    </li>
                `;
    })
    .join("");
}

(async function () {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateExperience(profileData);
})();