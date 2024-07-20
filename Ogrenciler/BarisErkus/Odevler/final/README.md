## Proje Canlı Link

[Proje Canlı Link](https://turkcell-final.vercel.app/en)

## Giriş Bilgileri

- Varolan kullanıcı:

  - Kullanıcı Adı: admin@gmail.com
  - Şifre: 123123

- İsterseniz yeni bir kullanıcı oluşturup giriş yapabilirsiniz.

## Projeyi Ayağa Kaldırmak için Adımlar

1. Proje klasörünün ana dizininde aşağıdaki komutları çalıştırın:
   ```sh
   npm install
   npm run dev
   ```

## Notlar

- Backend servis sağlayıcısı ücretsiz bir servis sağlayıcı olduğu için uygulama ilk açıldığında verilerin gelmesi 30 saniye sürebilir.
- Eğer veriler gelmezse sayfayı yenileyiniz.
- Eğer veriler yine gelmez ise, aşağıdaki adımları takip ediniz:
  1. Proje klasörünün ana dizininde `src/server/baseUrl.js` dosyasını açınız.
  2. İlk satırı yorum satırına alınız, ikinci satırı yorum satırından çıkartınız.
  3. Proje klasörünün ana dizininde aşağıdaki komutu çalıştırarak ilgili dizine gidiniz:
     ```sh
     cd .\src\database\
     ```
  4. Aşağıdaki komutu çalıştırarak JSON sunucusunu başlatınız:
     ```sh
     json-server --watch db.json --port 3001
     ```
