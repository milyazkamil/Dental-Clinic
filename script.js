window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header");
    var navMovbile = document.querySelector(".navMobile");

    header.classList.toggle("sticky", window.scrollY > 0);
    navMovbile.classList.toggle("sticky", window.scrollY > 0);

});

const navMobile = document.querySelector(".navMobile");
const navMobileLinks = document.querySelector(".navMobileLinks");

const firstPhotos = document.querySelector(".firstPhotos");
const secondPhotos = document.querySelector(".secondPhotos");

const leftButtonOne = document.querySelector(".leftButtonOne");
const rightButtonOne = document.querySelector(".rightButtonOne");

const leftButtonTwo = document.querySelector(".leftButtonTwo");
const rightButtonTwo = document.querySelector(".rightButtonTwo");

const leftButtonMobile1 = document.querySelector(".leftButtonMobile1");
const rightButtonMobile1 = document.querySelector(".rightButtonMobile1");
const leftButtonMobile2 = document.querySelector(".leftButtonMobile2");
const rightButtonMobile2 = document.querySelector(".rightButtonMobile2");
const leftButtonMobile3 = document.querySelector(".leftButtonMobile3");
const rightButtonMobile3 = document.querySelector(".rightButtonMobile3");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");

const hamburgerButton1 = document.querySelector(".hamburgerButton1");
const hamburgerButton2 = document.querySelector(".hamburgerButton2");

const refresh = document.querySelector(".refresh");
const blogParagraf = document. querySelector(".blogParagraf");

const information = [
    "Dişinizin üst yüzeyindeki mine, tüm vücudunuzun en sert kısmıdır.",
    "İnsan ağzı, dünyadaki insan sayısından daha fazla bakteri içerir.",
    "Ağızdaki tat hücrelerinin yaklaşık 10 günlük bir ömrü vardır ve yenilenmesi yaklaşık 1 ila 2 hafta sürer.",
    "Diş, vücudun kendi kendini iyileştiremeyen tek parçasıdır, ona iyi bakınız.",
    "Dişinizin sadece 1/3'ünü görebilirsiniz, geri kalan kısmı diş etlerinin altında gizlidir.",
    "Diş ipi kullanmadığınızda, diş yüzeyinin kabaca %35'ini temizlemeyi kaçırırsınız.",
    "Diş ipi kullanımı, bulaşıcı hastalık olasılığını azalttığı ve hatta kalp krizlerini önleyebildiği için yaşam sürenizi 6 yıla kadar uzatabilir.",
    "Amerikalıların %73'ü diş ipi kullanmaktansa market alışverişine gitmeyi tercih ediyor.",
    "Kalp hastalığı ve diyabet gibi sistem hastalıklarının %90'ının ağız sağlığınızla bağlantısı vardır.",
    "Göğüs ağrısı ile birlikte ağrılı bir çene, özellikle kadınlarda kalp krizine işaret edebilir.",
    "Diş fırçanızı kuru tutmanız önemlidir çünkü bakteriler ıslak yüzeylerde daha hızlı büyür.",
    "Diş çürüğü, soğuk algınlığından sonra ikinci en yaygın hastalıktır.",
    "Amerikalıların% 78'i 17 yaşına kadar en az 1 diş dolgusuna sahiptir.",
    "Diş çürüğü en sık görülen çocukluk hastalığıdır.",
    "Ortalama bir kadın günde 62 kez gülümserken, erkekler günde sadece 8 kez gülümser.",
    "İnsanların %50'si, bir kişinin gülümsemesinin başka bir kişide fark ettikleri ilk özellik olduğunu iddia ediyor.",
    "Fareler her zaman bir şeyleri kemirir veya kemirirler çünkü dişlerinin büyümesi asla durmaz. Kemirme, farelerin dişlerini törpülemesine yardımcı olur.",
    "İnsanların %59'u cep telefonuyla konuşan birinin yanında oturmaktansa dişçi randevusu almayı tercih ediyor. Yetişkinlerin %60'ı sadece gülüşlerinden etkilenir.",
    "Ortalama olarak, insanlar hayatlarının yaklaşık 38 gününü dişlerini fırçalayarak geçirirler, ama buna değer.",
    "Bir gülümseme, giyebileceğiniz en iyi şeydir, bu nedenle dişlerinize iyi bakmanız önemlidir. Sağlıklı dişler için ihtiyacınız olan bakımı almak için diş hekiminizden randevu almayı unutmayın!",
    "Her diş benzersizdir.",
    "Ağız hijyeni uygulamaları binlerce yıl öncesine dayanır.",
    "Diş minesi insan vücudunun en sert dokusudur. Çok sayıda mineral katmanından oluşur ve kemikten daha serttir."
];

refresh.addEventListener("click", ()=>{
    const random = Math.floor(Math.random() * information.length);
    blogParagraf.innerText = information[random];
});


hamburgerButton2.style.display = "none";
navMobileLinks.style.display = "none";

hamburgerButton1.addEventListener("click", ()=>{
    hamburgerButton1.style.display = "none";
    hamburgerButton2.style.display = "block";
    navMobile.style.height = "15vh";
    navMobileLinks.style.display = "block";
});

hamburgerButton2.addEventListener("click", ()=>{
    hamburgerButton1.style.display = "block";
    hamburgerButton2.style.display = "none";
    navMobile.style.height = "10vh";
    navMobileLinks.style.display = "none";
});


secondPhotos.style.display = "none";

leftButtonOne.addEventListener("click", ()=>{
    firstPhotos.style.display = "block";
    secondPhotos.style.display = "none";
});

rightButtonOne.addEventListener("click", ()=>{
    firstPhotos.style.display = "none";
    secondPhotos.style.display = "block";
});

leftButtonTwo.addEventListener("click", ()=>{
    firstPhotos.style.display = "block";
    secondPhotos.style.display = "none";
});

rightButtonTwo.addEventListener("click", ()=>{
    firstPhotos.style.display = "none";
    secondPhotos.style.display = "block";
});

leftButtonMobile1.addEventListener("click", ()=>{
    title1.innerText = "Diş Çekimi";
    img1.style.backgroundImage = "url('./images/6.jpg')";
});

rightButtonMobile1.addEventListener("click", ()=>{
    title1.innerText = "Diş Protezi";
    img1.style.backgroundImage = "url('./images/9.jpg')";
});

leftButtonMobile2.addEventListener("click", ()=>{
    title2.innerText = "Diş Beyazlatma";
    img2.style.backgroundImage = "url('./images/2.jpg')";
});

rightButtonMobile2.addEventListener("click", ()=>{
    title2.innerText = "Dolgu";
    img2.style.backgroundImage = "url('./images/8.jpg')";
});

leftButtonMobile3.addEventListener("click", ()=>{
    title3.innerText = "Diş Teli";
    img3.style.backgroundImage = "url('./images/4.jpg')";
});

rightButtonMobile3.addEventListener("click", ()=>{
    title3.innerText = "Şeffaf Plak";
    img3.style.backgroundImage = "url('./images/14.jpg')";
});
