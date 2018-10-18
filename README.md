# ing-prog-web-1

Здесь будут материалы с уроков и ДЗ

Контактный
`email`: akenoq@yandex.ru

## Программное обеспечение для работы с веб-программированием

* Редактор кода Notepad++

   https://notepad-plus-plus.org/
  
* Браузер Google Chrome

   https://www.google.com/chrome/
   
* **Node.js** под Windows 64bit
   
   https://nodejs.org/dist/v8.12.0/node-v8.12.0-x64.msi

## ДЗ_1

В пример с урока добавить еще один квадратик.
Аналогично первому, только он будет двигаться уже во вертикали отталкиваться сверху и снизу

## ДЗ_2

1. Есть массив. Создать второй массив и записать в него только те числа, которые делятся на 7 и на 4

2. (дополнительное) Есть массив, перевернуть его, не создавая новый

## ДЗ_3

1. Установите библиотеку `fs` для работы с файловой системой в Node.js

* Откройте консоль `cmd` (так же как мы ее открывали для запуска кода на `js`) и вбейте команду `cd ` ("cd" + пробел) 

* После этого перетащите на нее папку с вашим проектом (папку, в которой будет лежать программа, работающая с файлами)

* Нажмите `Enter` => Таким образом в консоли вы перешли в вашу папку

* После этого вбейте в консоль команду `npm install fs` ля установки  в папку библиотеки `fs`

* Если все сделано верно, то в папке с проектом появится папка с библиотеками `node_modules`

* Можете приступать к работе с файлово системой :)


2. В папке `urok_4` найдете файл `dopolnenie.js`, в котором реализована генерация случаных отрезков.
Разобраться в коде случайного задания координат отрезков.

3. Создать функцию, которая возвращает обьекты такого формата

```
товар_1 = {
	наименование: <строка>,
	количество: <число>,
	цена: <число>,
	производитель: <строка>
}
```

`2a`: создать несколько обьектов этого типа, используя написанную функцию, и записать их в файл 'magaz.txt'

`2b`: после записи вывести на экран содержимое файла

> для работы с файлами используем функции, написанные на уроке из файла `work_with_file.js`



