# Today 24.05


[![mongoose](img/mongoose.png)](http://mongoosejs.com/)


### [Mongoose](http://mongoosejs.com/)


Continuing with mongoose, today review the structure folders for a project.

Here one example before and after for the structure:

1. Before structure, all in one file.

![img/01.png](img/01.png)

2. After with structure organization.

![img/02.png](img/02.png)

Here you can see the exercises the example that do you can see.

1. [Before structure, all in one file.](01mongoose-cats_full_file)
1. [After with structure organization.](02mongoose-cats_structured_organization)

## Practice with CURL

### List all tasks
``curl localhost:3000/tasks ``

### Add task
``curl -X POST --data "name=Paul" localhost:3000/tasks``

### Update data by Id
``curl -X PUT --data "name=Libros1&completedAd=true" localhost:3000/task/59258356c0398a2630710ae1``

### Remove by Id.

``curl -X DELETE localhost:3000/task/59259032f3acaa3db019f1a8``

