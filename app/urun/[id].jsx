// app/urun/[id].jsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { getProductById } from '../../data/products';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = getProductById(id);

  // GEREKSİNİM: Ürün bulunamadığında hata ekranı
  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorIcon}>❌</Text>
        <Text style={styles.errorTitle}>Ürün Bulunamadı</Text>
        <Text style={styles.errorText}>
          Aradığınız ürün katalogda bulunamadı (ID: {id}).
        </Text>
        <Pressable style={styles.backBtnPrimary} onPress={() => router.back()}>
          <Text style={styles.backBtnPrimaryText}>← Kataloğa Dön</Text>
        </Pressable>
      </View>
    );
  }

  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) {
      Alert.alert('Stok Yetersiz', 'Bu ürün şu anda stoklarımızda tükenmiştir.');
      return;
    }
    Alert.alert(
      'Başarılı',
      `"${product.name}" sepete eklendi!`,
      [{ text: 'Tamam' }]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* ÜRÜN KART BİLGİSİ */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>

          {/* GEREKSİNİM: Stok 0 ise "Stokta yok", diğer durumda "Stokta" */}
          <View
            style={[
              styles.stockBadge,
              isOutOfStock ? styles.stockBadgeOut : styles.stockBadgeIn
            ]}
          >
            <Text
              style={[
                styles.stockText,
                isOutOfStock ? styles.stockTextOut : styles.stockTextIn
              ]}
            >
              {isOutOfStock ? 'Stokta yok' : `Stokta (${product.stock} adet)`}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString('tr-TR')} ₺</Text>
        <Text style={styles.taxInfo}>KDV Dahil • Hızlı Kargo</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Ürün Açıklaması</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.specBox}>
          <Text style={styles.specTitle}>Teknik Özellikler</Text>
          <Text style={styles.specItem}>• Model Kodu: {product.id.toUpperCase()}-2026</Text>
          <Text style={styles.specItem}>• Kategori: {product.category}</Text>
          <Text style={styles.specItem}>• Garanti Süresi: 24 Ay Resmi Distribütör Garantili</Text>
          <Text style={styles.specItem}>• Kargo: Aynı gün kargoda</Text>
        </View>

        {/* SATIN ALMA / SEPETE EKLE BUTONU */}
        <Pressable
          style={[
            styles.actionButton,
            isOutOfStock ? styles.actionButtonDisabled : styles.actionButtonActive
          ]}
          onPress={handleAddToCart}
          disabled={isOutOfStock}
        >
          <Text style={styles.actionButtonText}>
            {isOutOfStock ? 'Tükendi (Stokta Yok)' : 'Sepete Ekle 🛒'}
          </Text>
        </Pressable>
      </View>

      {/* GERİ GEZİNME BUTONU */}
      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backBtnText}>← Ürün Listesine Geri Dön</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc'
  },
  content: {
    padding: 16,
    paddingBottom: 36
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 16
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  categoryBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    textTransform: 'uppercase'
  },
  stockBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6
  },
  stockBadgeIn: {
    backgroundColor: '#dcfce7'
  },
  stockBadgeOut: {
    backgroundColor: '#fee2e2'
  },
  stockText: {
    fontSize: 12,
    fontWeight: '700'
  },
  stockTextIn: {
    color: '#16a34a'
  },
  stockTextOut: {
    color: '#dc2626'
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 8
  },
  price: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0284c7',
    marginBottom: 2
  },
  taxInfo: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 16
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 16
  },
  specBox: {
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 20
  },
  specTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 6
  },
  specItem: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 18
  },
  actionButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  actionButtonActive: {
    backgroundColor: '#0284c7'
  },
  actionButtonDisabled: {
    backgroundColor: '#94a3b8'
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700'
  },
  backBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f8fafc'
  },
  errorIcon: {
    fontSize: 50,
    marginBottom: 14
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 8
  },
  errorText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24
  },
  backBtnPrimary: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10
  },
  backBtnPrimaryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700'
  }
});
