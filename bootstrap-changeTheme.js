/*
 * @Author: fhc
 * @Date:   2015-10-30 08:31:57
 * @Last Modified by:   fhc
 * @Last Modified time: 2015-10-30 10:16:44
 */

(function($) {
    'use strict';
    // thanks to this guy https://github.com/thomaspark/bootswatch
    var themeNameArr = ['default', 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'paper', 'readable', 'sandstone', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti'],

        changeThemeStr = '',
        $changeTheme = $('.changeTheme');

    // 下面是给 css link 改变地址
    if (!$('#themeLink')) {
        var $themeLink = $('#themeLink')
    } else {
        $("head").append('<link id="themeLink" rel="stylesheet" type="text/css" href="http://bootswatch.com/cerulean/bootstrap.min.css">')
    }

    var $themeLink = $('#themeLink');

    function changeLinkUrl(themeName) {
        // themeNameArr.shift()
        // $themeLink.prop('href', 'http://bootswatch.com/' + themeName + '/bootstrap.min.css');

        $themeLink.prop('href', 'bootswatch/bootstrap-' + themeName + '.css');
    }

    // 如果本地有存着皮肤的话，就用存着的那个
    if (localStorage.getItem('boostrapTheme')) {
        changeLinkUrl(localStorage.getItem('boostrapTheme'))
        $changeTheme.val(localStorage.getItem('boostrapTheme'));
    }


    $changeTheme.each(function() {
        var $this = $(this)

        if ($this.prop('tagName').toLowerCase() == 'select') {
            var selectThemeStr = '';

            $.each(themeNameArr, function(index, val) {
                selectThemeStr += '<option>' + val + '</option>'
            });

            $this.html(selectThemeStr);

            $this.on('change', function() {
                var thisVal = $this.val();
                changeLinkUrl(thisVal);
                // 给localStorage 设个值
                localStorage.setItem('boostrapTheme', thisVal);
            });
        } else if ($this.prop('tagName').toLowerCase() == 'ul') {
            var ulThemeStr = '';

            $.each(themeNameArr, function(index, val) {
                ulThemeStr += '<li><a data-themename=' + val + '>' + val + '</a></li>'
            });

            $this.html(ulThemeStr)
            $this.find('li a').on('click', function() {
                var $thisA = $(this);
                var thisAData = $thisA.data('themename');
                changeLinkUrl(thisAData)
                    // 给localStorage 设个值
                localStorage.setItem('boostrapTheme', thisAData);
            });
        }
    });

})(jQuery)
