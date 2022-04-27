//Load browser
window.addEventListener("load", function () {
  //Spinner effect
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".spinner").style.display = "block";
//Get Html tags
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");
    const cards = document.querySelectorAll(".card");
    const projects = document.querySelector(".portfolio");
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
      });
    });
//Gallery slider
    const slider = function () {
      const slides = document.querySelectorAll(".slide");
      const btnLeft = document.querySelector(".left");
      const btnRight = document.querySelector(".right");

      let curSlide = 0;
      const maxSlide = slides.length;

      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${50 * (i - slide)}%)`)
        );
      };

      // Next slide
      const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        goToSlide(curSlide);
      };

      const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide - 1;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
      };

      const init = function () {
        goToSlide(0);
      };
      init();

      // Event handlers
      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", prevSlide);

      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
      });
    };
    slider();

    // Mouse over and mouse out effect
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.classList.add("activecard");
      });
      card.addEventListener("mouseout", () => {
        card.classList.remove("activecard");
      });
    });
    //Scrolling effect
    window.addEventListener("scroll", () => {
      const viewport = (window.innerHeight / 5) * 4;
      const projectsection = projects.getBoundingClientRect().top;
      if (projectsection < viewport) {
        cards.forEach((card) => card.classList.add("reveal"));
      }
    });
    //Time and date
    const datetag = document.querySelector(".calender");
    const timetag = document.querySelector(".clock");
    const date = new Date();
    datetag.innerHTML = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    timetag.innerHTML = ` ${date.getHours()}:${date.getMinutes()}`
});
