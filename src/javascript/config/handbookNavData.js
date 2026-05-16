import cover_1_1_1 from '../../images/handbook/covers/handbook_1-1-1.png'
import cover_1_1_2 from '../../images/handbook/covers/handbook_1-1-2.png'
import cover_1_1_3 from '../../images/handbook/covers/handbook_1-1-3.png'
import cover_1_1_4 from '../../images/handbook/covers/handbook_1-1-4.png'
import cover_1_2_1 from '../../images/handbook/covers/handbook_1-2-1.png'
import cover_1_2_2 from '../../images/handbook/covers/handbook_1-2-2.png'
import cover_1_3_1 from '../../images/handbook/covers/handbook_1-3-1.png'
import cover_1_3_2 from '../../images/handbook/covers/handbook_1-3-2.png'
//  Second part
import cover_2_1_1 from '../../images/handbook/covers/handbook_2-1-1.webp'
import cover_2_1_2 from '../../images/handbook/covers/handbook_2-1-2.webp'
import cover_2_1_3 from '../../images/handbook/covers/handbook_2-1-3.webp'
// --
import cover_2_2_1 from '../../images/handbook/covers/handbook_2-2-1.webp'
import cover_2_2_2 from '../../images/handbook/covers/handbook_2-2-2.webp'
import cover_2_2_3 from '../../images/handbook/covers/handbook_2-2-3.webp'
import cover_2_2_4 from '../../images/handbook/covers/handbook_2-2-4.webp'
import cover_2_2_5 from '../../images/handbook/covers/handbook_2-2-5.webp'
//  --
import cover_2_3_1 from '../../images/handbook/covers/handbook_2-3-1.webp'
import cover_2_3_2 from '../../images/handbook/covers/handbook_2-3-2.webp'
import cover_2_3_3 from '../../images/handbook/covers/handbook_2-3-3.webp'
import cover_2_3_4 from '../../images/handbook/covers/handbook_2-3-4.webp'
import cover_2_3_5 from '../../images/handbook/covers/handbook_2-3-5.webp'

