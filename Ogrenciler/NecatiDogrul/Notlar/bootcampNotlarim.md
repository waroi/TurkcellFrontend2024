Block büyün sayfayı kaplar
Inline sadece kapsadığı alan kadar

ctrl + k + c commente alır
ctrl + k + u geri alır

google lighthouse seo toolu

id classı ezer
!important her şeyi ezer ama kullanılması önerilmiyor

mdn baya iyi site gözat

border-box kullan

div block elementtir
span ise inline.

css flex sitesi çok iyi

order özelliği - değer alabilir. - değer + değerlerden önce gelir.

https://www.frontendmentor.io/
css wars

seo için sayfaların en başında h1 olmalı 1 tane gerisi
h2 olabilir

px yerine rem kullanabilirsin

null javascriptte primitive bir deger

margin x auto tam ortalar

px yerine rem vw vh kullanabilirsin

direkt width height vermekten kaçın

javascript engine nodejs
w3schools.com
mozilla developer javascript mükemmel

caniuse.com hangi tarayıcı desteklioyor o fonksiyonu ya da css'i

hoisting yukarı bir şey taşıma anlamına gelmiyor internettekiler yanlış

js iki aşamaya sahip
İlk başta sayfayı baştan aşağı okuyor bellek kullancam mı hafızaya atmam gereken bir şey var mı fonksiyonları alıyor değişkenleri alıyor sadece değişken varsa değeri yoksa undefined olarak atıyor
ikinci aşamada belleğe yazdığı değerleri kullanıyor

javascriptin çalışma mantığını öğren

null nedir?
null object tipinde çünkü ilk başta yanlışlıkla null object yapılmış ama çok etkisi olmadığı için böyle devam etmiş

prototypeda object adında bir consttructor var özellikleri oradan al

Array'in parenti object

arrayin içinde tek değer olursa o primitive olarak çalışır
normalde referans array ama işleme tabi tutulduğunda primitive olarak bakıyor!!!

Scope en önemli konu çok karıştırılır

3 farklı scope var

var function scope çalışır
var için scope çalışır let için çalışmaz

let ve const block scope çalışır

dışarıdan let'e erişilemez
var'a dışarıdan her yerde erişilebilir

push metodları ile const çalışır

!!!!
Javacsriptin iki aşaması var

1. okuma aşaması.
   Değişken fonksiyon falan var mı varsa tüm fonksyion ve değişkenleri belleğe atıyor fonksiyonları olduğu gibi tutuyor değerler atanmışsa değeriyle yoksa undefined olarak tutuyor.

Sonra motor javascript dosyasını çalışıtırıyo
bunun amacı bellek yönetimi

let'Te hoisting geçerli değil sadece var'Da geçerli

Ayrıca, let ve const anahtar kelimeleri ile bildirilen değişkenler de hoist edilir, ancak onlar "Temporal Dead Zone" adı verilen bir bölgede kalırlar bildirimlerine kadar, bu yüzden onları bildirimlerinden önce kullanmaya çalışırsanız bir hata alırsınız.

İki eşittir sadece değeri kıyaslar, 3 tane eşittir veri tipini de kıyaslar

İki eşit değil değeri kıyaslar, 3 tane eşit değil tipi de hesaplar

for ve while yerine artık map kullanıyoruz

innerHTML'in performans ve güvenlik zaafiyetleri var onun yerine innerText kullan

event capturing nedir eventbubbling nedir farkları nedir

map konusuna dikkat

prototype mülakatlarda soruyor varol hoca

react react native react query
bu anahtar kelimeleri linkedinde kullana
anahtar kelimelerle ilgili paylaşımlar yap deneyimlerde bu kelimeleri bulundur

linkedin doğrulama

mdn promise konusuna bak mülakatlarda çıkabilir

promise nedir: size bir söz veriyorum bir alacağım var bu alacağı alırsa başka birine borcu ödeyeceğim gelmezse fail oluyor.

javascript senkron bir dil her şeyi tek tek işliyor

fetch promise döndürür

es2022 ile async'siz await kullanılabiliyor ama tarayıcalar şuan es2022 desteklemediği için hata veriyor

arrow function otomatik olarak this'i bind ediyor

yani bir objenin içinde arrow function yazarsak o objeyi döner

array içinde this olurs

-----React-------
Sanal DOM hızlı render sağlamaz ilk lansmanda yanlışlıkla söylemiş

vue'da da sanal dom var

react 19'Da useMemo kalkacak

reportWebVitals googleAnalytics raporları için

React.StrictMode
anlamlı hatalar oluşturur ve boş fragment oluşturur

bir componenti tamamen dışa aktarmak istiyorsak export default kullanıyoruz,
bir kısmını dışa aktarmak için export kullanıyoruz.

js uzantısı kullanınca createElement('div',.....) ile yapman lazım ama jsx olunca react kendi oluşturuyor

Bir state'in değeri set..... methodu kullanılarak değiştirildiğinde o component tekrar render edilir.

useRef

dispathcer nedir

virtual dom gerçek dom farkı

component life cyclelar araştır

javascript motoru nasıl çalışır

microfrontend nx

big oh notation

react router

context

virtual dom'un daha hızlı olduğu doğru değil
sadece değişen yerleri render etmesini ajax da yapıyor gerçek domda

finalde i18 kullan iyi olur react

finalde bootstrap ve styled component
figma tasarımı verilecek pixel perfect bir sonuç bekleniyor
next ile yapılabilir
