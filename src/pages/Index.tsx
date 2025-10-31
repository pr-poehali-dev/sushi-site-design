import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import DeliverySection from '@/components/DeliverySection';
import PromosSection from '@/components/PromosSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import Cart, { CartItem } from '@/components/Cart';
import MobileMenu from '@/components/MobileMenu';
import OrderForm from '@/components/OrderForm';
import type { MenuItem } from '@/components/MenuSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        toast.success(`${item.name} добавлен в корзину`);
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success(`${item.name} добавлен в корзину`);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info('Товар удален из корзины');
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderFormOpen(true);
  };

  const handleOrderSubmit = () => {
    setCartItems([]);
  };

  const menuItems = [
    {
      id: 1,
      name: 'Филадельфия Премиум',
      category: 'Премиум роллы',
      price: 890,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop&q=80',
      description: 'Норвежский лосось, сливочный сыр Филадельфия, огурец, икра масаго',
      popular: true
    },
    {
      id: 2,
      name: 'Черный дракон',
      category: 'Премиум роллы',
      price: 1290,
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop&q=80',
      description: 'Угорь унаги, авокадо, черная икра тобико, соус унаги',
      popular: true
    },
    {
      id: 3,
      name: 'Калифорния Голд',
      category: 'Премиум роллы',
      price: 990,
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop&q=80',
      description: 'Краб, авокадо, огурец, икра тобико золотая',
      popular: true
    },
    {
      id: 4,
      name: 'Сякэ Премиум',
      category: 'Нигири',
      price: 240,
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&h=400&fit=crop&q=80',
      description: 'Норвежский лосось на японском рисе (2 шт)'
    },
    {
      id: 5,
      name: 'Магуро Нигири',
      category: 'Нигири',
      price: 320,
      image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=400&fit=crop&q=80',
      description: 'Премиальный голубой тунец (2 шт)'
    },
    {
      id: 6,
      name: 'Унаги Нигири',
      category: 'Нигири',
      price: 290,
      image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=600&h=400&fit=crop&q=80',
      description: 'Копченый угорь с соусом унаги (2 шт)'
    },
    {
      id: 7,
      name: 'Сет "Императорский"',
      category: 'Сеты',
      price: 3490,
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=400&fit=crop&q=80',
      description: '52 кусочка премиум роллов и нигири, имбирь, васаби',
      popular: true
    },
    {
      id: 8,
      name: 'Сет "Токио"',
      category: 'Сеты',
      price: 2190,
      image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=600&h=400&fit=crop&q=80',
      description: '36 кусочков классических роллов'
    },
  ];

  const promos = [
    {
      title: '🎁 Скидка 25% на первый заказ',
      description: 'Для новых клиентов при заказе от 2000₽. Промокод: FIRST25',
      discount: '-25%'
    },
    {
      title: '🚗 Бесплатная доставка',
      description: 'При заказе от 2500₽ доставка абсолютно бесплатно',
      discount: '0₽'
    },
    {
      title: '⭐ Императорский сет',
      description: 'Специальное предложение: 52 кусочка премиум суши со скидкой 20%',
      discount: '-20%'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        scrollToSection={scrollToSection}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
        cartItemCount={cartItemCount}
      />
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        total={cartTotal}
        itemCount={cartItemCount}
        onOrderSubmit={handleOrderSubmit}
      />
      
      <main className="pt-20">
        <HeroSection scrollToSection={scrollToSection} />
        <MenuSection menuItems={menuItems} onAddToCart={handleAddToCart} />
        <DeliverySection />
        <PromosSection promos={promos} />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;