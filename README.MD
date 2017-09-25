#Node.js School Асинхронность в JavaScript 

- [Голосовалка](http://realtime-poll.ru/)

##Задание 1
- [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [request](https://www.npmjs.com/package/request)

##Promise
- [У нас проблемы с промисами](https://habrahabr.ru/company/mailru/blog/269465/)
- [https://learn.javascript.ru/promise](https://learn.javascript.ru/promise)

##Задание 2
- [стандарт promise](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise-objects)
- [util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original)

##Генераторы
- [co](https://github.com/tj/co)

##Koa
- [официальный сайт](http://koajs.com/)
- [koa](https://github.com/koajs/koa)
- [koa-static](https://github.com/koajs/static)
- [koa-bodyparser](https://github.com/koajs/bodyparser)
- [koa-router](https://github.com/alexmingoia/koa-router)

##Задание для приложения
Реализовать логику транзакций по аналогии с картами.
- файл с транзациями: массив с элементами формата (type один из списка ["paymentMobile", "prepaidCard", "card2Card"])
```
	{
		"id": 1,
		"cardId": 1,
		"type": "prepaidCard",
		"data": "220003000000003",
		"time": "2017-08-9T05:28:31+03:00",
		"sum": "2345"
	}
```
- контроллер create POST(/cards/:id/transactions/) - создает новую транзакцию по карте
- контроллер get GET(/cards/:id/transactions/) - возвращает список тразакций по карте
- модель транзации. Методы create(transactionData) и get(cardId). Метод remove должен кидать исключение, т.к транзакции удалять нельзя. 

