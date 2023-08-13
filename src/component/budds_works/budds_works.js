export default (() => {
    const video = document.querySelector('video');

    const observer = new IntersectionObserver(() => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }, { threshold: 0.4 });

    observer.observe(video);
})();
