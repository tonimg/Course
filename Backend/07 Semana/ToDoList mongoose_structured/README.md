# Api tasks

## List all tasks

```
    curl localhost:3000/tasks
```

## Remove by Id

OK
```
    curl -X DELETE localhost:3000/task/592415a8b4954a0b84a27c45
```

KO
```
    curl -X DELETE localhost:3000/task/esteesmiid
```

## Add task

OK
```
    curl -X POST --data "name=Paul" localhost:3000/tasks
    curl -X POST --data "name=George&age=22" localhost:3000/tasks
```

KO
```
    curl -X POST --data "name=John&age=quince" localhost:3000/tasks
    curl -X POST --data "age=234" localhost:3000/tasks
    curl -X POST --data "" localhost:3000/tasks
    curl -X POST localhost:3000/tasks
```

## Update data by Id

OK
```
    curl -X PUT --data "age=152" localhost:3000/task/59254237d2046f0c42a9497a
    curl -X PUT --data "name=Ringo&age=58" localhost:3000/task/59254237d2046f0c42a9497a
    curl -X PUT --data "age=36" localhost:3000/task/59254922a5df6b175ac64f52
```
