---
layout: post
title:  "Configuración de un repositorio"
author: raquel
date: '2020-09-01'
category: 
        - git
        - github
image: assets/img/posts/git_config.jpg
---

<blockquote>
</blockquote>

¿Cuántas veces has subido algo a un repositorio con el usuario que no deberías? ¿Quieres cambiar tu configuración de Git? ¿No sabes dónde se guarda la configuración o cómo consultarla? Este pequeño artículo pertenece a la ampliación de conocimientos sobre repositorios Git.

Así que, ¡allá vamos!

## Configuración de git

Son muchas las opciones que tenemos para configurar nuestra consola de Git desde el usuario hasta el editor que queremos usar por defecto, y eso mismo lo podemos configurar para un repositorio concreto o entorno local, y para configurarlo a nivel genérico o global.

Toda nuestra configuración de Git se puede modificar y consultar a través de la herramienta `git config` y añadir los flags que queramos en concreto para obtener y establer las variables de configuración que controlan el aspecto y funcionamiento de Git. Toda la documentación oficial sobre la configuración de Git puedes encontrarla en su [página oficial](git_config_web)

## Dónde se guarda esa configuración y cómo la consulto

Hay varios niveles de configuración en Git: sistema, global, local y worktree, los cuales se corresponden con cada uno de los entornos en los que podemos configurar nuestra relación con Git. Cada una de estas configuraciones se guarda en un fichero diferente y vamos "pisando" la configuración de los entornos más genéricos a los más específicos.

La lista ordenada de la configuración más general a la más específica es la siguiente con el path correspondiente a su archivo de configuración y el comando de git para consultar la configuración de ese fichero:

1. System: *\[directorio_instalacion_git\]/etc/gitconfig* `$ git config --system --list`
2. Global: *\[HOME\]/.gitconfig* `$ git config --global --list`
3. Local: *\[repositorio_git\]/.git/config* `$ git config --local --list`
4. Worktree: *\[repositorio_git\]/.git/config.worktree* `$ git config --worktree --list`

Donde normalmente los paths serán:

|       | Windows     | Linux     |
| :------------- | :----------: | -----------: |
|  *\[directorio_instalación_git\]* | C:/Program Files/Git   | ~etc/    |
| *\[HOME\]*   | C:\Users/\[username\] | ~home/\[username\] o ~root/ |


Si quieres ver de qué fichero está cogiendo qué configuración en cada momento puedes usar el siguiente comando el cual muestra el fichero y qué configuración aplica con algunos ejemplos de lo que puede salir:

```console
$ git config --list --show-origin
file:C:/Program Files/Git/etc/gitconfig core.symlinks=false
file:C:/Program Files/Git/etc/gitconfig pull.rebase=false
...
file:C:/Users/Fishes/.gitconfig user.name=Raquel
file:C:/Users/Fishes/.gitconfig core.editor=vim
...
file:.git/config        remote.origin.url=https://github.com/raquelfishes/raquelfishes.github.io.git
...
```

Recuerda, que las **configuraciones más específicas van a sobreescribir las más genéricas**.

## ¿Qué configuro primero? El usuario

Si ves muchas cosas que no entiendes, y te lias con tanta configuración, no te preocupes. La mayoría lo usarás por defecto. Lo primero es lo primero, a configurar tu usuario, si no tienes usuario no vas a poder hacer ni un commit.
Así que vamos a configurar el nombre de usuario y correo electrónico a nivel global y no te preocupes esta información no va a parar a ninguna lista de correo ni nada, se tratará como metadatos para identificar tus cambios en el repositorio Git.

Puedes modificarlo la configuración tanto modificando los ficheros o por consola de comandos, yo prefiero la segunda opción.

```console
$ git config --global user.name raquel
$ git config --global user.email example@example.com
```

Pero a mi también me resulta muy útil configurar el usuario a nivel local, por ejemplo para repositorios de trabajo en los que ya tengo una configuración diferente a nivel global y no quiero tocarla, sólo tendría que cambiar el flag de global a local.

```console
$ git config --local user.name Raquel
$ git config --local user.email company@company.com
```


Y adiós a subir cambios con usuarios equivocados.


## ¿Qué más puedo configurar? El editor




## Quiero eliminar mi configuración



## ¿Y ahora qué?

Aún hay muchos más comandos y trucos, por lo que intentaré compartir algunos de los comandos que más útiles me resultan a mi en mi día a día.
Mientras espero que este artículo os haya resultado útil.

Ahora, ¡a divertirse!

¡Gracias por leer!
=)


[git_config_web]: https://www.git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Configuraci%C3%B3n-de-Git

