// function moveBlock(e) {
// function otherTheme(e) {
//     body.style.backgroundColor = `rgb(125, 184, 246)`;
//     // brownButton.style.backgroundColor = `rgb(50, 27, 5)`
//     grey_text.style.color = `rgb(255, 255, 255)`;
//     grey_text2.style.color = `rgb(255, 255, 255)`;

//     blueText.style.color = `rgba(44, 56, 120, 1)`;
//     serviceList.style.backgroundColor = `rgb(97, 139, 236)`;
// }

// other_theme.addEventListener("click", otherTheme);

let other = false,
a = document.body,
p = document.getElementById("select");
q = document.getElementById("themeForContactUs");
r = document.getElementById("greyText");
s = document.getElementById("greyText2");


function darkLight() {
	if (!other) {
		a.className = "theme-other";
        q.className = "themeForContactUs";
		p.innerHTML = "Brown Theme";
        r.className = "brownText";
        s.className = "brownText";
        brownNumber.style.backgroundColor = `rgb(80, 43, 12)`;
        brownButton.style.backgroundColor = `rgb(80, 43, 12)`;
        brownButtonLearnMore.style.backgroundColor = `rgb(80, 43, 12)`;
	} else {
		a.className = "theme-light";
		p.innerHTML = "Light Theme";
        brownNumber.style.backgroundColor = `rgba(44, 56, 120, 1)`;
        brownButton.style.backgroundColor = `rgba(44, 56, 120, 1)`;
        brownButtonLearnMore.style.backgroundColor = `rgba(44, 56, 120, 1)`;
        r.className = "grey_text";
        s.className = "grey_text";






	}
	other = !other;
}

