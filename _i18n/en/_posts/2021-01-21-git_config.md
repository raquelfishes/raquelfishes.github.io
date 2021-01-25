---
layout: post
title:  "All secrets about Git Config"
author: raquel
date: '2021-01-21'
category: 
        - Git
        - Github
image: assets/img/posts/git_config.jpg
---

<blockquote>
The computer (what I will add repositories) was born to solve problems that did not exist before.
Bill Gates
</blockquote>

Did you push some content with the wrong user? Do you want to change git configuration? Do you know where it is saved and how to check it? If your answer is yes, I hope that you find usefull this article.

So, there we go!

## Git configuration

There are plenty of options to customize your Git development enviroment, from user to default editor, and that can be setted to a concret repository or local environment, and a more generic way or global.

We can customize or see our Git configuration throw `git config` tool. Using this command with the proper flags allow us to check and modify the configuration variables that controls our Git. If you are more curious and want to check the official documentation here is the [Git official page](git_config_web).

## Where is the git config located

Git provides four standard scopes for storing configuration data: system, global, local and worktree. With wich one of them you can customize your relationship with Git. They are saved in different config files, and they overwrite the config from the most specific to most general scopes.

The following list is ordered from most general to most specific config file. Global scopes overrides system scope, local overrides global and so on. It is listed with environment, config file path and git config command.

1. System: *\[git_installation_path\]/etc/gitconfig* `$ git config --system --list`
2. Global: *\[HOME\]/.gitconfig* `$ git config --global --list`
3. Local: *\[git_repository\]/.git/config* `$ git config --local --list`
4. Worktree: *\[git_repository\]/.git/config.worktree* `$ git config --worktree --list`

Here is where you will probably find Git configuration files:

* *\[directorio_instalación_git\]*
    * Windows: *C:/Program Files/Git/*
    * Linux: *~etc/*
* *\[HOME\]*
    * Windows: *C:/Users/\[username\]*
    * Linux: *~home/\[username\]* o *~root/*

Don't worry if you don't find one of the files, **Git doesn't generate it until they are referenced for the first time**.


You can use the following command to find the Git config file setting a given varible to a particular value. In the following command example you can see the command indicating what variable is set by each scope. For example the core.editor is setted at system and global scopes, and user name is setted in global and local scopes:

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

One more commmand about git config files, if you want to open the configuracion file make use of `edit` option, here is the example with each one of the scopes.

```console
$ git config --system --edit
$ git config --global --edit
$ git config --local --edit
$ git config --worktree --edit
```

Remember, **The most specific config overwrite the most general ones**.

## What first? The user

Don't worry and get crazy if you see much options to configure. You will use the most of them with de default config. First is first, config your user, without setting it you can't work with Git. So, let's set the global git config username and email properties. Don't worry this info won't end up on a mailing list or anything, it is used as metadata to identify your Git repository changes.

There are a number of ways to edit the global git config file, but I recommend throw command line.

```console
$ git config --global user.name raquel
$ git config --global user.email example@example.com
```

I find really usefull to config the user at local scope too, for example for professional repositories different than pesonal ones. So I configure the user at global scope and if I made changes on a work repository I set my company user for that repository.

```console
$ git config --local user.name Raquel
$ git config --local user.email company@company.com
```

If you don't know what user is setted, you can check an specific key executing `git config <clave>`.

```console
$ git config user.name
Raquel
$ git config user.email
example@example.com
```

Now, say goodbye to wrong user in a commit for specific repositories.


## What else? The editor

Now we have configured the user identity, other usefull configuration is choose the default text editor to write commit messages or open git files. If you don't select anythin, Git will use the default system editor, it uses to be Vim.

You can select the the text editor that are already in the system, or other ones installed by you as Sublime or NotePad++. As before, you can change the text editor at different scopes. I recommend config it at globla scope.

The following commands can be used to change the global Git config defaut text editor for each program.

|  Atom         | `git config –global core.editor "atom wait"`                                              |
|  emacs        | `git config –global core.editor "emacs"`                                                   |
|  Textmate     | `git config –global core.editor "mate –w"`                                                |
|  Vim          | `git config –global core.editor "vim"`                                                     |
|  Sublime      | `git config –global core.editor "'C:/Program Files/Sublime Text 3/sublime_text.exe' -w"` |
|  NotePad++    | `git config –global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"`   |


## How to remove some git config settings?

To delete git cconfig settings simply use the `unset` command.

```console
$ git config --global --unset core.editor
```

Occasionally, a property gets set twice by error, and previous command fails. In this case, we have a powerfull command `unset-all`, this will remove all lines with match with the specific key.

```console
$ git config --global --unset-all core.editor
```

## What is next?

There are number off different commands and tricks for Git. I will try to share all the most usefull.
In the meantime, I hope you find this article usefull.
Now, have fun!

Thanks for reading!
=)


[git_config_web]: https://www.git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Configuraci%C3%B3n-de-Git

