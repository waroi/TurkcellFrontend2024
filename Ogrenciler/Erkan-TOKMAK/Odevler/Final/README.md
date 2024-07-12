# Projeyi başlatmak için

Final klasörü içerisinde:

Öncelikle node-modules yüklenmesi için

- npm install

 daha sonra projeyi başlatmak için 

- npm run dev

## Yeni bir terminal açarak json serverin çalıştırılması için

*json-server proje içerisinde farklı bir sürümde kullanılmaktadır.*

 database klasörü içerisinde

- npx json-server -w .\data.json --port 3001

Eğer db.json dosyasına bağlanılamıyor yada başka bir port üzerinde başlatmış iseniz 

final klasörü içerisinde

/src/api/server.js

içerisindeki URL parametesini değiştiriniz.

## Proje hakkında bilgilendirme

Projede tanımlı iki dil vardır. İngilizce ve Türkçe olarak tanımlanmıştır. Header üzerinde en sağda dark-mode butonu onun sol tarafında ise dil değiştirme butonu tanımlanmıştır.

Filter başlığının yanındaki icon filtrelerin temizlenmesini sağlamaktadır. ( Mobil görünümde bu buton açılan komponenti kapatmaktadır. Filtreler için "apply filter" butonuna basılması gerekmektedir.)
Filtrelemede fiyata göre filtreleme için "apply filter" butonuna basılmalıdır.
Diğer filtreler üzerine tıklandığı anda çalışmaktadır.
Shop sayfası üzerinde ürünleri aynı anda filtreleyerek sıralama işlemi yapabilirsiniz. 

Ürün detay sayfasında yorum yapma aktif bir şekilde çalışmaktadır. 6 taneden fazla yorum var ise "load more" butonu gelir.
Login değilseniz komponentimiz açılır fakat yorum yapmak için gerekli inputlar ekrana bastırılmaz. Login sayfasına yönlendirmek için buton gelir.

Her kullanıcının sepet bilgisi ayrı olarak tutulmaktadır. Kullanıcı giriş yaptıktan sonra var ise sepet bilgisi yüklenir.

Proje Vercel üzerinde canlıya alınmıştır. 

Yeni bir kullanıcı oluşturarak testler yapılabilir.

Proje linki: 

https://final-proejct-e-commerce.vercel.app/en

## sepet sayfasında tanımlı promosyon kodları

- gelecegiyazanlar20
- gelecegiyazanlar40
- gelecegiyazanlar60
- gelecegiyazanlar80
- gelecegiyazanlar100