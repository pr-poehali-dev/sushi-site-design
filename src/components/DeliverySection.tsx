import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-24 bg-gradient-to-b from-background via-background to-black/40">
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
          <Card className="border border-primary/30 bg-black/50 p-8 text-center hover:border-primary hover:bg-black/70 transition-all duration-300 backdrop-blur-sm">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              <Icon name="Clock" size={48} className="text-black" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-primary font-['Montserrat']">
              30 минут
            </h3>
            <p className="text-gray-300 text-lg">
              Среднее время доставки по городу. Готовим сразу после заказа.
            </p>
          </Card>

          <Card className="border border-primary/30 bg-black/50 p-8 text-center hover:border-primary hover:bg-black/70 transition-all duration-300 backdrop-blur-sm">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              <Icon name="Wallet" size={48} className="text-black" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-primary font-['Montserrat']">
              Любая оплата
            </h3>
            <p className="text-gray-300 text-lg">
              Наличные, карта курьеру или онлайн-оплата на сайте.
            </p>
          </Card>

          <Card className="border border-primary/30 bg-black/50 p-8 text-center hover:border-primary hover:bg-black/70 transition-all duration-300 backdrop-blur-sm">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              <Icon name="MapPin" size={48} className="text-black" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-primary font-['Montserrat']">
              Зона доставки
            </h3>
            <p className="text-gray-300 text-lg">
              Доставляем по всему городу. От 1000₽ — 250₽, от 2500₽ — бесплатно.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;