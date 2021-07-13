#Теоретический вопрос

-Опишите своими словами разницу между функциями setTimeout() и setInterval().
-Что произойдет, если в функцию setTimeout() передать нулевую задержку? Сработает ли она мгновенно, и почему?
-Почему важно не забывать вызывать функцию clearInterval(), когда ранее созданный цикл запуска вам уже не нужен?

1. Функция setTimeout() срабатывает однократно, функция setInterval() срабатывает постояно через заданый промежуток времени, если не будет вызван метод глобального объекта clearInterval()
2. Функция колбэк переданная в setTimeout() попадает в API среды в которой вызвана (Браузер, NodeJS etc), по истечению времени заданого вторым аргументом setTimeout() она станет в очередь Callback Queue и, когда до нее дойдет очередь, Even Loop отправит ее в стек вызовов. Т.е. нет, мгоновенно она не сработает.
3. clearInterval() следует вызывать чтобы не засорять память и API среды исполнения ненужными вызовами. Сборщик мусора не игнорирует активный setInterval(), соотвественно возникают утечки памяти