import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const services = [
    {
      icon: 'Building2',
      title: 'Жилищное строительство',
      description: 'Строительство жилых комплексов, многоквартирных домов и коттеджей под ключ'
    },
    {
      icon: 'Briefcase',
      title: 'Коммерческая недвижимость',
      description: 'Офисные здания, торговые центры и бизнес-парки любой сложности'
    },
    {
      icon: 'HardHat',
      title: 'Промышленные объекты',
      description: 'Склады, производственные цеха и логистические комплексы'
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Модернизация и капитальный ремонт существующих зданий'
    }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/b954eb23-5b87-4053-8ebb-dcd52f438bde.jpg',
      title: 'ЖК "Северный квартал"',
      location: 'Москва',
      area: '45 000 м²',
      year: '2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/03b0e188-864f-4612-b946-c22b6296be73.jpg',
      title: 'Бизнес-центр "Горизонт"',
      location: 'Санкт-Петербург',
      area: '28 000 м²',
      year: '2023'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/a20ee038-060a-45ae-9f69-00dc6e84d8ea.jpg',
      title: 'Торговый комплекс "Атриум"',
      location: 'Казань',
      area: '32 000 м²',
      year: '2023'
    }
  ];

  const prices = [
    { service: 'Строительство жилых домов', price: 'от 45 000 ₽/м²' },
    { service: 'Коммерческие объекты', price: 'от 55 000 ₽/м²' },
    { service: 'Промышленные здания', price: 'от 35 000 ₽/м²' },
    { service: 'Реконструкция', price: 'от 25 000 ₽/м²' }
  ];

  const clients = [
    'ПАО "Газпром"',
    'ГК "Росатом"',
    'ОАО "РЖД"',
    'Правительство Москвы',
    'ГК "ПИК"',
    'Группа "Эталон"'
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Строитель
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#clients" className="hover:text-primary transition-colors">Клиенты</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Строим будущее
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  вместе с вами
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное строительство жилых и коммерческих объектов. 
                Более 15 лет опыта и 200+ завершенных проектов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Наши проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/24fd197c-bd65-4346-9da1-ae506c3ea0e4.jpg"
                alt="Коттеджный дом"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных работ от проектирования до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Галерея наших лучших завершенных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="MapPin" size={16} />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Square" size={16} />
                        {project.area}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачное ценообразование и индивидуальный подход
            </p>
          </div>
          <div className="space-y-4">
            {prices.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon name="CheckCircle" size={24} className="text-white" />
                    </div>
                    <span className="text-lg font-medium">{item.service}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Точная стоимость рассчитывается индивидуально после осмотра объекта
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать расчет
            </Button>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Наши клиенты</h2>
            <p className="text-xl text-muted-foreground">
              Нам доверяют ведущие компании России
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 flex items-center justify-center min-h-[120px]">
                  <span className="text-lg font-semibold text-center">{client}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@stroymaster.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Строителей, д. 25, офис 301
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="border-2"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={32} className="text-primary" />
                <span className="text-2xl font-bold">Строитель</span>
              </div>
              <p className="text-gray-400">
                Профессиональное строительство с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Жилые дома</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Коммерческие объекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Промышленные здания</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реконструкция</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroymaster.ru</li>
                <li>г. Москва, ул. Строителей, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 Строитель. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;