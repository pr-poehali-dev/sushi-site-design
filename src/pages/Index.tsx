import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import DeliverySection from '@/components/DeliverySection';
import PromosSection from '@/components/PromosSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      id: 1,
      name: 'Филадельфия Классик',
      category: 'Роллы',
      price: 450,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      description: 'Лосось, сливочный сыр, огурец',
      popular: true
    },
    {
      id: 2,
      name: 'Калифорния с крабом',
      category: 'Роллы',
      price: 380,
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop',
      description: 'Краб, авокадо, огурец, икра тобико',
      popular: true
    },
    {
      id: 3,
      name: 'Сякэ Нигири',
      category: 'Суши',
      price: 120,
      image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop',
      description: 'Свежий лосось на рисе'
    },
    {
      id: 4,
      name: 'Магуро Нигири',
      category: 'Суши',
      price: 150,
      image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop',
      description: 'Тунец на рисе'
    },
    {
      id: 5,
      name: 'Сет "Токио"',
      category: 'Наборы',
      price: 1890,
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop',
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
      <Header scrollToSection={scrollToSection} />
      
      <main className="pt-20">
        <HeroSection scrollToSection={scrollToSection} />
        <MenuSection menuItems={menuItems} />
        <DeliverySection />
        <PromosSection promos={promos} />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
