document.getElementById("supBtn").addEventListener("click", function () {
  let supForm = `
    <form action="#" id="supportFormMain"> 
              <div id= "supHead">
                <h3>Destek Talebi</h3>
                <button id= "supClose">
                <i class="fa-solid fa-xmark" style="color: #000000;"></i>
                </button>
              </div>

              <label for="">T.C. Kimlik No</label>
              <input type="number" name="kimlikNo" id="idNo">
      
              <label for="">Öğrenci No</label>
              <input type="text" name="no" id="studentNo"> 
  
              <label for="name">Ad</label>
              <input type="text" name="isim" id="name">
  
              <label for=""> Soyad </label>
              <input type="text" name="soyad" id="surname">
  
              <label for=""> E-Posta </label>
              <input type="text" name="e-posta" id="mail">
              
              <label for=""> Uygulama </label>
              <select name="uygulama" id="app"> Uygulama Seçiniz   
                  <option value="">Uygulama Seçiniz</option> 
                  <option value="">BYS-İdari Personel</option>
                  <option value="">BYS-M.Ü. Akademik Personel</option>
                  <option value="">BYS-M.Ü. Dışı Akademik Personel</option>
                  <option value="">BYS-Öğrenci</option>
              </select>

              <label for=""> Nitelik </label>
              <input type="text" name="nitelik" id="attribute">
  
              <label for=""> Tür </label>
              <input type="text" name="tür" id="type">
  
              <label for=""> Açıklama </label>
              <input type="text" name="aciklama" id="description">

              <button id="supSub">Gönder</button>
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

// document.getElementById("overlay").addEventListener("click", function () {
//   document.getElementById("supCont").style.display = "none";
//   document.getElementById("overlay").style.display = "none";
// });

// LOGOS HOVER
//main logo TR
let mainLogo = document.getElementById("mainLogo");
mainLogo.addEventListener("mouseenter", () => {
  mainLogo.src = "img/mainLogoHover.png";
});
mainLogo.addEventListener("mouseleave", () => {
  mainLogo.src = "img/logo1.png";
});

//mobiles logo
let android = document.getElementById("android");
let ios = document.getElementById("ios");

android.addEventListener("mouseenter", () => {
  android.src = "img/andHover.png";
});
android.addEventListener("mouseleave", () => {
  android.src = "img/android.png";
});

ios.addEventListener("mouseenter", () => {
  ios.src = "img/iosHov.png";
});
ios.addEventListener("mouseleave", () => {
  ios.src = "img/ios.png";
});
