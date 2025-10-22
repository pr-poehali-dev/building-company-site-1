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
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Home',
      title: 'Жилые дома',
      description: 'Строительство коттеджей, таунхаусов и загородных домов под ключ'
    },
    {
      icon: 'Building',
      title: 'Многоэтажные здания',
      description: 'Жилые комплексы и многоквартирные дома любой этажности'
    },
    {
      icon: 'Store',
      title: 'Коммерческая недвижимость',
      description: 'Офисные центры, торговые комплексы и бизнес-парки'
    },
    {
      icon: 'Factory',
      title: 'Промышленные объекты',
      description: 'Склады, производственные цеха и логистические центры'
    },
    {
      icon: 'Hammer',
      title: 'Реконструкция',
      description: 'Капитальный ремонт и модернизация существующих зданий'
    },
    {
      icon: 'Cog',
      title: 'Инженерные системы',
      description: 'Монтаж коммуникаций, отопления, вентиляции и электрики'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт более 15 лет',
      description: 'Успешно реализовали более 200 проектов в России'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды работ до 5 лет'
    },
    {
      icon: 'Clock',
      title: 'Соблюдение сроков',
      description: 'Работаем по четкому графику с фиксацией этапов'
    },
    {
      icon: 'BadgeCheck',
      title: 'Лицензии и сертификаты',
      description: 'Все необходимые разрешения и допуски СРО'
    }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/24fd197c-bd65-4346-9da1-ae506c3ea0e4.jpg',
      title: 'Загородный коттедж',
      description: 'Двухэтажный дом 250 м²',
      location: 'Подмосковье'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/b954eb23-5b87-4053-8ebb-dcd52f438bde.jpg',
      title: 'ЖК "Солнечный"',
      description: 'Жилой комплекс на 120 квартир',
      location: 'Москва'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/03b0e188-864f-4612-b946-c22b6296be73.jpg',
      title: 'Бизнес-центр "Горизонт"',
      description: 'Офисное здание класса А',
      location: 'Санкт-Петербург'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши пожелания и бюджет проекта'
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разрабатываем проект и смету строительства'
    },
    {
      number: '03',
      title: 'Согласование',
      description: 'Получаем все необходимые разрешения'
    },
    {
      number: '04',
      title: 'Строительство',
      description: 'Выполняем работы с контролем качества'
    },
    {
      number: '05',
      title: 'Сдача объекта',
      description: 'Передаем готовый объект с документами'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Building2" size={28} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Строитель</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#projects" className="text-gray-700 hover:text-primary transition-colors font-medium">Проекты</a>
              <a href="#steps" className="text-gray-700 hover:text-primary transition-colors font-medium">Как работаем</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
                Строительство
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                  под ключ
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональное строительство жилых и коммерческих объектов любой сложности. 
                Работаем по всей России с 2009 года.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Наши проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Проектов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">15</div>
                  <div className="text-sm text-gray-600 font-medium">Лет опыта</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Качество</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://cdn.poehali.dev/projects/ef76e165-6bbc-441b-b670-016a3ba96fa7/files/24fd197c-bd65-4346-9da1-ae506c3ea0e4.jpg"
                alt="Строительство домов"
                className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр строительных работ — от проектирования до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Наши преимущества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Почему более 500 клиентов выбрали нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-5 mx-auto">
                    <Icon name={advantage.icon} size={36} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Реализованные проекты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ по строительству различных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="MapPin" size={16} className="mr-1 text-primary" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Этапы работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Как мы строим ваш объект — от идеи до ключей
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и получите бесплатную консультацию
            </p>
          </div>
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя</label>
                    <Input
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Расскажите о вашем проекте</label>
                  <Textarea
                    placeholder="Опишите, что вы хотите построить..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="border-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Building2" size={28} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Строитель</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональное строительство с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Услуги</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Жилое строительство</li>
                <li>Коммерческие объекты</li>
                <li>Промышленное строительство</li>
                <li>Реконструкция зданий</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Контакты</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  info@stroitel.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  Москва, ул. Строителей, 1
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Режим работы</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: Выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Строитель. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
