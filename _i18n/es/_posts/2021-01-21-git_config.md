---
layout: post
title:  "Todos los secretos para configurar Git"
author: raquel
date: '2021-01-21'
category: 
        - Git
        - Github
image: assets/img/posts/git_config.jpg
---

<blockquote>
El ordenador (a lo que añadiría los repositorios) nacieron para resolver problemas que antes no existían.
Bill Gates
</blockquote>

¿Cuántas veces has subido algo a un repositorio con el usuario que no deberías? ¿Quieres cambiar tu configuración de Git? ¿No sabes dónde se guarda la configuración o cómo consultarla? Si es así este artículo es para tí, así podrás amplicar los conocimientos para trabajar con repositorios Git.

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

* *\[directorio_instalación_git\]*
    * Windows: *C:/Program Files/Git/*
    * Linux: *~etc/*
* *\[HOME\]*
    * Windows: *C:/Users/\[username\]*
    * Linux: *~home/\[username\]* o *~root/*

No te preocupes si no encuentras alguno de los ficheros **Git no los genera hasta que no son referenciados por primera vez**

Si quieres ver de qué fichero está cogiendo qué configuración en cada momento puedes usar el siguiente comando el cual muestra el fichero y qué configuración aplica con algunos ejemplos de lo que puede salir. Como puedes ver en el ejemplo el editor aprece en la configuracion del sistema y global, y el usuario en la global y local.

```console
$ git config --list --show-origin
file:C:/Program Files/Git/etc/gitconfig core.editor="C:\\Program Files\\Sublime Text 3\\sublime_text.exe"
...
file:C:/Users/Fishes/.gitconfig user.name=Raquel
file:C:/Users/Fishes/.gitconfig core.editor=vim
...
file:.git/config        user.name=Rachel
...
```

Y por último si quieres ver o modificar uno de esos ficheros directamente tienes el comando `edit`, para cada uno de los entornos.

```console
$ git config --system --edit
$ git config --global --edit
$ git config --local --edit
$ git config --worktree --edit
```

Recuerda, que las **configuraciones más específicas van a sobreescribir las más genéricas**.

## ¿Qué configuro primero? El usuario

Si ves muchas cosas que no entiendes, y te lias con tanta configuración, no te preocupes. La mayoría lo usarás por defecto. Lo primero es lo primero, a configurar tu usuario, si no tienes usuario no vas a poder hacer ni un commit.
Así que vamos a configurar el nombre de usuario y correo electrónico a nivel global y no te preocupes esta información no va a parar a ninguna lista de correo ni nada, se tratará como metadatos para identificar tus cambios en el repositorio Git.

Puedes modificar la configuración tanto por ficheros o por consola de comandos, yo prefiero la segunda opción.

```console
$ git config --global user.name raquel
$ git config --global user.email example@example.com
```

Pero a mi también me resulta muy útil configurar el usuario a nivel local, por ejemplo para repositorios de trabajo en los que ya tengo una configuración diferente a nivel global y no quiero tocarla, sólo tendría que cambiar el flag de global a local.

```console
$ git config --local user.name Raquel
$ git config --local user.email company@company.com
```

Si tienes dudas, siempre puedes comprobar el valor de un clave específica de la configuración ejecutando `git config <clave>`


```console
$ git config user.name
Raquel
$ git config user.email
example@example.com
```

Y adiós a subir cambios con usuarios equivocados.


## ¿Qué más puedo configurar? El editor

Ahora que ya tenemos configurada la identidad del usuario, también puedes elegir el editor de texto por defecto que se utilizará cuando Git necesite que introduzcas un mensaje. Ten en cuenta que si no indicas nada, Git usará el editor por defecto del sistema, que generalmente es Vim.

Puedes seleccionar tanto los que vienen preinstalados en el sistema como el que tú suelas utilizar, por ejemplo Sublime o NotePad++, y al igual que antes puedes cambiarlo para los diferentes niveles, aunque yo recomiendo hacerlo a nivel global.

Te dejo aquí los comandos correspondientes

|  Atom         | `git config –global core.editor "atom wait"`                                              |
|  emacs        | `git config –global core.editor "emacs"`                                                   |
|  Textmate     | `git config –global core.editor "mate –w"`                                                |
|  Vim          | `git config –global core.editor "vim"`                                                     |
|  Sublime      | `git config –global core.editor "'C:\\Program Files\\Sublime Text 3\\sublime_text.exe' -w"` |
|  NotePad++    | `git config –global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"`   |


## Quiero eliminar mi configuración

Para borrar una configuración de git, hay que usar el comando `unset`.

```console
$ git config --global --unset core.editor
```

Es probable, que por error tengamos puesta una configuración dos veces y que el comando anterior de error. Para esos casos tenemos otro comando más potente `unset-all`, con él se eliminarán todas las líneas que coincidan con la clave indicada

```console
$ git config --global --unset-all core.editor
```

## ¿Y ahora qué?

Aún hay muchos más comandos y trucos, por lo que intentaré compartir algunos de los comandos que más útiles me resultan a mi en mi día a día.
Mientras espero que este artículo os haya resultado útil.

Ahora, ¡a divertirse!

¡Gracias por leer!
=)


[git_config_web]: https://www.git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Configuraci%C3%B3n-de-Git

