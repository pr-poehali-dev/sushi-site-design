import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Promo {
  title: string;
  description: string;
  discount: string;
}

interface PromosSectionProps {
  promos: Promo[];
}

const PromosSection = ({ promos }: PromosSectionProps) => {
  return (
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
  );
};

export default PromosSection;
