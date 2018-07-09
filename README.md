# Окружение для изучения Webdriver'a
**Установка**
1. Склонировать этот репозиторий
```console
user@name:~$ git clone https://github.com/nurseryjs/learnWdio.git
```
2. Проверить есть ли у вас nodejs, если нет - установить.
```console
user@name:~$ node -v
```
3. Установить selenium-standalone
```console
user@name:~$ npm install selenium-standalone@latest -g
```
4. Установить зависимости
```console
user@name:~$ npm i
```
5. Скопировать .env.default, назвав .env. B поправить конфигурацию под себя
6. Запустить selenium-standalone
```console
user@name:~$ npm run selenium:install
```
Готово. Можно начинать работать.
```console
user@name:~$ npm run test
```

**Разработка своих тестов**
1. Сделать свою git ветку
```console
user@name:~$ git checkout -b ВАШЕ_ИМЯ
```
2. Разрабатываете по примеру test/blank.js
3. Коммитите изменения
```console
user@name:~$ git add ИЗМЕНЕННЫЕ_ФАЙЛЫ
```
```console
user@name:~$ git commit -m "ТЕКСТ_КОММИТА"
```
4. Отправляете на сервер
```console
user@name:~$ git push origin ВАШЕ_ИМЯ
```
[Подробнее про git](https://www.youtube.com/watch?v=QkY8lXZuiqQ&list=PLDyvV36pndZHkDRik6kKF6gSb0N0W995h)</br>
 