const handbookNavData = {
  parts: [
    {
      id: 'part-1',
      title: 'Знакомство с веб-плакатом',
      chapters: [
        {
          id: 'chapter-1-1',
          title: 'Что такое веб-плакат',
          href: '/handbook/part_1/chapter_1/chapter_1.html',
          articles: [
            {
              id: 'article-1-1-1',
              title: 'Особенности формата',
              href: '/handbook/part_1/chapter_1/about_webposter.html',
              cover: cover_1_1_1,
              readingTime: 3,
              articleType: 'Теория',
              description:
                'Краткая история появления формата веб-плаката и его ключевые особенности'
            },
            {
              id: 'article-1-1-2',
              title: 'Отличие от классического плаката',
              href: '/handbook/part_1/chapter_1/print-vs-web.html',
              cover: cover_1_1_2,
              readingTime: 4,
              articleType: 'Теория',
              description:
                'Что происходит с плакатом, когда он попадает в цифровую среду браузера'
            },
            {
              id: 'article-1-1-3',
              title: 'Отличия от лендинга и сайта',
              href: '/handbook/part_1/chapter_1/poster-vs-website.html',
              cover: cover_1_1_3,
              readingTime: 3,
              articleType: 'Теория',
              description:
                'Что происходит с плакатом, когда он попадает в цифровую среду браузера'
            },
            {
              id: 'article-1-1-4',
              title: 'Статичный и динамичный веб-плакат',
              href: '/handbook/part_1/chapter_1/static-dynamic.html',
              cover: cover_1_1_4,
              readingTime: 5,
              articleType: 'Теория',
              description:
                'Граница между плакатом как высказыванием и сайтом как инструментом'
            }
          ]
        },
        {
          id: 'chapter-1-2',
          title: 'Зачем делать веб-плакат',
          href: '/handbook/part_1/chapter_2/chapter_2.html',
          articles: [
            {
              id: 'article-1-2-1',
              title: 'Зачем создавать веб-плакат',
              href: '/handbook/part_1/chapter_2/why-create.html',
              cover: cover_1_2_1,
              readingTime: 4,
              articleType: 'Теория',
              description:
                'Что практика создзания веб-плаката даёт дизайнеру и причём тут разработка'
            },
            {
              id: 'article-1-2-2',
              title: 'Во что можно развить веб-плакат',
              href: '/handbook/part_1/chapter_2/further-development.html',
              cover: cover_1_2_2,
              readingTime: 5,
              articleType: 'Теория',
              description:
                'Несколько библиотек и идей как можно прокачать свой веб-плакат'
            }
          ]
        },
        {
          id: 'chapter-1-3',
          title: 'Примеры и насмотренность',
          href: '/handbook/part_1/chapter_3/chapter_3.html',

          articles: [
            {
              id: 'article-1-3-1',
              title: 'Избранные веб-плакаты 2019-2025',
              href: '/handbook/part_1/chapter_3/selected-works.html',
              cover: cover_1_3_1,
              readingTime: 3,
              articleType: 'Теория',
              description:
                'Самые яркие студенческие проекты в формате веб-плаката'
            },
            {
              id: 'article-1-3-2',
              title: 'Как пользоваться каталогом',
              href: '/handbook/part_1/chapter_3/catalog-guide.html',
              cover: cover_1_3_2,
              readingTime: 3,
              articleType: 'Теория',
              description:
                'Как пользоваться каталогом на сайте и чем он полезен'
            }
          ]
        }
      ]
    },
    // Second release here
    {
      id: 'part-2',
      title: 'Создание веб-плаката',
      chapters: [
        {
          id: 'chapter-2-1',
          title: 'Идея и концепция',
          href: '/handbook/part_2/chapter_1/chapter_2_1.html',
          articles: [
            {
              id: 'article-2-1-1',
              title: 'Как придумать тему',
              href: '/handbook/part_2/chapter_1/finding-idea.html',
              cover: cover_2_1_1,
              readingTime: 3,
              articleType: 'Теория',
              description:
                'Откуда брать идеи и как проверить, что тема не слишком абстрактная и не развалится в процессе.'
            },
            {
              id: 'article-2-1-2',
              title: 'Как определить стиль',
              href: '/handbook/part_2/chapter_1/defining-style.html',
              cover: cover_2_1_2,
              readingTime: 6,
              articleType: 'Теория',
              description:
                'Минимализм, хаос, пиксели, коллажи и прочее, как найти стиль для развития нарратива плаката'
            },
            {
              id: 'article-2-1-3',
              title: 'Статичные и динамичные модули',
              href: '/handbook/part_2/chapter_1/modules-overview.html',
              cover: cover_2_1_3,
              readingTime: 4,
              articleType: 'Теория',
              description:
                'Определяем интерактив и анимации в веб-плакате на этапе концепции'
            }
          ]
        },
        {
          id: 'chapter-2-2',
          title: 'Разработка макета',
          href: '/handbook/part_2/chapter_2/chapter_2_2.html',
          articles: [
            {
              id: 'article-2-2-1',
              title: 'Сетка и композиция',
              href: '/handbook/part_2/chapter_2/grid-composition.html',
              cover: cover_2_2_1,
              readingTime: 6,
              articleType: 'Дизайн',
              description:
                'Концептуальный и функциональный обзор сеток в вебе и композиции в веб-плакатах'
            },
            {
              id: 'article-2-2-2',
              title: 'Доработка главного экрана',
              href: '/handbook/part_2/chapter_2/refining-layout.html',
              cover: cover_2_2_2,
              readingTime: 3,
              articleType: 'Дизайн',
              description:
                'О важности первого экрана и какие особенности стоит учитывать при его разработке'
            },
            {
              id: 'article-2-2-3',
              title: 'Адаптивный и респонсивный дизайн',
              href: '/handbook/part_2/chapter_2/adaptive-responsive.html',
              cover: cover_2_2_3,
              readingTime: 6,
              articleType: 'Дизайн',
              description:
                'В чём разница между подходами и зачем нужны адаптивы. Сколько версий делать и какие брейкпоинты выбирать.'
            },
            {
              id: 'article-2-2-4',
              title: 'Разработка адаптивов',
              href: '/handbook/part_2/chapter_2/creating-breakpoints.html',
              articleType: 'Дизайн',
              cover: cover_2_2_4,
              readingTime: 4,
              description:
                'Финальная доработка адаптивов перед вёрсткой. Что можно упростить, что обязательно сохранить'
            },
            {
              id: 'article-2-2-5',
              title: 'Подготовка графики и фотографий',
              href: '/handbook/part_2/chapter_2/preparing-assets.html',
              articleType: 'Дизайн',
              cover: cover_2_2_5,
              readingTime: 4,
              description:
                'Форматы изображений, оптимизация веса, что нужно сделать до переноса в код'
            }
          ]
        },
        // chapter 3
        {
          id: 'chapter-2-3',
          title: 'Вёрстка веб-плаката',
          href: '/handbook/part_2/chapter_3/chapter_2_3.html',
          articles: [
            {
              id: 'article-2-3-1',
              title: 'Организация проекта',
              href: '/handbook/part_2/chapter_3/project-structure.html',
              cover: cover_2_3_1,
              articleType: 'Кодинг',
              readingTime: 6,
              description: 'Структура папок, именование файлов, подключение стилей'
            },
            {
              id: 'article-2-3-2',
              title: 'Grid, Flex и Absolute на практике',
              href: '/handbook/part_2/chapter_3/grid-flex-absolute.html',
              cover: cover_2_3_2,
              articleType: 'Кодинг',
              readingTime: 12,
              description: 'Три подхода к вёрстке с примерами кода. Как использовать и комбинировать'
            },
            {
              id: 'article-2-3-3',
              title: 'Относительные и абсолютные величины',
              href: '/handbook/part_2/chapter_3/units.html',
              cover: cover_2_3_3,
              articleType: 'Кодинг',
              readingTime: 8,
              description: 'Как различные единицы измерения влияют на поведение макета'
            },
            {
              id: 'article-2-3-4',
              title: 'Использование SVG',
              href: '/handbook/part_2/chapter_3/working-with-svg.html',
              cover: cover_2_3_4,
              articleType: 'Кодинг',
              readingTime: 7,
              description: 'Особенности работы с SVG форматом и как можно его анимировать'
            },
            {
              id: 'article-2-3-5',
              title: 'Вёрстка адаптивов',
              href: '/handbook/part_2/chapter_3/media-quireies.html',
              cover: cover_2_3_5,
              articleType: 'Кодинг',
              readingTime: 12,
              description: 'Несколько видов типичных технических решений в вёрстке адаптивного дизайна'
            }
          ]
        },
        // chapter 4
        // {
        //   id: 'chapter-2-4',
        //   title: 'Анимации в CSS',
        //   href: '/handbook/part_2/chapter_3/chapter_2_4.html',
        //   articles: [
        //     {
        //       id: 'article-2-4-1',
        //       title: 'Базовые анимации и @keyframes',
        //       href: '/handbook/part_2/chapter_4/keyframes.html'
        //     },
        //     {
        //       id: 'article-2-4-2',
        //       title: 'Timing-функции и характер движения',
        //       href: '/handbook/part_2/chapter_4/timing-functions.html'
        //     },
        //     {
        //       id: 'article-2-4-3',
        //       title: 'Transition и hover-эффекты',
        //       href: '/handbook/part_2/chapter_4/transitions.html'
        //     }
        //   ]
        // },
        // chapter 5
        // {
        //   id: 'chapter-2-5',
        //   title: 'Интерактив с JavaScript',
        //   href: '/handbook/part_2/chapter_5/chapter_2_5.html',
        //   articles: [
        //     {
        //       id: 'article-2-5-1',
        //       title: 'Добавление интерактивных элементов',
        //       href: '/handbook/part_2/chapter_5/events.html'
        //     },
        //     {
        //       id: 'article-2-5-2',
        //       title: 'Случайность и генеративность',
        //       href: '/handbook/part_2/chapter_5/randomness.html'
        //     },
        //     {
        //       id: 'article-2-5-5',
        //       title: 'Добавление звука',
        //       href: '/handbook/part_2/chapter_5/scroll-animations.html'
        //     }
        //   ]
        // },
        // ---------chapter 6----------
        // {
        //   id: 'chapter-2-6',
        //   title: 'Публикация и продвижение',
        //   href: '/handbook/part_2/chapter_6/chapter_2_6.html',
        //   articles: [
        //     {
        //       id: 'article-2-6-1',
        //       title: 'Чек-лист перед публикацией',
        //       href: '/handbook/part_2/chapter_6/cheklist.html'
        //     },
        //     {
        //       id: 'article-2-6-2',
        //       title: 'Публикация на GitHub Pages',
        //       href: '/handbook/part_2/chapter_6/github-pages.html'
        //     },
        //     {
        //       id: 'article-2-6-3',
        //       title: 'Где рассказать о своём плакате',
        //       href: '/handbook/part_2/chapter_6/promotion.html'
        //     }
        //   ]
        // }
      ]
    }
  ]
}

export default handbookNavData
