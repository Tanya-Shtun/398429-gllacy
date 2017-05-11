var addresslink = document.querySelector(".address-btn");
    var addresspopup = document.querySelector(".modal-feedback");
    var addressoverlay = document.querySelector(".modal-overlay");
    var addressclose = addresspopup.querySelector(".modal-feedback-close");
    
    var addressform = addresspopup.querySelector(".modal-feedback-form");
    var addressname = addresspopup.querySelector("[name=name]");
    var addressemail = addresspopup.querySelector("[name=email]");

    addresslink.addEventListener("click", function(evt) {
      evt.preventDefault();
      addresspopup.classList.add("modal-feedback-show");
      addressoverlay.classList.add("overlay-show");
      addressname.focus();
    });


    addressclose.addEventListener("click", function(evt) {
      evt.preventDefault();
      addresspopup.classList.remove("modal-feedback-show");
      addressoverlay.classList.remove("overlay-show");
    
      });

    addressform.addEventListener("submit", function(evt) {
      if (!addressname.value || !addressemail.value) {
      	evt.preventDefault();
      	console.log("Нужно ввести имя и email");
      }
    });