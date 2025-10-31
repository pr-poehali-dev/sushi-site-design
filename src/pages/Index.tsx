import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="text-4xl">🍣</div>
              <span className="text-2xl font-bold text-primary font-['Montserrat']">YOKO SUSHI</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Меню
              </button>
              <button 
                onClick={() => scrollToSection('delivery')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Доставка
              </button>
              <button 
                onClick={() => scrollToSection('promos')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Акции
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 text-lg px-6 py-2 bg-secondary text-secondary-foreground">
                Доставка за 30 минут
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground font-['Montserrat']">
                Свежие суши<br />
                <span className="text-primary">прямо к вам</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Аутентичная японская кухня с быстрой доставкой. Готовим из свежайших ингредиентов каждый день.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  onClick={() => scrollToSection('menu')}
                >
                  <Icon name="UtensilsCrossed" className="mr-2" size={24} />
                  Смотреть меню
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  onClick={() => scrollToSection('promos')}
                >
                  <Icon name="Sparkles" className="mr-2" size={24} />
                  Акции
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-2 bg-primary/20 text-primary border-primary">
                Наше меню
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-['Montserrat']">
                Выбирайте лучшее
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Авторские роллы, классические суши и готовые наборы
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-muted h-14">
                <TabsTrigger value="all" className="text-base">Все</TabsTrigger>
                <TabsTrigger value="Роллы" className="text-base">Роллы</TabsTrigger>
                <TabsTrigger value="Суши" className="text-base">Суши</TabsTrigger>
                <TabsTrigger value="Наборы" className="text-base">Наборы</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.map((item) => (
                    <Card 
                      key={item.id} 
                      className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        {item.popular && (
                          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-semibold">
                            <Icon name="TrendingUp" size={14} className="mr-1" />
                            Популярное
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1 font-['Montserrat']">
                              {item.name}
                            </h3>
                            <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                              {item.category}
                            </Badge>
                          </div>
                          <div className="text-2xl font-bold text-primary font-['Montserrat']">
                            {item.price}₽
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {item.description}
                        </p>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                          <Icon name="Plus" className="mr-2" size={18} />
                          В корзину
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {['Роллы', 'Суши', 'Наборы'].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.filter(item => item.category === category).map((item) => (
                      <Card 
                        key={item.id} 
                        className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                      >
                        <div className="relative overflow-hidden aspect-video">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                          {item.popular && (
                            <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-semibold">
                              <Icon name="TrendingUp" size={14} className="mr-1" />
                              Популярное
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-1 font-['Montserrat']">
                                {item.name}
                              </h3>
                              <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                                {item.category}
                              </Badge>
                            </div>
                            <div className="text-2xl font-bold text-primary font-['Montserrat']">
                              {item.price}₽
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 text-sm">
                            {item.description}
                          </p>
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                            <Icon name="Plus" className="mr-2" size={18} />
                            В корзину
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="delivery" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-2 bg-secondary/20 text-secondary border-secondary">
                Доставка и оплата
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-['Montserrat']">
                Быстро и удобно
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border bg-card p-8 text-center hover:border-primary transition-all duration-300">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground font-['Montserrat']">
                  30 минут
                </h3>
                <p className="text-muted-foreground">
                  Среднее время доставки по городу. Готовим сразу после заказа.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 text-center hover:border-primary transition-all duration-300">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Wallet" size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground font-['Montserrat']">
                  Любая оплата
                </h3>
                <p className="text-muted-foreground">
                  Наличные, карта курьеру или онлайн-оплата на сайте.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 text-center hover:border-primary transition-all duration-300">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground font-['Montserrat']">
                  Зона доставки
                </h3>
                <p className="text-muted-foreground">
                  Доставляем по всему городу. От 500₽ — 200₽, от 1500₽ — бесплатно.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="promos" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-2 bg-primary/20 text-primary border-primary">
                Специальные предложения
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-['Montserrat']">
                Выгодные акции
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Экономьте на любимых блюдах с нашими предложениями
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {promos.map((promo, index) => (
                <Card 
                  key={index}
                  className="relative overflow-hidden border-border bg-card hover:border-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 p-8"
                >
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/20 rounded-full"></div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-secondary mb-4 font-['Montserrat']">
                      {promo.discount}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground font-['Montserrat']">
                      {promo.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {promo.description}
                    </p>
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 text-base px-4 py-2 bg-primary/20 text-primary border-primary">
                  Контакты
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-['Montserrat']">
                  Свяжитесь с нами
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-border bg-card p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground font-['Montserrat']">Телефон</h3>
                      <a href="tel:+79991234567" className="text-lg text-primary hover:underline">
                        +7 (999) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 10:00 до 23:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground font-['Montserrat']">Email</h3>
                      <a href="mailto:info@yokosushi.ru" className="text-lg text-primary hover:underline">
                        info@yokosushi.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground font-['Montserrat']">Адрес</h3>
                      <p className="text-lg text-foreground">
                        г. Москва, ул. Примерная, д. 123
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Самовывоз со скидкой 10%</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-border bg-card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground font-['Montserrat']">Мы в соцсетях</h3>
                  <div className="space-y-4">
                    <a 
                      href="#" 
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30">
                        <Icon name="Instagram" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Instagram</div>
                        <div className="text-sm text-muted-foreground">@yokosushi</div>
                      </div>
                    </a>

                    <a 
                      href="#" 
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30">
                        <Icon name="Send" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Telegram</div>
                        <div className="text-sm text-muted-foreground">@yokosushi_bot</div>
                      </div>
                    </a>

                    <a 
                      href="#" 
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30">
                        <Icon name="MessageCircle" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                      </div>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🍣</div>
              <span className="text-xl font-bold text-primary font-['Montserrat']">YOKO SUSHI</span>
            </div>
            <div className="text-center text-muted-foreground">
              © 2024 YOKO SUSHI. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
