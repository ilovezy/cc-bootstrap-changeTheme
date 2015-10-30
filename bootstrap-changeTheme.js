/*
 * @Author: fhc
 * @Date:   2015-10-30 08:31:57
 * @Last Modified by:   fhc
 * @Last Modified time: 2015-10-30 08:32:18
 */

(function($) {
    'use strict';
    // thanks to this guy https://github.com/thomaspark/bootswatch
    // cerulean cosmo cyborg darkly flatly journal lumen paper readable sandstone simplex slate spacelab superhero united yeti
    var themeNameArr = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'paper', 'readable', 'sandstone', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti'];

    var selectThemeStr = '';

    // 下面是给 css link 改变地址
    if (!$('#themeLink')) {
        var $themeLink = $('#themeLink')
    } else {
        $("head").append('<link id="themeLink" rel="stylesheet" type="text/css" href="http://bootswatch.com/cerulean/bootstrap.min.css">')
    }

    var $selectTheme = $('.selectTheme');
    var $themeLink = $('#themeLink');

    // 如果本地有存着皮肤的话，就用存着的那个
    if (localStorage.getItem('boostrapTheme')) {
        $themeLink.prop('href', 'http://bootswatch.com/' + localStorage.getItem('boostrapTheme') + '/bootstrap.min.css');
        $selectTheme.val(localStorage.getItem('boostrapTheme'));
    }

    // 如果是 select.selectTheme
    if ($selectTheme.get(0).tagName.toLowerCase() == 'select') {
        // alert('select')

        $.each(themeNameArr, function(index, val) {
            selectThemeStr += '<option>' + val + '</option>'
        });

        $selectTheme.html(selectThemeStr);

        $selectTheme.on('change', function() {
            $themeLink.prop('href', 'http://bootswatch.com/' + $(this).val() + '/bootstrap.min.css');
            // 给localStorage 设个值
            localStorage.setItem('boostrapTheme', $(this).val());
        });

        // 如果是 ul.selectTheme>li>a
    } else if ($selectTheme.get(0).tagName.toLowerCase() == 'ul') {
        $.each(themeNameArr, function(index, val) {
            selectThemeStr += '<li><a data-themename=' + val + '>' + val + '</a></li>'
        });

        $selectTheme.html(selectThemeStr)
        $selectTheme.find('li a').on('click', function() {
            $themeLink.prop('href', 'http://bootswatch.com/' + $(this).data('themename') + '/bootstrap.min.css');
            // 给localStorage 设个值
            localStorage.setItem('boostrapTheme', $(this).data('themename'));
        });
    }

})(jQuery)
