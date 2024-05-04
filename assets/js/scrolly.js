window.addEventListener('scroll', function() {
    var button = document.getElementById('btn-scroll');
    if (window.scrollY > 100) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});

document.getElementById('btn-scroll').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
