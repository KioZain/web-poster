import gsap from 'gsap';

export function initInfiniteCarousel() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');

    if (!track || items.length === 0) return;


    const itemWidth = 224;
    const gap = 20;
    const totalItems = items.length;

    const step = itemWidth + gap;
    const totalWidth = step * totalItems;
    const duration = totalItems * 2.5;

    const minScale = 0.5;
    const maxScale = 1.0;
    const hoverScale = 1.08;

    const startOffset = -step;

    gsap.set(track, { left: 0 });

    gsap.set(items, {
        x: (i) => startOffset + (i * step)
    });

    const getViewportCenter = () => window.innerWidth / 2;

    const tl = gsap.to(items, {
        duration: duration,
        ease: 'none',
        x: `+=${totalWidth}`,
        modifiers: {
            x: gsap.utils.unitize(x => {
                // Модуль с учётом начального смещения
                let val = parseFloat(x) % totalWidth;
                // Корректируем отрицательные значения
                if (val > totalWidth - step) {
                    val -= totalWidth;
                }
                return val;
            })
        },
        repeat: -1,
        onUpdate: updateScales
    });

    function updateScales() {
        const center = getViewportCenter();

        items.forEach(item => {
            if (item.dataset.hovered === 'true') return;

            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;

            const distanceFromCenter = Math.abs(itemCenter - center);
            const maxDistance = center;
            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

            const easedDistance = normalizedDistance * normalizedDistance;
            const scale = maxScale - (maxScale - minScale) * easedDistance;

            gsap.set(item, { scale: scale });
        });
    }

    let resumeTimeout = null;
    let isHovering = false;

    wrapper.addEventListener('mouseenter', () => {
        isHovering = true;
        clearTimeout(resumeTimeout);
        tl.pause();
    });

    wrapper.addEventListener('mouseleave', () => {
        isHovering = false;
        resumeTimeout = setTimeout(() => {
            if (!isHovering) {
                tl.resume();
            }
        }, 100);
    });

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.dataset.hovered = 'true';
            clearTimeout(resumeTimeout);
            tl.pause();

            gsap.to(item, {
                scale: hoverScale,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            item.dataset.hovered = 'false';


            const center = getViewportCenter();
            const rect = item.getBoundingClientRect();


                const itemCenter = rect.left + rect.width / 2;
            const distanceFromCenter = Math.abs(itemCenter - center);
            const normalizedDistance = Math.min(distanceFromCenter / center, 1);
            const easedDistance = normalizedDistance * normalizedDistance;






            const targetScale = maxScale - (maxScale - minScale) * easedDistance;

            gsap.to(item, {
                scale: targetScale,
                duration: 0.3,
                ease: 'power2.out'
            });


            resumeTimeout = setTimeout(() => {
                if (!isHovering) {
                    tl.resume();
                }
            }, 100);
        });
    });

    console.log('Carousel initialized:', { totalItems, step, totalWidth });
}

document.addEventListener('DOMContentLoaded', initInfiniteCarousel);