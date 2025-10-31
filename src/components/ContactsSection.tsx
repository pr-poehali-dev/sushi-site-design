import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
