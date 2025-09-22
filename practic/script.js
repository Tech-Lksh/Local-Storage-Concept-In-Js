/* let input = document.querySelector("input");

input.addEventListener("input", function (dets) {
    if(dets.data !== null) {
        console.log(dets.data);
        
    }
}); */

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dets) {
//     if(dets.key === " ") {
//         h1.textContent = "SPC";
        
//     } else {
//         h1.textContent = dets.key;
        
//     }
// });



// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function () {
//     fileinp.click();
// });

// fileinp.addEventListener("change", function (dets) {
//     const file = dets.target.files[0];
//     if(file) {
//         btn.textContent = file.name;
//     }
    
// });


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input")
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img")
//     img.setAttribute(
//         "src", 
//         inputs[0].value
//     );

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     // inputes blanks karne ke liye
//     inputs.forEach(function(inp) {
//         if(inp.type !== "submit") {
//             inp.value = ""
//         }
//     })
// });



// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", function () {
//     abcd.style.backgroundColor = "yellow";
// });

// abcd.addEventListener("mouseout", function () {
//     abcd.style.backgroundColor = "red";
// });



// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function (dets) {
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// });



// let ul = document.querySelector("ul")

// ul.addEventListener("click", function (dets) {
//     dets.target.classList.toggle("lt");
// })



// Froem and form validation

// Timers and intervals

// let count = 0;

// let interval = setInterval(() => {
//     if(count < 10) {
//         count++;
//         console.log(count);
        
//     } else {
//         clearInterval(interval);
//     }
// }, 1000);



// let hide = document.querySelector("#hide");

// let set = setTimeout(() => {
//     hide.style.display = "none";
//     alert("Display none")
// }, 3000)


const body = document.body;
const btn = document.querySelector("button");

function applyTheme(theme) {
  body.classList.remove("dark", "light");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

function setDarkOrLight() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  applyTheme(theme);
}

// Initialize theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  setDarkOrLight();
}

// Listen to OS theme changes (if no manual preference)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    setDarkOrLight();
  }
});

// Toggle theme manually
btn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});
