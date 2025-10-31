import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
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
  );
};

export default DeliverySection;
