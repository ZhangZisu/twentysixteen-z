(function ($) {
    var main = $('#main')

    $(document)
        .pjax('a', '#main', { fragment: '#main', timeout: 6000 })
        .on('pjax:send', () => {
            main.addClass('pjax-loading')
            NProgress.start()
        })
        .on('pjax:complete', () => {
            main.removeClass('pjax-loading')
            NProgress.done()
            Prism.highlightAll()
        })
})(jQuery);

(function ($) {
    var menu = $('#context-menu'), body = $('body'), w, h, l, t, op = false, fr = true, cl = () => {
        op = false
        menu.hide()
    }

    $(document).contextmenu((e) => {
        e.preventDefault()
        if (op) {
            cl()
        } else {
            if (!w || !h) {
                w = menu.width(), h = menu.height()
            }
            if ((w + e.clientX) >= $(window).width()) {
                menu.css('left', (e.pageX - w) + "px")
            } else {
                menu.css('left', e.pageX + "px")
            }
            if ((h + e.clientY) >= $(window).height()) {
                menu.css('top', (e.pageY - h) + "px")
            } else {
                menu.css('top', e.pageY + "px")
            }
            if (fr) {
                menu.css('visibility', '')
                fr = false
            }
            menu.show()
            op = true;
            ({ left: l, top: t } = menu.offset())
        }
    }).click((e) => {
        if (op && (e.pageX < l || e.pageX > l + w || e.pageY < t || e.pageY > t + h)) cl()
    })

    $('.context-menu-item').click(() => cl())
})(jQuery);
