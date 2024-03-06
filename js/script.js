"use strict";
const hamBtn = document.getElementById("ham-toggle");
const hamLink = document.querySelectorAll(".navigation__link");

hamLink.forEach(function (link) {
  link.addEventListener("click", function () {
    hamBtn.checked = false;
  });
});
