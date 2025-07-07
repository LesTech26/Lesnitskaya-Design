document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-background');
    if (video) {
        video.play().catch(e => console.log('Автовоспроизведение не сработало:', e));
    }
});
