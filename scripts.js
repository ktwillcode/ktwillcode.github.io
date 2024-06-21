document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.experience-item, .project-item, #skills ul li');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'rotateY(20deg)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'rotateY(0deg)';
        });
    });
});
