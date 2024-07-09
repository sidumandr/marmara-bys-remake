document.getElementById("supBtn").addEventListener("click", function () {
  let supForm = `
    <form action="#" id="supportFormMain"> 
    <div id="supHead">
        <h3>Support Request</h3>
        <button id="supClose">
            <i class="fa-solid fa-xmark" style="color: #000000;"></i>
        </button>
    </div>

    <label for="idNo">Turkish Identification Number</label>
    <input type="number" name="kimlikNo" id="idNo">

    <label for="studentNo">Student Number</label>
    <input type="text" name="no" id="studentNo"> 

    <label for="name">Name</label>
    <input type="text" name="isim" id="name">

    <label for="surname">Surname</label>
    <input type="text" name="soyad" id="surname">

    <label for="mail">E-mail</label>
    <input type="text" name="e-posta" id="mail">

    <label for="app">Application</label>
    <select name="uygulama" id="app">
        <option value="">Select Application</option>
        <option value="">BYS-Administrative Staff</option>
        <option value="">BYS-M.U. Academic Staff</option>
        <option value="">BYS-External Academic Staff</option>
        <option value="">BYS-Student</option>
    </select>

    <label for="attribute">Attribute</label>
    <input type="text" name="nitelik" id="attribute">

    <label for="type">Type</label>
    <input type="text" name="tür" id="type">

    <label for="description">Description</label>
    <input type="text" name="aciklama" id="description">

    <button id="supSub">Submit</button>
</form>
      `;

  let supCont = document.getElementById("supCont");
  let overlay = document.getElementById("overlay");

  // form sayfasini ekrana getirir.
  supCont.innerHTML = supForm;
  supCont.style.display = "block";
  overlay.style.display = "block";

  // esc tusuna basildiginda form sayfasini kapatir.
  let closeForm = () => {
    supCont.style.display = "none";
    overlay.style.display = "none";
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeForm();
    }
  });
  // submit(gonder) butonuna tiklanildiginda form sayfasini kapatir.
  let supSub = document.getElementById("supSub");
  supSub.addEventListener("click", () => {
    supCont.style.display = "none";
    overlay.style.display = "none";
  });

  // x butonuna tiklanildiginda form sayfasini kapatir.
  let supClose = document.getElementById("supClose");
  supClose.addEventListener("click", () => {
    supCont.style.display = "none";
    overlay.style.display = "none";
  });
});

let enLogo = document.getElementById("EnMain");
enLogo.addEventListener("mouseenter", () => {
  enLogo.src = "img/enHoverMain.png";
});
enLogo.addEventListener("mouseleave", () => {
  enLogo.src = "img/en/main.png";
});

// mobiles
let android_en = document.getElementById("android_en");
android_en.addEventListener("mouseenter", () => {
  android_en.src = "img/andHover.png";
});
android_en.addEventListener("mouseleave", () => {
  android_en.src = "img/android.png";
});

let ios_en = document.getElementById("ios_en");
ios_en.addEventListener("mouseenter", () => {
  ios_en.src = "img/iosHov.png";
});
ios_en.addEventListener("mouseleave", () => {
  ios_en.src = "img/ios.png";
});

let login_en = document.getElementById("login-button_en");
let username_en = document.getElementById("Username_en");
let password_en = document.getElementById("Password_en");
let url = "https://www.example.com";

login_en.onclick = function (event) {
  event.preventDefault();

  let username_enValue = username_en.value;
  let password_enValue = password_en.value;

  if (username_enValue === "" && password_enValue === "") {
    alert("Please make sure you have entered your username and password!");
  } else if (username_enValue === "") {
    alert("Please make sure you have entered your username!");
  } else if (password_enValue === "") {
    alert("Please make sure you have entered your password!");
  } else {
    window.location.href = url;
  }
};
