/*
 * @Author: fhc
 * @Date:   2015-10-30 08:31:57
 * @Last Modified by:   fhc
 * @Last Modified time: 2015-10-30 09:18:47
 */

(function($) {
    'use strict';
    // thanks to this guy https://github.com/thomaspark/bootswatch
    // cerulean cosmo cyborg darkly flatly journal lumen paper readable sandstone simplex slate spacelab superhero united yeti
    var themeNameArr = ['default', 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'paper', 'readable', 'sandstone', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti'];

    var changeThemeStr = '';

    // 下面是给 css link 改变地址
    if (!$('#themeLink')) {
        var $themeLink = $('#themeLink')
    } else {
        $("head").append('<link id="themeLink" rel="stylesheet" type="text/css" href="http://bootswatch.com/cerulean/bootstrap.min.css">')
    }

    var $changeTheme = $('.changeTheme');
    var $themeLink = $('#themeLink');

    function changeLinkUrl(themeName) {
        // $themeLink.prop('href', 'http://bootswatch.com/' + themeName + '/bootstrap.min.css');
        $themeLink.prop('href', 'bootswatch/bootstrap-' + themeName + '.css');
    }

    // 如果本地有存着皮肤的话，就用存着的那个
    if (localStorage.getItem('boostrapTheme')) {
        changeLinkUrl(localStorage.getItem('boostrapTheme'))
        $changeTheme.val(localStorage.getItem('boostrapTheme'));
    }

    // 如果是 select.changeTheme
    if ($changeTheme.get(0).tagName.toLowerCase() == 'select') {

        $.each(themeNameArr, function(index, val) {
            changeThemeStr += '<option>' + val + '</option>'
        });

        $changeTheme.html(changeThemeStr);

        $changeTheme.on('change', function() {
            // $themeLink.prop('href', 'http://bootswatch.com/' + $(this).val() + '/bootstrap.min.css');
            changeLinkUrl($(this).val())
                // 给localStorage 设个值
            localStorage.setItem('boostrapTheme', $(this).val());
        });

        // 如果是 ul.changeTheme>li>a
    } else if ($changeTheme.get(0).tagName.toLowerCase() == 'ul') {
        $.each(themeNameArr, function(index, val) {
            changeThemeStr += '<li><a data-themename=' + val + '>' + val + '</a></li>'
        });

        $changeTheme.html(changeThemeStr)
        $changeTheme.find('li a').on('click', function() {
            // $themeLink.prop('href', 'http://bootswatch.com/' + $(this).data('themename') + '/bootstrap.min.css');
            changeLinkUrl($(this).data('themename'))
                // 给localStorage 设个值
            localStorage.setItem('boostrapTheme', $(this).data('themename'));
        });
    }

})(jQuery)
