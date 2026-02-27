const modulesNavData = {
    parts: [
        {
            id: 'static',
            title: 'Статичные модули',
            chapters: [
                {
                    id: 'module-movement',
                    title: 'Движение',
                    href: '/modules/static/movement.html',
                    articles: [
                        {
                            id: 'movement-about',
                            title: 'О модуле',
                            href: '/modules/static/movement.html#about',
                        },
                        {
                            id: 'movement-linear',
                            title: 'Линейное движение',
                            href: '/modules/static/movement.html#linear',
                        },
                        {
                            id: 'movement-translational',
                            title: 'Колебательное движение',
                            href: '/modules/static/movement.html#pendulum',
                        },
                        {
                            id: 'movement-translational',
                            title: 'Пульсация',
                            href: '/modules/static/movement.html#pulse',
                        },
                        {
                            id: 'movement-translational',
                            title: 'Дрифт',
                            href: '/modules/static/movement.html#drift',
                        },
                        {
                            id: 'movement-translational',
                            title: 'Эластичное движение',
                            href: '/modules/static/movement.html#elastic',
                        },
                        {
                            id: 'movement-translational',
                            title: 'Орбитальное движение',
                            href: '/modules/static/movement.html#orbit',
                        },
                        {
                            id: 'movement-translational',
                            title: 'Псевдослучайное движение',
                            href: '/modules/static/movement.html#pseudo-random',
                        },
                    ],
                },
                {
                    id: 'module-rotation',
                    title: 'Вращение',
                    href: '/modules/static/rotation.html',
                    articles: [],
                },
                {
                    id: 'module-click',
                    title: 'Клик',
                    href: '/modules/static/click.html',
                    articles: [],
                },
                {
                    id: 'module-drag',
                    title: 'Перетаскивание',
                    href: '/modules/static/drag.html',
                    articles: [],
                },
            ],
        },
        {
            id: 'dynamic',
            title: 'Динамичные модули',
            chapters: [
                // Сюда добавляются динамичные модули по мере создания
                // {
                //     id: 'module-example',
                //     title: 'Пример',
                //     href: '/modules/dynamic/example.html',
                //     articles: [],
                // },
            ],
        },
    ],
}

export default modulesNavData