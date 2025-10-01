export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
}
export const products: Product[] = [{
  id: 1,
  name: 'Hydrating Face Serum',
  category: 'skincare',
  price: 34.99,
  rating: 4.8,
  reviewCount: 127,
  description: 'This lightweight, fast-absorbing serum is enriched with hyaluronic acid to provide deep hydration and plump skin. Perfect for all skin types, it helps reduce the appearance of fine lines and wrinkles while improving skin texture.',
  image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80', 'https://images.unsplash.com/photo-1611080541598-1e4a9c129beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'],
  inStock: true,
  featured: true
}, {
  id: 2,
  name: 'Matte Lipstick Collection',
  category: 'makeup',
  price: 22.5,
  rating: 4.5,
  reviewCount: 86,
  description: 'This long-lasting matte lipstick offers vibrant color that stays put for hours without drying out your lips. The creamy formula glides on smoothly and provides full coverage with just one swipe.',
  image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80',
  images: ['https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80', 'https://images.unsplash.com/photo-1591375275624-fa9d9a52a68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', 'https://images.unsplash.com/photo-1590156352256-39e4c6e7e3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80'],
  inStock: true,
  featured: false
}, {
  id: 3,
  name: 'Vitamin C Brightening Moisturizer',
  category: 'skincare',
  price: 48.0,
  rating: 4.9,
  reviewCount: 214,
  description: 'Infused with stabilized vitamin C, this daily moisturizer helps brighten skin tone, reduce dark spots, and protect against environmental stressors. The lightweight formula absorbs quickly without leaving a greasy residue.',
  image: 'https://images.unsplash.com/photo-1611080541598-1e4a9c129beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  images: ['https://images.unsplash.com/photo-1611080541598-1e4a9c129beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'],
  inStock: true,
  featured: true
}, {
  id: 4,
  name: 'Volumizing Mascara',
  category: 'makeup',
  price: 18.99,
  rating: 4.3,
  reviewCount: 95,
  description: 'This volumizing mascara instantly adds drama and volume to your lashes without clumping. The unique brush design separates and coats each lash for a bold, eye-opening effect that lasts all day.',
  image: 'https://images.unsplash.com/photo-1631214524030-d9bcfc168e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80',
  images: ['https://images.unsplash.com/photo-1631214524030-d9bcfc168e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80', 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'],
  inStock: true,
  featured: false
}, {
  id: 5,
  name: 'Nourishing Hair Oil',
  category: 'haircare',
  price: 28.5,
  rating: 4.7,
  reviewCount: 158,
  description: 'This luxurious hair oil is formulated with a blend of natural oils to nourish and strengthen damaged hair. It helps reduce frizz, add shine, and protect against heat damage while leaving your hair soft and manageable.',
  image: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80',
  images: ['https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80', 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80', 'https://images.unsplash.com/photo-1626708181700-0a9690e2a6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'],
  inStock: true,
  featured: true
}, {
  id: 6,
  name: 'Floral Perfume',
  category: 'fragrance',
  price: 65.0,
  rating: 4.6,
  reviewCount: 72,
  description: 'This elegant floral fragrance combines notes of jasmine, rose, and lily of the valley with a subtle hint of citrus. The long-lasting formula evolves throughout the day for a complex and sophisticated scent experience.',
  image: 'https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  images: ['https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80', 'https://images.unsplash.com/photo-1619994403073-2cec0b878b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'],
  inStock: false,
  featured: false
}];
export const categories = [{
  id: 'all',
  name: 'All Products'
}, {
  id: 'skincare',
  name: 'Skincare'
}, {
  id: 'makeup',
  name: 'Makeup'
}, {
  id: 'haircare',
  name: 'Hair Care'
}, {
  id: 'fragrance',
  name: 'Fragrance'
}];