# THEMRISHvite 

![screenshot](https://github.com/yat8823jp/themrishvite/blob/main/screenshot.png)

- [Vite](https://ja.vitejs.dev/)
- SCSS
- Tailwind CSS - [Cheat Sheet](https://flowbite.com/tools/tailwind-cheat-sheet/)
- ECMAScript2018(ES9)
- [LOCAL](https://localwp.com/)

## required

Node >=16.0.0

## Install

``` npm install ```

# Usage

1. LOCAL project start
2. ``` npm run dev ```

If image below on screen and cli is no error so it's work.

![screenshot](https://github.com/yat8823jp/themrishvite/blob/main/screenshot.png)


## For scss

You need use CSS variable + set value.

example
```
background: url( $base-dir + 'assets/images/dummy.jpg' );
```

### develop mode

$base-dir: '/'

### production mode

$base-dir: '/dist/'

## Config

### Change develop mode

functions.php

``` define( "IS_VITE_DEVELOPMENT", true ); //develop mode on ```

``` define( "IS_VITE_DEVELOPMENT", false ); //develop mode off ```

Develop mode is main.js to read SCSS file.

### Not use develop mode

Develop mode off is read from the main.css in dist directory.
Not use SCSS file.

If you want to deploy to server, so it isn't use develop mode.
- First, you use build command.
- Second, you deployment to server.

## build

``` npm run build ```

Setting file is ./main.js.
Build to dist directory for main.js.

V1.4.0

Use partial loading for scss

V1.3.1

Bug fix css use to dist mode.

V1.3.0

- delete squoosh
- SCSS partial file support
- update packages
- update release mode
 
V1.2.1

- build image assetsInlineLimit add num 0
 
V1.2.0

- add webp format
 
V1.1.0

- add build function

V1.0.0

- develop mode release