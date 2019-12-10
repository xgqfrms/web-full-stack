var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('.progress'),
    scroll;

document.addEventListener('scroll', function() {
    scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
    // progress.style.setProperty('width', scroll + '%');
    // if (tweetItBtn && topBtn && !topBtn.classList.contains('top-active') && window.scrollY >= 1500) {
    //     topBtn.classList.add('top-active');
    //     tweetItBtn.classList.add('tweet-it-active');
    // } else if (topBtn && topBtn.classList.contains('top-active') && window.scrollY < 1500) {
    //     topBtn.classList.remove('top-active');
    //     tweetItBtn.classList.remove('tweet-it-active');
    // }
}, {
  passive: true
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw3.js')
    .catch(function(err) {
        console.log('ServiceWorker failed 😢', err);
    });
}
