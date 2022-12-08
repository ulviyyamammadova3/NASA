function home(){ location.replace("https://www.facebook.com/NASA/") }

function youtube(){ location.replace("https://www.youtube.com/nasa") }
function insta(){ location.replace("https://www.instagram.com/nasa/") }
function twt(){ location.replace("https://twitter.com/NASA") }
function lkdn(){ location.replace("https://www.linkedin.com/company/nasa/") }

document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  });
  
  $("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});