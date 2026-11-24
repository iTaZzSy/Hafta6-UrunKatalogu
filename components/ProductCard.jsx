// components/ProductCard.jsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function ProductCard({ product }) {
  const isOutOfStock = product.stock === 0;

  const handlePress = () => {
    router.push(`/urun/${product.id}`);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={handlePress}
    >
      <View style={styles.topRow}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{product.category}</Text>
        </View>

        {/* Stok Durum Rozeti */}
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
            {isOutOfStock ? 'Stokta yok' : `Stokta (${product.stock})`}
          </Text>
        </View>
      </View>

      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDesc} numberOfLines={2}>
        {product.description}
      </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.priceText}>
          {product.price.toLocaleString('tr-TR')} ₺
        </Text>
        <Text style={styles.detailButton}>İncele →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  cardPressed: {
    backgroundColor: '#f8fafc',
    transform: [{ scale: 0.99 }]
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  categoryBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
    textTransform: 'uppercase'
  },
  stockBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },
  stockBadgeIn: {
    backgroundColor: '#dcfce7'
  },
  stockBadgeOut: {
    backgroundColor: '#fee2e2'
  },
  stockText: {
    fontSize: 11,
    fontWeight: '700'
  },
  stockTextIn: {
    color: '#16a34a'
  },
  stockTextOut: {
    color: '#dc2626'
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6
  },
  productDesc: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 12
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9'
  },
  priceText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0284c7'
  },
  detailButton: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0284c7'
  }
});
