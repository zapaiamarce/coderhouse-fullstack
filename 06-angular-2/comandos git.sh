git init
# para crear un repo en la carpeta donde estas parad@

git status
# para saber el estado del repo

git add .
# para agregar archivos al repositorio (es necesario hacer esto cuando se crean archivos o carpetas nuevas)


git commit -am "mensaje del commit"
# para crear una nueva versión. Esto sella todos los cambios echos en un "commit". (es necesario cada vez que se avanza con algo y cuando se quiere subir a un repo central como github). commit == version


git log
# para ver la lista de commits

git remote add DIRECCION_DEL_REPO
# para agregar un remoto (si creaste el repo con "git init" y queres agregar github como repo central para subirlo ahi, tenes que hacer esto)


git pull NOMBRE_DE_REMOTO BRANCH
# para bajar todos los commits (cambios) del repo central (por ejemplo github) si clonaste el repo con git clone el NOMBRE_DEL_REMOTO es origin y el BRANCH a menos que te hayas creado un branch, siempre se llama: master

git push NOMBRE_DE_REMOTO BRANCH
# para subir todos los commits (cambios) que hayan creado localmente pero no hayan subido al remoto

git clone RUTA_DEL_REPO
# para crear una copia de un repo (por ejemplo github). Este comando automaticamente agrega un remoto llamado "origin" asi que los comandos para subir y bajar los commits locales al repo remoto serian

"git pull origin master"
"git push origin master"