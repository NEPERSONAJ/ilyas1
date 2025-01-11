import { Project, Service, Advantage } from './types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Проектирование',
    description: 'Профессиональное проектирование зданий из металлоконструкций с учетом всех требований и норм',
    icon: 'PencilRuler'
  },
  {
    id: 2,
    title: 'Производство',
    description: 'Изготовление металлоконструкций на современном оборудовании с высокой точностью',
    icon: 'Factory'
  },
  {
    id: 3,
    title: 'Монтаж',
    description: 'Быстрый и качественный монтаж конструкций опытными специалистами',
    icon: 'Construction'
  }
];

export const advantages: Advantage[] = [
  {
    id: 1,
    title: 'Экономия бюджета',
    description: 'Оптимизация затрат без потери качества',
    icon: 'Wallet'
  },
  {
    id: 2,
    title: 'Точные сроки',
    description: 'Строгое соблюдение установленных сроков',
    icon: 'Clock'
  },
  {
    id: 3,
    title: 'Опытная команда',
    description: 'Квалифицированные специалисты с многолетним опытом',
    icon: 'Users'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Торговый комплекс "Хас-Сити"',
    type: 'Торговый комплекс',
    area: 12000,
    year: 2023,
    region: 'Хасавюрт',
    weight: 450,
    description: 'Современный торговый комплекс с развитой инфраструктурой',
    images: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=300&q=80',
        title: 'Фасад здания'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80',
        title: 'Внутреннее пространство'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?auto=format&fit=crop&w=2000&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?auto=format&fit=crop&w=300&q=80',
        title: 'Парковка'
      }
    ],
    details: {
      solution: 'Инновационное решение с использованием современных материалов и технологий строительства',
      features: [
        'Современная система кондиционирования',
        'Подземная парковка на 200 мест',
        'Панорамное остекление',
        'Эскалаторы и лифты'
      ],
      video: 'https://www.youtube.com/embed/your-video-id'
    }
  }
];