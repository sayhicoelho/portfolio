(function() {
  "use strict";

  const lang = {
    pt: {
      title: "Dê vida à sua nova ideia de negócio!",
      bio:
        "Trabalho com desenvolvimento de aplicações web desde 2017 focando em tecnologias modernas para um desenvolvimento cada vez mais rápido, fluído e com um código limpo mantendo sempre sua manutenibilidade confortável para meus companheiros de equipe.",
      skills: "Habilidades",
      certificates: "Certificados"
    },
    es: {
      title: "¡Dé vida a su nueva idea de negocio!",
      bio:
        "Trabajo con desarrollo de aplicaciones web desde 2017 centrándose en tecnologías modernas para un desarrollo cada vez más rápido, fluido y con un código limpio manteniendo siempre su mantenimiento cómodo para mis compañeros de equipo.",
      skills: "Habilidades",
      certificates: "Certificados"
    }
  };

  const setLocaleString = lang => {
    document.querySelector("section.skills > .section-title").textContent =
      lang.skills;
    document.querySelector(
      "section.certificates > .section-title"
    ).textContent = lang.certificates;
    document.querySelector("blockquote").textContent = lang.bio;
    document.title = lang.title;
  };

  fetch(
    "https://api.ipdata.co?api-key=050f6a6e029d2251bc51af583f5ef4ebcafcb9f82187eb42c781feb1"
  )
    .then(response => response.json())
    .then(response => {
      const country = response.country_name;

      switch (country) {
        case "Brazil":
        case "Portugal":
        case "Angola":
          setLocaleString(lang.pt);
          break;
        case "Spain":
          setLocaleString(lang.es);
      }
    });
})();
