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
import type { MenuItem } from '@/components/MenuSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const menuItems = [
    {
      id: 1,
      name: 'Филадельфия Классик',
      category: 'Роллы',
      price: 450,
      image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop',
      description: 'Лосось, сливочный сыр, огурец',
      popular: true
    },
    {
      id: 2,
      name: 'Калифорния с крабом',
      category: 'Роллы',
      price: 380,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      description: 'Краб, авокадо, огурец, икра тобико',
      popular: true
    },
    {
      id: 3,
      name: 'Сякэ Нигири',
      category: 'Суши',
      price: 120,
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop',
      description: 'Свежий лосось на рисе'
    },
    {
      id: 4,
      name: 'Магуро Нигири',
      category: 'Суши',
      price: 150,
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop',
      description: 'Тунец на рисе'
    },
    {
      id: 5,
      name: 'Сет "Токио"',
      category: 'Наборы',
      price: 1890,
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop',
      description: '40 кусочков разных роллов',
      popular: true
    },
    {
      id: 6,
      name: 'Дракон Ролл',
      category: 'Роллы',
      price: 520,
      image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400&h=300&fit=crop',
      description: 'Угорь, авокадо, соус унаги'
    },
  ];

  const promos = [
    {
      title: 'Скидка 20% на первый заказ',
      description: 'Для новых клиентов при заказе от 1000₽',
      discount: '-20%'
    },
    {
      title: 'Бесплатная доставка',
      description: 'При заказе от 1500₽ доставка бесплатно',
      discount: '0₽'
    },
    {
      title: 'Сет дня',
      description: 'Каждый день новый набор со скидкой 15%',
      discount: '-15%'
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
