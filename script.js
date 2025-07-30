document.addEventListener('DOMContentLoaded', function() {

    const scrollAnimate = (element) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(element);
    };

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => {
        scrollAnimate(el);
    });

    const mapContainer = document.getElementById('map-container');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14055.48894121503!2d83.9734185871582!3d28.241513200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595f4e6f2f331%3A0x676b79f67a2bd8f7!2sGharipatan%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1672902345678"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>`;
        }

});