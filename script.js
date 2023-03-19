let menu_bar = document.querySelector('.header');
window.addEventListener('scroll', function() {
    let window_scroll_by = this.scrollY;
    if ((window_scroll_by >= 250)) {
        menu_bar.className = 'header fixed';
    }else{
        menu_bar.className = 'header';
    }
});