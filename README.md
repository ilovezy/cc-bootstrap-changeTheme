## using bootswatch to change themes

very nice try, love this

check the [demo page](http://www.icehota.com/cc-bootstrap-changeTheme/index.html) here, just click the button `changeTheme` on the navbar rightside

enjoy it

thanks to the [thomaspark](https://github.com/thomaspark/bootswatch)

by add any of these css links to you file or just simply download these css

    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/cerulean/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/cosmo/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/cyborg/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/darkly/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/flatly/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/journal/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/lumen/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/paper/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/readable/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/sandstone/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/simplex/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/slate/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/spacelab/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/superhero/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/united/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://bootswatch.com/yeti/bootstrap.min.css">
  

## add a changeTheme.html page

basically use the select to change the link so you may see the skin changes

> notice that the default link need an id
> you can check the the js in this changeTheme.html 
 
## how to use 

simplely add a bootstrap dropdown and make sure the ul has no child li

    <div class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">changeTheme <b class="caret"></b></a>
        <ul class="dropdown-menu changeTheme">
        </ul>
    </div>

and give the `ul.dropdown-menu` a class `changeTheme`

***

or add a `select` and give it a class `changeTheme` and make sure select has no child `option`

    <select class="form-control changeTheme" name="selectTheme"></select>

after all thanks to [thomaspark](https://github.com/thomaspark/bootswatch)
go fork it!!! really good


## notice
if you don't want to download the bootswatch folder

you can change the bootstrap-changeTheme.js

just search this function 

and commit the second line, use the first two lines

> notice that bootswatch did't has a default css,so just forget it

    function changeLinkUrl(themeName) {
        // themeNameArr.shift() // remove the default
        // $themeLink.prop('href', 'http://bootswatch.com/' + themeName + '/bootstrap.min.css');
        $themeLink.prop('href', 'bootswatch/bootstrap-' + themeName + '.css');
    }





