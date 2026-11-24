// app/index.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductListScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'Aksesuar', 'Ses', 'Görüntü', 'Depolama'];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tümü' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      {/* BAŞLIK VE ARAMA ÇUBUĞU */}
      <View style={styles.header}>
        <Text style={styles.subTitle}>MAĞAZA ÜRÜNLERİ</Text>
        <Text style={styles.title}>Mini Ürün Kataloğu</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Ürün adı veya açıklama ile ara..."
          placeholderTextColor="#94a3b8"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* KATEGORİ FİLTRE ÇİPLERİ */}
      <View style={styles.categoryRow}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <Pressable
              key={cat}
              style={[
                styles.categoryChip,
                isActive && styles.categoryChipActive
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  isActive && styles.categoryChipTextActive
                ]}
              >
                {cat}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* ÜRÜN SAYISI BİLGİSİ */}
      <View style={styles.infoRow}>
        <Text style={styles.countText}>
          {filteredProducts.length} ürün listeleniyor
        </Text>
      </View>

      {/* ÜRÜN LİSTESİ (FLATLIST) */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📦</Text>
            <Text style={styles.emptyTitle}>Ürün Bulunamadı</Text>
            <Text style={styles.emptyText}>
              Arama kriterlerinize uygun teknoloji ürünü bulunamadı.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16
  },
  header: {
    marginBottom: 12
  },
  subTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0284c7',
    letterSpacing: 0.5,
    marginBottom: 2
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 12
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#0f172a'
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12
  },
  categoryChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  categoryChipActive: {
    backgroundColor: '#0284c7',
    borderColor: '#0284c7'
  },
  categoryChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569'
  },
  categoryChipTextActive: {
    color: '#ffffff'
  },
  infoRow: {
    marginBottom: 8
  },
  countText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500'
  },
  listContent: {
    paddingBottom: 24
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 40,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0'
  },
  emptyIcon: {
    fontSize: 36,
    marginBottom: 10
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155'
  },
  emptyText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
    textAlign: 'center'
  }
});
