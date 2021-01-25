---
layout: post
title:  "Como crear links internos en Jekyll"
author: raquel
date: '2021-02-11'
category: 
        - Jekyll
        - Liquid
        - Static Site Generators
image: assets/img/posts/jekyll_internal_links.jpg
---

<blockquote>
El código se lee más de lo que se escribe.
</blockquote>

¿Tienes una pagina con Jekyll y no sabes como añadir links a otras de tus páginas sin usar la dirección completa?¿Quieres hacer links entre diferentes posts? 
Los enlaces internos dentro de una página web ayudan a tener una web bien estructurada además pueden ayudar a que nuestra web tenga un mejor nivel de SEO. Si quieres saber como crearlos en Jekyll seguro que este artículo te interesa.

Así que, ¡allá vamos!

## Los links en Jekyll

Si ya has creado alguna web en Jekyll te habrás dado cuenta que añadir enlaces internos no es tan fácil como poner la etiqueta HTML `<a>` y poner la dirección web a la que quieres enlazar en el campo `href`. Aunque siendo totalmente sinceros sí que podrías hacerlo y el enlace funcionaría. Pero hay una razon por la que nunca deberías usar ese formato, y es que si el enlace de tu web cambia, deberías cambiar todas esas URLs a mano.

Para solucionar este problema existen algunas etiquetas de Jekyll que vienen a nuestro rescate.
![Rescue me](https://media.giphy.com/media/Uuk2KuEcSWQ984DPoQ/giphy.gif)


## Link a páginas

Hay un modo más fácil para construir estas direcciones internas de Jekyll, y es usando la etiqueta de Liquid `link`. Esta etiqueta acepta la referencia a un archivo y siempre genera un enlace válido, en caso de que el archivo que le pasamos como parámetro no se encuentre devolverá un error.

```
{% link _collection/document-name.md %}
{{ site.baseurl }}{% link _collection/document-name.md %}
{{ site.baseurl_root }}{% link _posts/2021-02-01-post-title.md %}
{{ site.url }}{% link services/index.html %}
{{ site.url }}{{ site.baseurl_root }}{% link /assets/documents/pal-codes.pdf %}
```

En el ejemplo anterior puedes ver como aparecen varias variables para construir las URLs absolutas, si quieres saber como se crean y .....

## Link a posts

Si en lugar de incluir un link a una página quieres hacerlo a un post que ya tengas escrito, como los que puedes incluir en este artículo. Para añadir esta funcionalidad tenemos la etiqueta de Liquid `post_url` la cual acepta el path relativo al directorio `_posts`.

```
{% post_url 2020-12-31-bye_2020.md %}
{% post_url 2021-01-21-git_config %}
{{ site.baseurl }}{% post_url 2021-01-07-github_pages %}
```

¡Como has podido ver añadir la extension del archivo `.md` es opcional!

## Sintaxis de los links en Markdown

Como sabeis en Jekyll se usan los ficheros Markdown para escribir los posts y páginas, por lo que al añadir los links internos tenemos que usar la sintaxis propia de este lenguaje para escribirlos.

```
[Titulo del enlace]{{ site.baseurl }}{% link _collection/document-name.md %}
[Titulo del enlace]{% post_url 2020-12-31-bye_2020.md %}
```

Simplemente en `Titulo del enlace` escribe lo que quieras que aparezca en el texto que enlaca con la dirección.

## ¿Y si me he equivocado?

Ambas etiquetas `link` y `post_url` tienen una comprobación a la hora de construir nuestra web. Por lo que si el archivo especificado en el path no lo encuentra o no existe, Jekyll devolverá un error y no terminará de construir nuestra web. 
¡Así no tendrás enlaces rotos en tu web!

## ¿Y ahora qué?

Esta funcionalidad de Jekyll es muy cómoda para tener un blog y web consistente. Si quieres conocer más trucos sobre como crear u optimizar tu web con Jekyll, pronto nuevos posts.
Mientras espero que este artículo os haya resultado útil.

Ahora, ¡a divertirse!

¡Gracias por leer!
=)