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
    <section id="promos" className="py-24 bg-black/40">
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
              className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-black via-black to-primary/10 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 p-8 group"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-black text-primary mb-6 font-['Montserrat'] drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                  {promo.discount}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white font-['Montserrat']">
                  {promo.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  {promo.description}
                </p>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold transition-all duration-300">
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