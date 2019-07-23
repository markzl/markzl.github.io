document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        // $('.justified-gallery').justifiedGallery();
        $('.justified-gallery').justifiedGallery({rowHeight:160, margins:4});
    }
});