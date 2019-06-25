/*jslint esnext: true*/

////////////////////////////////
// GET ELEMENTS FROM DOM
////////////////////////////////

const elements = {
  navBtn: document.querySelector(".navigation__button"),
  navBackground: document.querySelector(".navigation__background"),
  navNav: document.querySelector(".navigation__nav"),
  navList: document.querySelector(".navigation__list"),
  navIcon: document.querySelector(".navigation__icon"),
  featureBox: document.querySelector(".features__text-box"),
  featureImg: document.querySelector(".features__image")
};

////////////////////////////////
// TOGGLE NAVIGATION
////////////////////////////////

const toggleNav = () => {
  elements.navBtn.classList.toggle("navigation__button--menu-open");
  elements.navBackground.classList.toggle("navigation__background--menu-open");
  elements.navNav.classList.toggle("navigation__nav--menu-open");
};

////////////////////////////////
// CHANGE iPHONE IMAGE
////////////////////////////////

const renderMockups = event => {
  // Get type of HTML element that was triggered
  let node = event.target.nodeName;

  // Store the class name of triggered feature
  let feature;

  // If child element was triggered, get parent's class
  if (node === "P" || node === "H3") {
    feature = event.target.parentNode.className.split(" ")[1];

    // Else get element's class
  } else if (node === "DIV") {
    feature = event.target.className.split(" ")[1];
  }

  // If feature 1 was triggered, show Add Thought screen
  if (feature === "features__feature--1") {
    elements.featureImg.src = "img/mockup-add-thought-heyhon.png";

    // Else if feature 2 was triggered, show Archive screen
  } else if (feature === "features__feature--2") {
    elements.featureImg.src = "img/mockup-archive-heyhon.png";

    // Otherwise, show Done screen
  } else if (feature === "features__feature--3") {
    elements.featureImg.src = "img/mockup-archive-done-heyhon.png";
  }
};

////////////////////////////////
// SET UP EVENT LISTENERS
////////////////////////////////

const init = () => {
  // Toggle navigation when button is clicked
  elements.navBtn.addEventListener("click", toggleNav);

  // Toggle navigation when link in menu is clicked
  elements.navList.addEventListener("click", function(event) {
    let node = event.target.nodeName;
    if (node === "LI" || node === "A") {
      toggleNav();
    }
  });

  // Change image when feature is clicked
  elements.featureBox.addEventListener("click", renderMockups);

  // Change image when feature is hovered
  elements.featureBox.addEventListener("mouseover", renderMockups);

  var qNumb = 0;
  var question = "<h1>Hello, My name is Rebecca. What is your name?</h1>";
  var output = document.getElementById("output");
  output.innerHTML = question;

  function chatBot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (qNumb == 0) {
      output.innerHTML = "<h1>Awesome! Great to meet you, " + input + ".</h1>";
      document.getElementById("input").value = "";
      question = "<h1>Where are you from?</h1>";
      setTimeout(timedQuestion, 3000);
    } else if (qNumb == 1) {
      output.innerHTML = "<h1>Cool. I am in the St. Louis area.</h1>";
      document.getElementById("input").value = "";
      question = "<h1>What do you like to do for fun there?</h1>";
      setTimeout(timedQuestion, 3000);
    } else if (qNumb == 2) {
      output.innerHTML =
        "<h1>Sounds like fun! I like to go to the Zoo here in St. Louis.</h1>";
      document.getElementById("input").value = "";
      question = "<h1>What kind of animal is your favorite?</h1>";
      setTimeout(timedQuestion, 3000);
    } else if (qNumb == 3) {
      output.innerHTML = "<h1>I like " + input + " too.</h1>";
      document.getElementById("input").value = "";
      question = "<h1>What else is fun in your city?</h1>";
      setTimeout(timedQuestion, 3000);
    } else if (qNumb == 4) {
      output.innerHTML = "<h1>Sweet! That is great.</h1>";
      document.getElementById("input").value = "";
      question = "<h1>What kind of work do you do?</h1>";
      setTimeout(timedQuestion, 3000);
    } else if (qNumb == 5) {
      output.innerHTML = "<h1>That sounds interesting. I do web design.</h1>";
      document.getElementById("input").value = "";
      question = "<h1>Do you like your work?</h1>";
      setTimeout(timedQuestion, 3000);
    } else if (qNumb == 6) {
      switch (input) {
        case "yes":
          output.innerHTML = "<h1>Awesome!</h1>";
          break;
        case "no":
          output.innerHTML = "<h1>Bummer! Sorry to hear that.</h1>";
      }
      document.getElementById("input").value = "";
      question =
        "<h1>Well, I have to go. Have a great day. Hope to talk again!</h1>";
      setTimeout(timedQuestion, 3000);
    }
  }

  function timedQuestion() {
    output.innerHTML = question;
  }

  // $(document).keypress(function(e) {
  //  if (e.which == 13) {
  //   chatBot();
  //   qNumb++
  // }
  // });

  document.getElementById("input").addEventListener("keypress", pressKey);

  function pressKey(event) {
    if (event.which == 13) {
      chatBot();
      qNumb++;
    }
  }
};

init();
