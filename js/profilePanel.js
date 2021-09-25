let modal = document.querySelector("#profileModal");
let modalOpener = document.querySelector(".profileSlide");
let modalCloser = document.querySelector(".modalCloser");

modalOpener.addEventListener("click", () => {
  modal.style.display = "flex";
  ProfileModalLoader(profileIndex, false);
});
modalCloser.addEventListener("click", () => {
  modal.style.display = "none";
  ProfileModalLoader(profileIndex, true);
});

const profilesList = [
  {
    name: "Bruno Pitta",
    nick: "Bad Luck For You",
    description:
      "Bruno Pitta, desenvolvedor Front End Pleno, atualmente trabalhando na VX Case, além de trabalhar como monitor no curso da cubos academy em parceria com o ifood. Atualmente estudando Next. Não menos importante, mas ama bastante dark souls e é jogador de mago em qualquer RPG.",
    longDescription:
      "Desenvolvedor Front End Pleno, atualmente trabalhando na VX Case, além de trabalhar como monitor no curso da cubos academy em parceria com o ifood. Atualmente estudando Next. Não menos importante, mas ama bastante dark souls e é jogador de mago em qualquer RPG.Estou habituado com html, css e javascript, além de ter experiência em projetos com angular, vue e React, apesar de ter clara preferência pelo último, devido a isso que decidi escolher o next.Possuo pouco mais de 2 anos de experiência e não estou aberto a novas propostas de trabalho no momento!",
    photo: "profiles/Caio/images/perfil.jpg",
    favActivities: [
      "profiles/Caio/images/league-of-legends.jpg",
      "profiles/Caio/images/yugioh.jpg",
      "profiles/Caio/images/darksouls.jpg",
      "profiles/Caio/images/pokemon.png",
    ],
  },
  {
    name: "Vitor Manoel",
    nick: "CremosinhoBA",
    description:
      "Vitor Manoel, desenvolvedor em desenvolvimento, atualmente fazendo pesquisa na UNEB-ACSO. Atualmente estudando tecnologias web. Não menos importante, mas ama bastante linguagens baixo nível e é joga em emuladores de super nintendo ao sentir nostalgia.",
    longDescription:
      "Vitor Manoel, desenvolvedor em desenvolvimento, atualmente fazendo pesquisa na UNEB-ACSO. Atualmente estudando tecnologias web. Não menos importante, mas ama bastante linguagens baixo nível e é joga em emuladores de super nintendo ao sentir nostalgia. Abertot a propostas de trabalho, estou habituado com html e css, conhecendo também o básico de programação web utilizando PHP. Costumo escrever algoritmos de baixo nível para realização de desafios e projetos de graduação utilizando C,C++ e Python.",
    photo: "profiles/Vitor/images/profile.jpeg",
    favActivities: [
      "profiles/Vitor/images/activity.png",
      "profiles/Vitor/images/activity1.png",
      "profiles/Vitor/images/activity2.png",
      "profiles/Vitor/images/activity4.png",
    ],
  },
];

let profileIndex = 0
let slideBackBtn = document.querySelector(".toBack");
let slideNextBtn = document.querySelector(".toNext");

function ProfileLoader(profileIndex) {
  let profileDesc = document.querySelector(".profileDesc");
  let profileNick = document.querySelector(".profileNick");
  let profileImg = document.querySelector(".profileImg");

  profileDesc.textContent = profilesList[profileIndex].description;
  profileNick.textContent = profilesList[profileIndex].nick;
  profileImg.src = profilesList[profileIndex].photo;
}

function ProfileModalLoader(profileIndex, isLoaded) {
  let profileName = document.querySelector(".profileName");
  let profileLongDesc = document.querySelector(".profileLongDesc");
  let profileActivites = document.querySelector(".profileActivities");


  if (isLoaded == true) {
    profileName.textContent = "";
    profileLongDesc.innerHTML = "";
    profileActivites.innerHTML = "";
  } else {
    profileName.textContent = profilesList[profileIndex].name;
   
    let descriptions = profilesList[profileIndex].longDescription.match(/[^.]+\.[^.]+\.|[^.]+[.!?]/g); 
    descriptions.forEach(paragraph => {
      let p = document.createElement('p');
      p.textContent = paragraph;
      profileLongDesc.appendChild(p)
    });
    

    profilesList[profileIndex].favActivities.forEach(activity => {
      let img = document.createElement('img');
      img.src = activity
      profileActivites.appendChild(img)
    });
  }
}

slideBackBtn.addEventListener("click", () => {
  profileIndex = ((profileIndex - 1) + profilesList.length) % profilesList.length;
  ProfileLoader(profileIndex)
});

slideNextBtn.addEventListener("click", () => {
  profileIndex = (profileIndex + 1) % profilesList.length;
  ProfileLoader(profileIndex)
});

