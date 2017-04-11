
#11/04

###Acabando con Git & Git


***Notes***:

Si no introduces ningún comentario cuando haces commit (gi commit -m "mensaje")
Hay que hacer esto: (ya que estamos en un editor que se maneja con linea de comandos.)
`Esc + :
q!`

para volver a un estado anterior se usa el comando `git checkout +` el hash
y para volver al archivo inicial es `git checkout master`
Para renombrar ficheros usamos el comando `mv` :

`mv gitbasics.md git_basics_command.md`

`git add --all`

`git commit -m "file name change"`

#Para subirlo online:

Creamos el repositorio en github.com
Después en linea de comandos:

`git remote add origin https://github.com/tonimg/git_notes.git`

revisar estado
`git remote -v`

subirlo:
`git push -u origin master`


#Social Media

Creación de blog, y estar presentes en redes sociales.
