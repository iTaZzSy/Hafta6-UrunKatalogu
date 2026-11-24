// data/products.js
// Mini Ürün Kataloğu Ürün Verileri

export const products = [
  {
    id: 'p1',
    name: 'Kablosuz Fare',
    price: 450,
    category: 'Aksesuar',
    stock: 8,
    description: 'Bluetooth 5.0 ve 2.4GHz çift mod bağlantılı, sessiz tıklama özellikli ergonomik optik fare.'
  },
  {
    id: 'p2',
    name: 'Mekanik Klavye',
    price: 1800,
    category: 'Aksesuar',
    stock: 0,
    description: 'RGB aydınlatmalı, mavi switch mekanik tuşlu, Türkçe Q dizilimli profesyonel oyuncu klavyesi.'
  },
  {
    id: 'p3',
    name: 'Gaming Kulaklık',
    price: 950,
    category: 'Ses',
    stock: 12,
    description: '7.1 Surround sanal çevresel ses, gürültü engelleyici katlanabilir mikrofon ve hafızalı köpük kulak yastıkları.'
  },
  {
    id: 'p4',
    name: 'Ultra HD Monitör 27"',
    price: 6200,
    category: 'Görüntü',
    stock: 4,
    description: '27 inç 2K QHD (2560x1440), 165Hz yenileme hızı, 1ms tepki süresi ve IPS panel tasarım.'
  },
  {
    id: 'p5',
    name: 'Taşınabilir SSD 1TB',
    price: 2400,
    category: 'Depolama',
    stock: 0,
    description: 'USB 3.2 Gen 2 bağlantı ile 1050 MB/s okuma ve yazma hızına sahip darbelere dayanıklı taşınabilir SSD.'
  },
  {
    id: 'p6',
    name: 'USB-C Çoklayıcı Hub',
    price: 650,
    category: 'Aksesuar',
    stock: 15,
    description: '4K HDMI, 3x USB 3.0, SD kart okuyucu ve 100W Power Delivery destekli 7-in-1 alüminyum hub.'
  }
];

export const getProductById = (id) => {
  return products.find((p) => String(p.id) === String(id));
};
