---
layout: post
title:  "Personalizar los enlaces de Jekyll"
author: raquel
date: '2020-02-18'
category: 
        - Jekyll
        - Static Site Generators
        - Github Pages
image: assets/img/posts/jekyll_permalinks.jpg
image_credit: Pexels user Dids
---

<blockquote>

</blockquote>

¿No te gusta que la dirección de tus páginas sea como la estructura de ficheros?¿Quieres eliminar la fecha y categorias de la dirección de tu post?
Siguiendo con todo lo que vamos aprendiendo de Jekyll y su gestión de las direcciones web, en este artículo vamos a tratar de configurar nosotros la generación de esas URLs. 
Si quieres conocer un poco de dónde partimos, te recomiendo que le eches un vistazo a los anteriores artículos para [entender como se generan las URLs] y [aprender a añadir enlaces internos] en Jekyll.

Así que, ¡allá vamos!

## Usando permalinks en Jekyll

Los `permalinks` o enlaces permanentes son las direcciones que se generan desde Jekyll como salida de las páginas o posts, es decir, son todas las URLs de nuestro sitio web.
Con Jekyll podemos configurar como se generan esos paths usando la fecha del post, categorias, sistema de archivos... Además esta configuración la podemos hacer a nivel global en el fichero de configuración en nuestro directorio raíz, o por cada página. 
En este artículo te voy a explicar a configurar los que más uso yo, pero si quieres profundizar en este tema, [aquí tienes la docmumentación oficial](jekyll_permalink).

## Configurar los links de las páginas

Para conseguir que la URL de nuestra página sea con un nombre en concreto tenemos que añadir el campo `permalink` en el YAML Front Matter del archivo. Ahí entre el titulo de la página podemos añadir varios campos que usaremos para construir la web, y entre ellos está el permalink.

```markdown
---
title: Contact
layout: contact
permalink: /contact
---
```

Este formato también lo podemos usar para los posts añadiendo el campo de permalink en todos ellos. Pero prefiero explicaros como configurar los permalink para toda la colección de posts.

## Configurar los links de los posts

En este caso voy a utilizar el ejemplo de los enlaces antes y después de los cambios en esta web. El siguiente enlace sería la dirección web que veríamos por defecto en nuestro navegador de este post.

```
https://raquelfishes.github.io/jekyll/static%20site%20generators/github%20pages/2021/02/18/jekyll_permalinks/
```

Este enlace tiene el formato de añadir las categorias y fecha, por último estaría el titulo que hemos decidido para ese post.
Seamos realistas, es un enlace muy feo, que a nadie le gusta ver y menos compartir con los demás. ¿No te parece algo mucho más elegante el siguiente enlace?

```
https://raquelfishes.github.io/blog/jekyll_permalinks
```

Para conseguir que nuestras URLs a los posts tengan el formato anterior, hay que hacer un pequeño cambio en el fichero de configuración de nuestra web, `_config.yml` que encontrarás en el directorio raíz de nuestro proyecto.

```yaml 
collections:
    posts:
        output: true
        permalink: /blog/:title
```

## ¿Y ahora qué?

Estos pequeños cambios aumentan considerablemente la funcionalidad de Jekyll es muy cómoda para tener un blog y web consistente. Muchas veces se habla del SEO de una web pero estos pequeños detalles ayudan a que nuestros enlaces se posicionen mejor y tengan un mayor significado. Pronto más trucos para tu web en Jekyll.
Mientras espero que este artículo os haya resultado útil.

Ahora, ¡a divertirse!

¡Gracias por leer!
=)


[jekyll_permalink]: https://jekyllrb.com/docs/permalinks/