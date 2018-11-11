#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build:prod

rm -rf ../public_html/js/ ../public_html/css/ ../public_html/img/
cp -r ./prod/* ../public_html
mv ../public_html/index.html ../public_html/wp-content/themes/mergeplace/page-vue.php