import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  itemCount: number;
  onOrderSubmit: () => void;
}

const OrderForm = ({ isOpen, onClose, total, itemCount, onOrderSubmit }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    apartment: '',
    entrance: '',
    floor: '',
    comment: '',
    paymentMethod: 'cash',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон';
    } else if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Введите адрес доставки';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    toast.success('Заказ успешно оформлен!', {
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    
    onOrderSubmit();
    onClose();
    
    setFormData({
      name: '',
      phone: '',
      address: '',
      apartment: '',
      entrance: '',
      floor: '',
      comment: '',
      paymentMethod: 'cash',
    });
    setErrors({});
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-['Montserrat']">
            Оформление заказа
          </DialogTitle>
          <DialogDescription>
            Заполните данные для доставки. Мы доставим ваш заказ в течение 30-60 минут.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Icon name="User" size={20} className="text-primary" />
                Контактные данные
              </h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  placeholder="Иван"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                Адрес доставки
              </h3>
              
              <div className="space-y-2">
                <Label htmlFor="address">Улица, дом *</Label>
                <Input
                  id="address"
                  placeholder="ул. Примерная, д. 123"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className={errors.address ? 'border-destructive' : ''}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apartment">Квартира</Label>
                  <Input
                    id="apartment"
                    placeholder="45"
                    value={formData.apartment}
                    onChange={(e) => handleChange('apartment', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entrance">Подъезд</Label>
                  <Input
                    id="entrance"
                    placeholder="2"
                    value={formData.entrance}
                    onChange={(e) => handleChange('entrance', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="floor">Этаж</Label>
                  <Input
                    id="floor"
                    placeholder="5"
                    value={formData.floor}
                    onChange={(e) => handleChange('floor', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <Textarea
                  id="comment"
                  placeholder="Дополнительные пожелания..."
                  value={formData.comment}
                  onChange={(e) => handleChange('comment', e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Icon name="Wallet" size={20} className="text-primary" />
                Способ оплаты
              </h3>
              
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleChange('paymentMethod', value)}
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Icon name="Banknote" size={20} className="text-muted-foreground" />
                    <div>
                      <div className="font-semibold">Наличными курьеру</div>
                      <div className="text-sm text-muted-foreground">Оплата при получении</div>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Icon name="CreditCard" size={20} className="text-muted-foreground" />
                    <div>
                      <div className="font-semibold">Картой курьеру</div>
                      <div className="text-sm text-muted-foreground">Терминал у курьера</div>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Icon name="Smartphone" size={20} className="text-muted-foreground" />
                    <div>
                      <div className="font-semibold">Онлайн картой</div>
                      <div className="text-sm text-muted-foreground">Оплата на сайте</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Товаров:</span>
                <span className="font-medium">{itemCount} шт.</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Доставка:</span>
                <span className="font-medium">{total >= 1500 ? 'Бесплатно' : '200₽'}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-2xl font-bold text-primary font-['Montserrat']">
                  {total >= 1500 ? total : total + 200}₽
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onClose}
              >
                Отмена
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                <Icon name="Check" className="mr-2" size={20} />
                Оформить заказ
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
