const menu = document.querySelector(".menulist");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");

const showMenu = () => {
  menu.classList.add("show-menu");
  open.classList.add("hide-menu");
  close.classList.add("show-menu");
};
const closeMenu = () => {
  menu.classList.remove("show-menu");
  open.classList.remove("hide-menu");
  close.classList.remove("show-menu");
};

const projectdet = [
  {
    projecttitle: "Pretty Stones - Responsive website for selling jewels",
    tools: "Figma, Prottapp",
    timeline: "Jun- Jul 1st 2023",
    img: "Assets/img/Frame 50.png",
    link: "https://www.behance.net/gallery/174136665/Jewelry-Responsive-Case-Study-UIUX ",
  },
  {
    projecttitle: "Crew Skl. - Dashboard for online learning platform",
    tools: "Figma, Prottapp, Canva",
    timeline: "Aug- Sep 2nd 2023",
    img: "Assets/img/Frame 40014.png",
    link: "https://www.behance.net/gallery/178566505/Crew-Skl-Student-Dashboard-design ",
  },
  {
    projecttitle:
      "Premier Petals - Landing Page for Plants selling & consulting website",
    tools: "Figma, PS, Canva",
    timeline: "Feb - Mar 11th 2024",
    img: "Assets/img/Frame 40014-1.png",
    link: "https://www.behance.net/gallery/193577331/Premier-Petals-Plants-Selling-Website-UI ",
  },
  {
    projecttitle:
      "Clean Connect (C&C) - Mobile Application for laundry services",
    tools: "Figma, PS, Canva",
    timeline: "Apr - May 8th 2024s",
    img: "Assets/img/Frame 40014-2.png",
    link: "https://www.behance.net/gallery/198120203/C-C-Laundry-App-UI-Design ",
  },
  {
    projecttitle:
      "Majestic Junior (MJ) - App for Parental control app for child safety",
    tools: "Figma, PS, Canva",
    timeline: "Sep - Nov 30th 2023",
    img: "Assets/img/Frame 40014-3.png",
    link: "https://www.behance.net/gallery/185542665/Parental-Control-App-UXUI-(MJ) ",
  },
];

document.querySelector(".project").innerHTML = projectdet.map((e) => {
  return `<div class="project-con">
  
<div class="project-img">
<a href="${e.link}"  target="_blank">
  <img src="${e.img} "alt="" />
  </a>
</div>
<div class="project-dec">
  <div class="project-text">
    <p>
     ${e.projecttitle}
    </p>
  </div>
  <div class="project-sub-text">
    <div class="pro-sub">
      <div class="tool">
        <p class="tool-title">Tool</p>
        <p>${e.tools}</p>
      </div>
      <div class="time-line">
        <p class="tool-title">Timeline</p>
        <p>${e.timeline}</p>
      </div>
    </div>
    <div class="pro-nav-btn">
      <i class="bx bx-right-arrow-alt"></i>
    </div>
  </div>
</div>
</div>`;
});

ScrollReveal().reveal(".title", {
  delay: 900,
  direction: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(
  ".social-container ,.project-land,.footer-content h1 ,.pro-text,.year-res",
  {
    delay: 600,
    direction: "bottom",
    distance: "100px",
  }
);
ScrollReveal().reveal(
  ".menu,.avathar,.sub-title,.heading,.btn-dow ,.footer-content p",
  {
    delay: 700,
    direction: "top",
    distance: "-100px",
  }
);
ScrollReveal().reveal(".paper1 ,.btn1,.titlelogo,.res-img,.res-dec p", {
  delay: 300,
  origin: "right",
  distance: "100px",
});
ScrollReveal().reveal(".paper2,.btn2,.arrologo,.pagelogo,.res-btn,.spl-text", {
  delay: 300,
  origin: "left",
  distance: "100px",
});
ScrollReveal().reveal(
  ".titlelogo,.img-pro,.img-pro2,.img-pro3,.project .project-con:nth-child(2n)",
  {
    delay: 400,
    origin: "right",
    distance: "100px",
  }
);
ScrollReveal().reveal(
  ".arrologo,.pagelogo,.about-des p,.about-des ol li,.project .project-con:nth-child(2n-1)",
  {
    delay: 500,
    origin: "left",
    distance: "100px",
  }
);
