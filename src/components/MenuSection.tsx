import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  popular?: boolean;
}

interface MenuSectionProps {
  menuItems: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection = ({ menuItems, onAddToCart }: MenuSectionProps) => {
  return (
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
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-black/40 h-14 border border-primary/20">
            <TabsTrigger value="all" className="text-base data-[state=active]:bg-primary data-[state=active]:text-black">Все</TabsTrigger>
            <TabsTrigger value="Премиум роллы" className="text-base data-[state=active]:bg-primary data-[state=active]:text-black">Роллы</TabsTrigger>
            <TabsTrigger value="Нигири" className="text-base data-[state=active]:bg-primary data-[state=active]:text-black">Нигири</TabsTrigger>
            <TabsTrigger value="Сеты" className="text-base data-[state=active]:bg-primary data-[state=active]:text-black">Сеты</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden border border-primary/20 bg-black/60 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-black font-bold shadow-lg">
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
                      <div className="text-3xl font-black text-primary font-['Montserrat'] drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                        {item.price}₽
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {item.description}
                    </p>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                      onClick={() => onAddToCart(item)}
                    >
                      <Icon name="Plus" className="mr-2" size={18} />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {['Премиум роллы', 'Нигири', 'Сеты'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.filter(item => item.category === category).map((item) => (
                  <Card 
                    key={item.id} 
                    className="group overflow-hidden border border-primary/20 bg-black/60 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-sm"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.popular && (
                        <Badge className="absolute top-4 right-4 bg-primary text-black font-bold shadow-lg">
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
                        <div className="text-3xl font-black text-primary font-['Montserrat'] drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                          {item.price}₽
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {item.description}
                      </p>
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                        onClick={() => onAddToCart(item)}
                      >
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
  );
};

export default MenuSection;