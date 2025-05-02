NavBar();
Modal();
globalSection();
lastestoffers();
ExclusivelyforYou();
exploremore();
signaturedining();
footerAccordian();

function NavBar() {
  const navbar = document.getElementsByClassName("nav")[0];
  const logo = document.getElementsByClassName("align-text-top")[0];
  const link = document.querySelectorAll(".nav-link");
  const btn1 = document.getElementsByClassName("btn1")[0];
  const btn11 = document.getElementsByClassName("btn1")[1];
  const slash = document.querySelector(".slash");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add("changed");

      logo.style.width = "45px";
      logo.style.height = "40px";
      logo.src = "./Assets/tajlogo.png";

      link.forEach((item) => {
        item.classList.remove("text-white");
        item.style.color = "#ad8b3a";
        btn1.style.color = "#ad8b3a";
        btn11.style.color = "#ad8b3a";
        slash.style.color = "#ad8b3a";
      });
    } else {
      navbar.classList.remove("changed");
      logo.style.width = "70px";
      logo.style.height = "65px";
      btn1.style.color = "white";
      btn11.style.color = "white";
      slash.style.color = "white";
      logo.src = "./Assets/eaf9ae941361d173fdbd613ba600197b69471d50-100x88.png";

      link.forEach((item) => {
        item.classList.add("text-white");
        // item.style.color = "";
      });
    }
  });

  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

  dropdownItems.forEach((item) => {
    const link = item.querySelector(".nav-link");

    link.addEventListener("click", (e) => {
      e.preventDefault();

      dropdownItems.forEach((el) => el.classList.remove("open"));
      item.classList.add("open");

      navbar.classList.add("changed");
      logo.style.width = "45px";
      logo.style.height = "40px";
      logo.src = "./Assets/tajlogo.png";

      const allLinks = document.querySelectorAll(".nav-link");

      allLinks.forEach((linkItem) => {
        linkItem.classList.remove("text-white");
        linkItem.style.color = "#ad8b3a";
      });
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("open");
      navbar.classList.remove("changed");
      logo.style.width = "70px";
      logo.style.height = "65px";
      logo.src = "./Assets/eaf9ae941361d173fdbd613ba600197b69471d50-100x88.png";

      const allLinks = document.querySelectorAll(".nav-link");

      allLinks.forEach((linkItem) => {
        linkItem.classList.add("text-white");
        linkItem.style.color = "";
      });
    });
  });
}

function Modal() {
  document.getElementById("searchBar").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("searchBar").style.display = "none";
  });
  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
    document.getElementById("searchBar").style.display = "flex";
  });

  const suggestions = [
    "The Taj Mahal Palace, Mumbai",
    "Taj Fort Aguda Resort & Spa, Goa",
    "Taj Palace, New Delhi",
    "Taj Lake Palace, Udaipur",
    "Taj Malabar Resort & Spa, Cochin",
  ];

  function searchSuggestions() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const list = document.getElementById("suggestionList");
    list.innerHTML = "";

    if (input === "") return;

    const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(input)
    ); // we get what we type here example if we search for taj then taj mahal mumbai will come and taj  fort, taj palace,taj lake ,taj malbar will come

    filtered.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.onclick = () => {
        document.getElementById("searchInput").value = item;
      };
      list.appendChild(li);
    });
    document.querySelector(".modal2").style.height = "390px";
    document.querySelector(".nested").style.display = "none";
    document.querySelector("#suggestionList").style.display = "block";
  }

  function clearSuggestions() {
    const list = document.getElementById("suggestionList");
    list.innerHTML = "";
    list.style.display = "none";

    document.querySelector(".nested").style.display = "flex";

    document.querySelector(".modal2").style.height = "auto";
  }
  document.getElementById("searchInput").addEventListener("input", () => {
    const input = document.getElementById("searchInput").value.trim();
    if (input === "") {
      clearSuggestions();
    } else {
      searchSuggestions();
    }
  });
}

function globalSection() {
  const timeless = document.querySelector(".timeless");
  const iconic = document.querySelector(".iconic");
  const authentic = document.querySelector(".authentic");
  const soulful = document.querySelector(".soulful");
  const imgbgc = document.querySelector(".imgbgcline");

  timeless.addEventListener("mouseover", () => {
    timeless.style.opacity = "1";
    iconic.style.opacity = "0";
    document.querySelector(".authentic").style.opacity = "0";
    document.querySelector(".soulful").style.opacity = "0";
  });

  document.querySelector(".iconic").addEventListener("mouseover", () => {
    timeless.style.opacity = "0";
    document.querySelector(".iconic").style.opacity = "1";
    document.querySelector(".authentic").style.opacity = "0";
    document.querySelector(".soulful").style.opacity = "0";
  });

  document.querySelector(".authentic").addEventListener("mouseover", () => {
    timeless.style.opacity = "0";
    document.querySelector(".iconic").style.opacity = "";
    document.querySelector(".authentic").style.opacity = "1";
    document.querySelector(".soulful").style.opacity = "0";
  });
  document.querySelector(".soulful").addEventListener("mouseover", () => {
    timeless.style.opacity = "0";
    document.querySelector(".iconic").style.opacity = "";
    document.querySelector(".authentic").style.opacity = "0";
    document.querySelector(".soulful").style.opacity = "1";
  });

  timeless.addEventListener("mouseover", () => {
    document.querySelector(".div2").style.backgroundImage = "url(./Assets/1.webp)";
    timeless.style.backgroundColor = "rgba(255, 255, 255, 0.73)";
  });

  document.querySelector(".iconic").addEventListener("mouseover", () => {
    document.querySelector(".div2").style.backgroundImage = "url(./Assets/iconic.png)";
    document.querySelector(".iconic").style.backgroundColor =
      "rgba(255, 255, 255,0.73)";
  });

  document.querySelector(".authentic").addEventListener("mouseover", () => {
    document.querySelector(".div2").style.backgroundImage =
      "url(./Assets/authentic.png)";
    document.querySelector(".authentic").style.backgroundColor =
      "rgba(255, 255, 255, 0.73)";
    document.querySelector(".div2").style.backgroundSize = "cover";
  });

  document.querySelector(".soulful").addEventListener("mouseover", () => {
    document.querySelector(".div2").style.backgroundImage = "url(./Assets/4.jpg)";
    document.querySelector(".soulful").style.backgroundColor =
      "rgba(255, 255, 255, 0.73)";
  });
}

