# Mobil Programlama — Hafta 6: Mini Ürün Kataloğu

**Öğrenci:** Hussam Al Sleem  
**Öğrenci No:** 2210238518  
**Ders:** Mobil Programlama  
**Konu:** Expo Router ile Ürün Kataloğu ve Detay Ekranı  

---

## 📌 Proje Hakkında
Bu uygulama, küçük bir teknoloji mağazasının ürünlerini listeleyen, ürün arama ve kategori filtreleme imkânı sunan ve her ürünün detay bilgilerini dinamik rota üzerinden gösteren bir mobil katalog uygulamasıdır.

### 🚀 Karşılanan Gereksinimler
- **Ürün Listesi (`/`):** En az 5 ürün (`data/products.js`), her ürün için ad, fiyat, kategori ve stok durumu.
- **ProductCard Bileşeni:** Props üzerinden tek bir ürün verisi alarak kart tasarımı oluşturur.
- **Dinamik Rota (`/urun/[id]`):** Tıklanan ürünün ID'si URL parametresi olarak aktarılır ve `useLocalSearchParams` ile okunur.
- **Stok Kontrolü:**
  - Stok `0` ise: Kırmızı renkli `"Stokta yok"` rozeti ve devre dışı buton gösterilir.
  - Stok `> 0` ise: Yeşil renkli `"Stokta (adet)"` rozeti ve aktif `"Sepete Ekle"` butonu yer alır.
- **Hata Ekranı:** Olmayan ürün ID'si girildiğinde kullanıcı dostu bir hata kartı ve kataloğa dönüş butonu sunulur.

---

## 🧪 Test Senaryoları ve Sonuçları

| No | İşlem | Beklenen Sonuç | Durum |
|---|---|---|---|
| T5 | Stok=0 olan ürünü aç (p2 Mekanik Klavye) | "Stokta yok" rozeti görünür, buton pasif | Başarılı (OK) |
| T6 | İkinci bir ürüne geç (p1 Kablosuz Fare) | Doğru ürün ayrıntıları (450 TL, 8 stok) görünür | Başarılı (OK) |
| - | Hatalı ürün ID denemesi (/urun/999) | "Ürün Bulunamadı" hata ekranı açılır | Başarılı (OK) |

---

## 📝 Tasarım Kararları
Arayüz tasarımında modern teknoloji e-ticaret trendlerine uygun olarak mavi (`#0284c7`) vurgu rengi, yumuşak gri kart sınırları (`#e2e8f0`) ve hafif gölgelendirmeler tercih edilmiştir. Tipografide okunabilirliği artırmak için sistem fontları ve hiyerarşik ağırlıklar (800 başlık, 700 fiyat) kullanılmıştır.
