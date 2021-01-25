---
layout: post
title:  "¡Mejora tu web gratis en Github Pages con Jekyll!"
summary: Cómo mejorar tu pagina web gratis en Github Pages.
author: raquel
date: '2021-01-14'
category: 
        - Jekyll
        - Github Pages
        - Github
        - Static Site Generators
image: /assets/img/posts/ghpages_jekyll.png
---
<blockquote>
<p>Jekyll hace lo que se le dice que haga, ni más, ni menos. No intenta suplantar a los usuarios con suposiciones atrevidas, ni les agobia con complejidad y configuración innecesaria. Dicho de forma simple, se aparta de tu camino y te permite concentrarte en aquello que realmente importa: su contenido.</p>
</blockquote>

Si ya tienes creada tu web en Github Pages pero no quieres o no sabes mucho de CSS, pero quieres mejorar la apariencia visual de tu web, ¡puedes probar un tema de Jekyll! 
Este artículo es una continuación de otro anterior para [crear tu web gratis con Github Pages]({{site.url}}{{site.baseurl_root}}{% post_url 2021-01-07-github_pages %}). Dónde explico como crear tu página personal, usando un repositorio.

Así que, ¡allá vamos!

### Ya tengo mi web, pero como hacerla más interesante

Existen temas creados que puedes usar para hacer que tu página tenga una mejor apariencia con muy poco esfuerzo. ¡Jekyll y Github harán todo el trabajo por ti! Tú simplemente tendrás que pulsar un par de botones.

Pero primero...

### ¿Qué es Jekyll?

Jekyll es un generador para sitios web estáticos, es decir, el sitio se sube al repositorio tal cual es y se muestra igual a todos los usuarios. Es muy simple de utilizar y tiene capacidades para crear un blog. Muy adecuado para sitios web personales, proyectos u organizaciones. 
Jekyll fue escrito en lenguaje Ruby por Tom Preston-Werner en 2008, el cofundador de Github y es por esto por lo que la integración con la plataforma es muy buena. Además se trata de un proyecto de software libre, puesto que se distribuye bajo la licencia [MIT](mit_license).
En lugar de usar bases de datos, Jekyll coge el texto escrito en los formatos Markdown o Liquid y usa el layout para generar el sitio web. Aunque te parezca que la palabra estático te va a suponer un problema para escalar tu web, en el fondo Jekyll es muy flexible y admite contextos frontend como Bootstrap, semantic y mucho más.
Si quieres saber un poco más, te recomiendo que le eches un vistazo a su [web oficial](jekyll_site) o a la documentacion de [Github Pages y Jekyll](github_pages_jekyll)

### Ya sé lo que és, vamos a continuar

Si ya has realizado la primera parte del tutorial y has seguido los pasos sobre cómo [Crear tu web gratis con Github Pages]({{site.url}}{{site.baseurl_root}}{% post_url 2021-01-07-github_pages %}) o ya tienes tu web creada.

Ve a "GitHub Pages", sección "Settings" y haz click en "Choose a theme."
![github choose theme](/assets/img/posts/ghpages/gh_choose_theme.jpg){:class="img-fluid"}

Ahí podrás ver una selección de temas, puedes escoger el que más te guste:
![github themes](/assets/img/posts/ghpages/gh_themes.jpg){:class="img-fluid"}

Veamos como queda nuestra antigua web, seleccionando una de las plantillas, para ello, elige la que más te guste y haz click en "Select theme":
![github select theme](/assets/img/posts/ghpages/gh_select_theme.jpg){:class="img-fluid"}

Y con solo unos clicks de esfuerzo, y un tiempo para que se actualice, ¡ya tenemos algo mucho mejor!
![github new web](/assets/img/posts/ghpages/gh_web_jekyll.jpg){:class="img-fluid"}

Con esto puedes crear tu propia web para tu negocio, blog o portfolio, el cual estaría alojado en un repositorio de Github, y estaría online totalmente gratis. ¡Ya tienes tu ventana al mundo!

### ¿Y ahora qué?

Si te fijas en los ficheros de tu repositorio, podrás ver que ha aparecido uno de ellos llamado `_config.yml`. Aquí tienes toda la información del tema y su configuración. Si quieres puedes echarle un ojo y ver todas las opciones que puedes añadir ahí.
![github config](/assets/img/posts/ghpages/gh_config_yml.jpg){:class="img-fluid"}

Hay muchos temas que puedes probar, uno de ellos para empezar, y de los más simples es [Jekyll Now](jekyll_now) con un blog ya pre-configurado.
Si te arrepientes de haber añadido un tema y quieres dejar tu web tal y como estaba, siempre puedes eliminar el fichero de configuración.
Puedes probar los temas que hay en github o descargar y comprar de otros sitios, como de la propia página de [temas de Jekyll para Github](jekyll_github_themes)

### Esto es sólo el principio

Jekyll no sólo te sirve para ponerle un tema y ya está, al igual que WordPress tiene multitud de temas y plugins para ampliar su funcionalidad con los que podras añadir y hacer una web tan completa como en la que estas leyendo esto. Como en todo, el límite eres tú y tu tiempo.

Ahora, ¡a divertirse!

¡Gracias por leer!
=)



[github_pages_jekyll]: https://docs.github.com/en/github-ae@latest/github/working-with-github-pages/about-github-pages-and-jekyll
[mit_license]: https://opensource.org/licenses/MIT
[jekyll_site]: https://jekyllrb.com/
[jekyll_now]: https://www.jekyllnow.com/
[jekyll_github_themes]: https://jekyllthemes.io/github-pages-themes