function lastestoffers() {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const cardContainer = document.querySelector(".cards");
  const cards = document.querySelectorAll(".cc");

  let currentIndex = 0;
  const totalCards = cards.length;

  const cardWidth =
    cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

  function updateCarousel() {
    cardContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalCards - 1) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalCards - 2.5;
    }
    updateCarousel();
  });
}

function ExclusivelyforYou() {
  const slideContainer = document.querySelector(".bigsliders");

  const backgroundimg = document.querySelector(".bigsliders");
  const arr = [
    '<img src="./Assets/s2.avif" class="card-img-top responsivecard" alt="...">',
    '<img src="./Assets/s3.avif" alt="First Slide" width="700" class="card-img-top responsivecard" />',
    '<img src="./Assets/s4.avif" alt="Second Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s5.avif" alt="Third Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s6.avif" alt="Fourth Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s7.avif" alt="Fifth Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s8.avif" alt="Fifth Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s9.avif" alt="Fifth Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s10.avif" alt="Fifth Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s11.avif" alt="Fifth Slide" class="card-img-top responsivecard" />',
    '<img src="./Assets/s12.avif" alt="Fifth Slide" class="card-img-top responsivecard" />',
  ];

  let currentSlide = 0;

  function updateSlide() {
    const backgroundUrl = arr[currentSlide].match(/src="([^"]+)"/)[1];

    backgroundimg.style.backgroundImage = `url(${backgroundUrl})`;
    backgroundimg.style.transition = "background-image 0.5s ease";
    slideContainer.style.transition = "background-image 0.5s ease";
    slideContainer.innerHTML = `
    <div class="prevbtn">
      <i class="bi bi-chevron-left"></i>
      <h4>TIMELESS <br> WEDDINGS</h4>
    </div>
    <div class="cardimages">
      <div class="card bigcard">
        ${arr[currentSlide]}
        <div class="card-body big-body">
          <h5 class="card-title">TAJ HOLIDAYS</h5>
          <p class="card-text bigcardtext">
            Go beyond the ordinary and craft enduring memories with a perfectly curated Taj Holiday.
          </p>
          <a href="#" class="bigmore">MORE ></a>
        </div>
      </div>
    </div>
    <div class="nextbtn">
      <h4>WOYAGE- <br> DAYCATIONS</h4>
      <i class="bi bi-chevron-right"></i>
    </div>`;

    document.querySelector(".nextbtn").addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % arr.length;
      updateSlide();
    });

    document.querySelector(".prevbtn").addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + arr.length) % arr.length;
      updateSlide();
    });
  }

  updateSlide();
}

function exploremore() {
  const prevBtn = document.querySelector(".prevv");
  const nextBtn = document.querySelector(".nextt");
  const cardContainer = document.querySelector(".cardss");
  const cards = document.querySelectorAll(".c");

  let currentIndex = 0;
  const totalCards = cards.length;

  const cardWidth =
    cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

  function updateCarousel() {
    cardContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalCards - 1) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalCards - 2.5;
    }
    updateCarousel();
  });
}

function signaturedining() {
  const prevBtn = document.querySelector(".prev2");
  const nextBtn = document.querySelector(".next2");
  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".lastcarousel");

  let currentIndex = 0;
  const totalCards = cards.length;

  const cardWidth =
    cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

  function updateCarousel() {
    cardContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalCards - 2) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalCards - 3; // Loop to last card
    }
    updateCarousel();
  });
}

function footerAccordian() {
  const div = document.querySelector(".accorddiv");

  const btn2 = document.querySelector(".accor");
  const btn = document.querySelector(".accordbtn");
  const content = document.querySelector(".accordion-content");

  btn2.addEventListener("click", function () {
    if (content.style.maxHeight) {
      // If open, close it
      content.style.maxHeight = null;
      btn.textContent = "+";
      div.style.gap = "0px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.textContent = "-";
      div.style.display = "flex";
      div.style.gap = "30px";
    }
  });
  btn.addEventListener("click", function () {
    if (content.style.maxHeight) {
      // If open, close it
      content.style.maxHeight = null;
      btn.textContent = "+";
      div.style.gap = "0px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.textContent = "-";
      div.style.display = "flex";
      div.style.gap = "30px";
    }
  });
}
