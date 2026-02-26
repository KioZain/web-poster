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
                            href: '/handbook/part_1/chapter_1/about_webposter.html'
                        },
                        {
                            id: 'article-1-1-2',
                            title: 'Отличие от классического плаката',
                            href: '/handbook/part_1/chapter_1/print-vs-web.html'
                        },
                        {
                            id: 'article-1-1-3',
                            title: 'Отличия от лендинга и сайта',
                            href: '/handbook/part_1/chapter_1/poster-vs-website.html'
                        },
                        {
                            id: 'article-1-1-4',
                            title: 'Статичный и динамичный веб-плакат',
                            href: '/handbook/part_1/chapter_1/static-dynamic.html'
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
                            href: '/handbook/part_1/chapter_2/why-create.html'
                        },
                        {
                            id: 'article-1-2-2',
                            title: 'Во что можно развить веб-плакат',
                            href: '/handbook/part_1/chapter_2/further-development.html'
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
                            title: 'Избранные веб-плакаты 2020-2025',
                            href: '/handbook/part_1/chapter_3/selected-works.html'
                        },
                        {
                            id: 'article-1-3-2',
                            title: 'Как пользоваться каталогом',
                            href: '/handbook/part_1/chapter_3/catalog-guide.html'
                        }
                    ]
                }
            ]
        },
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
                            href: '/handbook/part_2/chapter_1/finding-idea.html'
                        },
                        {
                            id: 'article-2-1-2',
                            title: 'Как определить стиль',
                            href: '/handbook/part_2/chapter_1/defining-style.html'
                        },
                        {
                            id: 'article-2-1-3',
                            title: 'Статичные и динамичные модули',
                            href: '/handbook/part_2/chapter_1/modules-overview.html'
                        },
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
                            href: '/handbook/part_2/chapter_2/grid-composition.html'
                        },
                        {
                            id: 'article-2-2-2',
                            title: 'Доработка главного экрана',
                            href: '/handbook/part_2/chapter_2/refining-layout.html'
                        },
                        {
                            id: 'article-2-2-3',
                            title: 'Адаптивный и респонсивный дизайн',
                            href: '/handbook/part_2/chapter_2/adaptive-responsive.html'
                        },
                        {
                            id: 'article-2-2-4',
                            title: 'Разработка адаптивов',
                            href: '/handbook/part_2/chapter_2/creating-breakpoints.html'
                        },
                        {
                            id: 'article-2-2-5',
                            title: 'Подготовка графики и фотографий',
                            href: '/handbook/part_2/chapter_2/preparing-assets.html'
                        },
                        {
                            id: 'article-2-2-6',
                            title: 'Какой подход к вёрстке выбрать',
                            href: '/handbook/part_2/chapter_2/choosing-approach.html'
                        },
                    ]
                },
                {
                    id: 'chapter-2-3',
                    title: 'Вёрстка веб-плаката',
                    href: '/handbook/part_2/chapter_3/chapter_2_3.html',
                    articles: [
                        {
                            id: 'article-2-3-1',
                            title: 'Организация проекта',
                            href: '/handbook/part_2/chapter_3/project-structure.html'
                        },
                        {
                            id: 'article-2-3-2',
                            title: 'Grid, Flex и Absolute на практике',
                            href: '/handbook/part_2/chapter_3/grid-flex-absolute.html'
                        },
                        {
                            id: 'article-2-3-3',
                            title: 'Относительные и абсолютные величины',
                            href: '/handbook/part_2/chapter_3/units.html'
                        },
                        {
                            id: 'article-2-3-4',
                            title: 'Использование SVG в',
                            href: '/handbook/part_2/chapter_3/working-with-svg.html'
                        },
                        {
                            id: 'article-2-3-5',
                            title: 'Вёрстка адаптивов',
                            href: '/handbook/part_2/chapter_3/media-quireies.html'
                        },
                    ]
                },
                {
                    id: 'chapter-2-4',
                    title: 'Анимации в CSS',
                    href: '/handbook/part_2/chapter_3/chapter_2_4.html',
                    articles: [
                        {
                            id: 'article-2-4-1',
                            title: 'Базовые анимации и @keyframes',
                            href: '/handbook/part_2/chapter_4/keyframes.html'
                        },
                        {
                            id: 'article-2-4-2',
                            title: 'Timing-функции и характер движения',
                            href: '/handbook/part_2/chapter_4/timing-functions.html'
                        },
                        {
                            id: 'article-2-4-3',
                            title: 'Transition и hover-эффекты',
                            href: '/handbook/part_2/chapter_4/transitions.html'
                        },
                    ]
                },
                {
                    id: 'chapter-2-5',
                    title: 'Интерактив с JavaScript',
                    href: '/handbook/part_2/chapter_5/chapter_2_5.html',
                    articles: [
                        {
                            id: 'article-2-5-1',
                            title: 'Добавление интерактивных элементов',
                            href: '/handbook/part_2/chapter_5/events.html'
                        },
                        {
                            id: 'article-2-5-2',
                            title: 'Случайность и генеративность',
                            href: '/handbook/part_2/chapter_5/randomness.html'
                        },
                        {
                            id: 'article-2-5-5',
                            title: 'Добавление звука',
                            href: '/handbook/part_2/chapter_5/scroll-animations.html'
                        },
                    ]
                },
                {
                    id: 'chapter-2-6',
                    title: 'Публикация и продвижение',
                    href: '/handbook/part_2/chapter_6/chapter_2_6.html',
                    articles: [
                        {
                            id: 'article-2-6-1',
                            title: 'Чек-лист перед публикацией',
                            href: '/handbook/part_2/chapter_6/cheklist.html'
                        },
                        {
                            id: 'article-2-6-2',
                            title: 'Публикация на GitHub Pages',
                            href: '/handbook/part_2/chapter_6/github-pages.html'
                        },
                        {
                            id: 'article-2-6-3',
                            title: 'Где рассказать о своём плакате',
                            href: '/handbook/part_2/chapter_6/promotion.html'
                        },
                    ]
                },
            ]
        }
    ]
}

export default handbookNavData