/*let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 4000); // 画像を4秒ごとに切り替え
}*/

// ニュースレターサインアップ
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let email = document.getElementById("newsletter-email").value;
  
  // サーバーにメールアドレスを送信する処理をここに追加する
  // 例: sendEmailToServer(email);
  
  alert("ニュースレターに登録されました。ありがとう！"); // 送信後のメッセージ
  document.getElementById("newsletter-email").value = ""; // 入力欄をクリア
});