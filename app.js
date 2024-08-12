let say1 = document.getElementById("say1"); // todo İlk sayı için input elemanını aldım

let islem = document.getElementById("islem"); // todo İşlem tipi için input elemanını aldım

let say2 = document.getElementById("say2"); // todo İkinci sayı için input elemanını aldım

let btn = document.getElementById("btn"); // todo Hesapla butonunu aldım

let sonuc = document.getElementById("sonuc"); // todo Sonucu göstereceğim <p> elemanını aldım


//! Butona tıklama olayını gerçekleştiriyorum

btn.addEventListener("click", function () {

    //todo Kullanıcıdan aldığım değerleri sayılara dönüştürüyorum

    let sayi1 = parseFloat(say1.value); // todo İlk input'tan aldığım değeri ondalıklı sayıya çeviriyorum
    let sayi2 = parseFloat(say2.value); // todo İkinci input'tan aldığım değeri ondalıklı sayıya çeviriyorum
    let islemTipi = islem.value; // todo İşlem tipi input'tan aldığım değeri alıyorum
    let hesapSonucu; // todo İşlemin sonucunu saklayacağım değişkeni tanımlıyorum


    //! İşlem tipine göre işlemi gerçekleştiriyorum

    switch (islemTipi) {

        case '+':
            hesapSonucu = sayi1 + sayi2;
            break;

        case '-':
            hesapSonucu = sayi1 - sayi2;
            break;

        case '/':
            hesapSonucu = sayi1 / sayi2;
            break;

        case '*':
            hesapSonucu = sayi1 * sayi2; // Bu satırda düzeltme yapıldı
            break;

            
        default: //? Eğer işlem tipi geçersizse (yani "+" , "-", "*", "/" değilse)
            hesapSonucu = "Geçersiz İşlem ! ! !"; //? Geçersiz işlem mesajını döndürüyorum
    }
      
    //! // Sonucu ekranda gösteriyorum
    sonuc.textContent = "Sonuç : " + hesapSonucu; //? Sonucu, "Sonuç :" metniyle birlikte <p> elemanına yazıyorum
 
});