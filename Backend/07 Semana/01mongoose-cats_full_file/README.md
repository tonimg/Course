# Api Cats

## List all cats

```
    curl localhost:3000/cats
```

## Remove by Id

OK
```
    curl -X DELETE localhost:3000/cat/5924175e948f080dfeeb1685
```

KO
```
    curl -X DELETE localhost:3000/cat/esteesmiid
```

## Add Cat

OK
```
    curl -X POST --data "name=Paul" localhost:3000/cats
    curl -X POST --data "name=John&age=15" localhost:3000/cats
```

KO
```
    curl -X POST --data "name=John&age=quince" localhost:3000/cats
    curl -X POST --data "age=234" localhost:3000/cats
    curl -X POST --data "" localhost:3000/cats
    curl -X POST localhost:3000/cats
```

## Update data by Id

OK
```
    curl -X PUT --data "age=152" localhost:3000/cat/59254237d2046f0c42a9497a
    curl -X PUT --data "name=Ringo&age=58" localhost:3000/cat/59254237d2046f0c42a9497a
```
