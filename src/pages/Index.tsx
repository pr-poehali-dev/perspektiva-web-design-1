import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const specialties = [
    {
      title: 'Программирование',
      description: 'Разработка веб и мобильных приложений',
      icon: 'Code',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://cdn.poehali.dev/projects/5ee1ba65-011e-4420-a509-97c024fb3df6/files/7964e790-f092-4173-bb4c-efcae0f35420.jpg'
    },
    {
      title: 'Дизайн',
      description: 'Графический и UX/UI дизайн',
      icon: 'Palette',
      gradient: 'from-orange-500 to-yellow-500',
      image: 'https://cdn.poehali.dev/projects/5ee1ba65-011e-4420-a509-97c024fb3df6/files/5e049e6b-22f7-420e-be07-0fa5045c176c.jpg'
    },
    {
      title: 'Маркетинг',
      description: 'Digital маркетинг и SMM',
      icon: 'TrendingUp',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://cdn.poehali.dev/projects/5ee1ba65-011e-4420-a509-97c024fb3df6/files/507252a1-ca55-4040-a50e-46f0d0f3986c.jpg'
    }
  ];

  const news = [
    {
      title: 'День открытых дверей',
      date: '15 ноября 2025',
      category: 'Мероприятие',
      description: 'Приглашаем всех желающих познакомиться с колледжем'
    },
    {
      title: 'Новая лаборатория IT',
      date: '10 ноября 2025',
      category: 'Новость',
      description: 'Открытие современной компьютерной лаборатории'
    },
    {
      title: 'Победа на олимпиаде',
      date: '5 ноября 2025',
      category: 'Достижение',
      description: 'Наши студенты заняли 1 место на региональной олимпиаде'
    }
  ];

  const features = [
    {
      icon: 'Briefcase',
      title: 'Гарантированное трудоустройство',
      description: 'Партнерство с ведущими компаниями'
    },
    {
      icon: 'DollarSign',
      title: 'Доступная цена',
      description: 'Рассрочка и стипендии для студентов'
    },
    {
      icon: 'Award',
      title: 'Качественное образование',
      description: 'Опытные преподаватели-практики'
    },
    {
      icon: 'Users',
      title: 'Студенческая жизнь',
      description: 'Клубы, секции и мероприятия'
    }
  ];

  const faq = [
    {
      question: 'Какие документы нужны для поступления?',
      answer: 'Аттестат об основном общем образовании, паспорт, 6 фотографий 3х4, медицинская справка формы 086-У'
    },
    {
      question: 'Есть ли общежитие?',
      answer: 'Да, колледж предоставляет общежитие для иногородних студентов. Все комнаты оборудованы мебелью, есть Wi-Fi'
    },
    {
      question: 'Можно ли получать стипендию?',
      answer: 'Да, предусмотрены академические и социальные стипендии. Размер зависит от успеваемости и категории студента'
    }
  ];

  const menuItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О колледже', icon: 'Building2' },
    { id: 'applicant', label: 'Абитуриенту', icon: 'GraduationCap' },
    { id: 'students', label: 'Студентам', icon: 'BookOpen' },
    { id: 'process', label: 'Учебный процесс', icon: 'Calendar' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'life', label: 'Студенты вне учёбы', icon: 'PartyPopper' },
    { id: 'career', label: 'Карьера', icon: 'Rocket' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Перспектива
                </h1>
                <p className="text-xs text-gray-500">Коммерческий колледж</p>
              </div>
            </div>
            <div className="hidden lg:flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-purple-50 ${
                    activeSection === item.id ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'main' && (
          <>
            <section className="relative overflow-hidden py-20 lg:py-32">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-10"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-fade-in">
                    <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                      🎓 Набор 2025
                    </Badge>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                      Образование для{' '}
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        успешной карьеры
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      Получите востребованную профессию с гарантией трудоустройства. Современные программы обучения от практикующих специалистов.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
                        Подать заявку
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg px-8">
                        Виртуальный тур
                        <Icon name="Play" size={20} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="relative animate-scale-in">
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
                    <img
                      src="https://cdn.poehali.dev/projects/5ee1ba65-011e-4420-a509-97c024fb3df6/files/5e049e6b-22f7-420e-be07-0fa5045c176c.jpg"
                      alt="Students"
                      className="rounded-3xl shadow-2xl relative z-10"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                          <Icon name={feature.icon} className="text-white" size={24} />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Популярные специальности
                  </h2>
                  <p className="text-xl text-gray-600">Выберите направление своего будущего</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {specialties.map((specialty, index) => (
                    <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-80`}></div>
                        <img src={specialty.image} alt={specialty.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon name={specialty.icon} className="text-white" size={64} />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{specialty.title}</CardTitle>
                        <CardDescription className="text-base">{specialty.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="w-full group-hover:bg-purple-50">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">Последние новости</h2>
                  <p className="text-xl text-gray-600">Будьте в курсе событий колледжа</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {news.map((item, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            {item.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
                    <p className="text-xl text-gray-600">Ответы на самые популярные вопросы абитуриентов</p>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center text-white">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">Готовы начать обучение?</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Оставьте заявку и наш специалист свяжется с вами для консультации
                  </p>
                  <Card className="text-left">
                    <CardContent className="pt-6 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Ваше имя" />
                        <Input placeholder="Телефон" type="tel" />
                      </div>
                      <Input placeholder="Email" type="email" />
                      <Textarea placeholder="Сообщение (необязательно)" rows={4} />
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                        Отправить заявку
                        <Icon name="Send" size={20} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'about' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-8 text-center">О колледже</h1>
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">История и миссия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Коммерческий колледж «Перспектива» работает с 2010 года и за это время выпустил более 5000 специалистов. Наша миссия - дать качественное образование и помочь каждому студенту найти свой путь к успешной карьере.
                    </p>
                  </CardContent>
                </Card>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Users" className="text-white" size={32} />
                      </div>
                      <CardTitle>5000+</CardTitle>
                      <CardDescription>Выпускников</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Award" className="text-white" size={32} />
                      </div>
                      <CardTitle>98%</CardTitle>
                      <CardDescription>Трудоустройство</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Star" className="text-white" size={32} />
                      </div>
                      <CardTitle>15</CardTitle>
                      <CardDescription>Лет опыта</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'applicant' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-12 text-center">Абитуриенту</h1>
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="FileText" size={24} />
                      Документы для поступления
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
                        <span>Аттестат об основном общем образовании</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
                        <span>Паспорт (копия)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
                        <span>6 фотографий 3х4</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
                        <span>Медицинская справка 086-У</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Calendar" size={24} />
                      Приемная кампания 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Подача документов</p>
                        <p className="text-gray-600">1 июня - 15 августа 2025</p>
                      </div>
                      <div>
                        <p className="font-medium">Зачисление</p>
                        <p className="text-gray-600">25 августа 2025</p>
                      </div>
                      <div>
                        <p className="font-medium">Начало занятий</p>
                        <p className="text-gray-600">1 сентября 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'students' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-12 text-center">Студентам</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: 'Calendar', title: 'Расписание занятий', desc: 'Актуальное расписание всех групп' },
                  { icon: 'BookOpen', title: 'Электронная библиотека', desc: 'Доступ к учебным материалам 24/7' },
                  { icon: 'DollarSign', title: 'Стипендии', desc: 'Информация о начислениях' },
                  { icon: 'Home', title: 'Общежитие', desc: 'Условия проживания и подача заявок' },
                  { icon: 'ClipboardCheck', title: 'Расписание сессий', desc: 'График экзаменов и зачетов' },
                  { icon: 'Clock', title: 'Расписание звонков', desc: 'Время начала и окончания пар' }
                ].map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={item.icon} className="text-white" size={24} />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'process' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-12 text-center">Учебный процесс</h1>
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Отделения колледжа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['IT и программирование', 'Дизайн и креатив', 'Бизнес и маркетинг', 'Гостиничный сервис'].map((dept, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                          <Icon name="Building2" className="text-purple-600" />
                          <span className="font-medium">{dept}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">График учебного процесса 2024-2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span className="font-medium">Осенний семестр</span>
                        <span className="text-gray-600">1 сентября - 25 декабря</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                        <span className="font-medium">Зимние каникулы</span>
                        <span className="text-gray-600">26 декабря - 10 января</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span className="font-medium">Весенний семестр</span>
                        <span className="text-gray-600">11 января - 30 июня</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                        <span className="font-medium">Летняя практика</span>
                        <span className="text-gray-600">1 июля - 31 августа</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'news' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-12 text-center">Новости и события</h1>
              <div className="max-w-4xl mx-auto space-y-6">
                {[...news, ...news].map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          {item.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'life' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-12 text-center">Студенты вне учёбы</h1>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Dumbbell" size={24} />
                      Спортивные секции
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {['Футбол', 'Волейбол', 'Баскетбол', 'Фитнес', 'Настольный теннис'].map((sport, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                          <Icon name="Circle" size={8} className="text-purple-600" />
                          <span>{sport}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Music" size={24} />
                      Творческие клубы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {['КВН', 'Вокальная студия', 'Танцы', 'Театральная студия', 'Фотоклуб'].map((club, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                          <Icon name="Circle" size={8} className="text-purple-600" />
                          <span>{club}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'career' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-12 text-center">Карьера и трудоустройство</h1>
              <div className="max-w-6xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Наши партнеры-работодатели</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['Яндекс', 'VK', 'Сбер', 'Тинькофф', 'МТС', 'Ozon', 'Авито', 'Kaspersky'].map((company, i) => (
                        <div key={i} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-center font-medium hover:shadow-lg transition-all">
                          {company}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Истории успеха</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Алексей Иванов', position: 'Senior Developer в Яндекс', year: '2022' },
                        { name: 'Мария Петрова', position: 'UI/UX Designer в VK', year: '2021' },
                        { name: 'Дмитрий Сидоров', position: 'Marketing Manager в Ozon', year: '2023' }
                      ].map((graduate, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            {graduate.name[0]}
                          </div>
                          <div>
                            <p className="font-medium">{graduate.name}</p>
                            <p className="text-sm text-gray-600">{graduate.position}</p>
                            <p className="text-xs text-gray-500">Выпуск {graduate.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Перспектива</h3>
              <p className="text-gray-400">Коммерческий колледж</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@perspektiva.edu
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-gray-400">
                {menuItems.slice(0, 4).map((item) => (
                  <p key={item.id} className="hover:text-white cursor-pointer transition-colors">
                    {item.label}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Youtube', 'Twitter'].map((social, i) => (
                  <div key={i} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <Icon name="Share2" size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Коммерческий колледж «Перспектива». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
