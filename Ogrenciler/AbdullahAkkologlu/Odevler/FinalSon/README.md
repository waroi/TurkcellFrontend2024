# Shop.co - E-ticaret Projesi

Shop.co'ya hoş geldiniz, bir online alışveriş deneyimi sunmak için tasarlanmış yenilikçi bir e-ticaret platformudur. Bu doküman, Shop.co projesini anlamak, kurmak ve katkıda bulunmak için kapsamlı bir rehber niteliğindedir.

## Kurulum

Test Hesapları:

- abdullah@gmail.com 123456
- bilal@gmail.com 123456

Canlı projeye erişmek için:
https://turkcell-final-shopco.vercel.app/en

Canlıdaki db.json dosyasını incelemek için: https://vercel-json-deneme.vercel.app/

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Gerekli Bağımlılıkları Yükleyin:**

   ```bash
   npm install
   ```

2. **json-server'ı çalıştırın**
   Bu komut 3001 portunda çalışır. json-server'ın tüm özelliklerine erişebilmek için beta sürümü yerine stable versiyonu kullanılmıştır.(json-server@0.17.4). Proje bağımlılıklarında bu sürüm vardır.

   ```bash
   npm run json-server
   ```

3. **Uygulamayı Başlatın:**
   ```bash
   npm run dev
   ```

## Özellikler

- **Kullanıcı Yönetimi:** Kullanıcı kayıt ve girişi için firebase kullanıldı.
- **Ürün Kataloğu:** Kategorilere ayrılmış geniş ürün yelpazesi.
- **Sepet:** Kullanıcı dostu sepet yönetimi.
- **Yorum ve Değerlendirme:** Ürünler hakkında kullanıcı yorumları ve puanlama sistemi.
- **Responsive Tasarım:** Mobil ve masaüstü cihazlar için optimize edilmiş kullanıcı arayüzü.

## Kullanım

Projeyi yerel ortamda çalıştırdıktan sonra, tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

## Katkıda Bulunma

Projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

1. **Bir Fork Oluşturun:**
   Depoyu kendi GitHub hesabınıza fork'layın.

2. **Yeni Bir Dal Oluşturun:**

   ```bash
   git checkout -b yeni-özellik
   ```

3. **Değişikliklerinizi Yapın:**
   Kodunuzu geliştirin ve test edin.

4. **Commit ve Push Yapın:**

   ```bash
   git commit -m "Yeni özellik eklendi"
   git push origin yeni-özellik
   ```

5. **Pull Request Oluşturun:**
   GitHub'da orijinal depo için bir pull request oluşturun.
