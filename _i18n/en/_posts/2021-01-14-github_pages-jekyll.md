---
layout: post
title:  "Update free website with Jekyll and Github Pages!"
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
<p>Jekyll does what you tell it to do — no more, no less. It doesn't try to outsmart users by making bold assumptions, nor does it burden them with needless complexity and configuration. Put simply, Jekyll gets out of your way and allows you to concentrate on what truly matters: your content.</p>
</blockquote>

You have created your site at Github Pages, but you are a beginner in CSS or don't want to worry about that, but you want a more visual appeal, try a Jekyll theme!
This article continues a previous one to [create your website for free with Github Pages]({{site.url}}{{site.baseurl_root}}{% post_url 2021-01-07-github_pages %}). There you can learn about creating your personal site using a repository.

So, there we go!

### I have my site, but it could be more interesting

There are prebuilt themes that can be used to make your site look a little better with any effort. Jekyll and Github will do all the work for you! Your job is to push a couple of clicks.

But first...

### What is Jekyll?

Jekyll is a static site generator. The site is published as it is, and show the same for all users. It's really simple to use, blog-aware for personal, project or organization sites.
Jekyll is written in Rubby by Tom Preston-Werner at 2008, Github's co-founder. This is why is the engine behind Github Pages. It's also an open source project distributed under [MIT license](mit_license).
As Jekyll is a static site generator, it does not use databases, it renders Markdown or Textile and Liquid templates, and produces a complete static website ready to be served by a web server. Don't think that the "static" word will be a problem to scale your project, Jekyll is really flexible and can be used in combination with front-end frameworks such as Bootstrap, Semantic UI and more.
If you want to learn more, I encommend you to take a look at the [official Jekyll site](jekyll_site) or at [Github Pages and Jekyll documentation](github_pages_jekyll)

### Ok, then I know what it is, let's continue


Si ya has realizado la primera parte del tutorial y has seguido los pasos sobre cómo [Crear tu web gratis con Github Pages]({{site.url}}{{site.baseurl_root}}{% post_url 2021-01-07-github_pages %}) o ya tienes tu web creada.

Go to the "GitHub Pages" section in "Settings" and click on "Choose a theme."
![github choose theme](/assets/img/posts/ghpages/gh_choose_theme.jpg){:class="img-fluid"}

There you can see a theme selection, just choose the one you like most:
![github themes](/assets/img/posts/ghpages/gh_themes.jpg){:class="img-fluid"}

Let’s see what our website looks like if we choose one of the themes that shows. All that you have to do is press the green "Select theme" button:
![github select theme](/assets/img/posts/ghpages/gh_select_theme.jpg){:class="img-fluid"}

Give it a couple of minutes to update our web, and with just a few clicks of effort, we're getting something better!
![github new web](/assets/img/posts/ghpages/gh_web_jekyll.jpg){:class="img-fluid"}

That’s it! You created your own free website for your business, blog, or portfolio, hosted it through a GitHub repository, and it’s already up and running. You have your window to the world!

### And... now what?

If you take a look at your repository files, there is a new one named `_config.yml`. In that file you can find all the info about the theme and configuration. If you want, take a look at all the options you cand add there.
![github config](/assets/img/posts/ghpages/gh_config_yml.jpg){:class="img-fluid"}

There are so many themes you can choose, one of them and as starting point because is really simple is [Jekyll Now](jekyll_now) it has pre-build blog.
If you decide that don't want to use the theme and want to go back to your original site. If you delete the config file, you delete the theme!
You can choose themes from github pages or download and buy from other places, as in the official [Jekyll themes site for Github.](jekyll_github_themes)

### This is just the beginning

Jekyll is much more than select a theme and that's it, as Wordpress has multiple themes and plugins to update the funcionality, with them you can add others libraries or create a web as complete as this one you are reading. As always, you and your time are the limit!

Now, have fun!

Thanks for reading!
=)



[github_pages_jekyll]: https://docs.github.com/en/github-ae@latest/github/working-with-github-pages/about-github-pages-and-jekyll
[mit_license]: https://opensource.org/licenses/MIT
[jekyll_site]: https://jekyllrb.com/
[jekyll_now]: https://www.jekyllnow.com/
[jekyll_github_themes]: https://jekyllthemes.io/github-pages-themes

