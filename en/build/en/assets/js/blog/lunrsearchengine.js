
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/en/404.html",
    "title": "error_404",
    "body": " Sorry the Page you are looking for doesnot exist ! : Back to Home "
    }, {
    "id": 1,
    "url": "http://localhost:4000/en/about",
    "title": "About",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/en/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/en/contact/",
    "title": "Contact",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/en/",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/en/gallery/",
    "title": "Gallery",
    "body": "&lt;div class= col-lg-8 offset-md-2 &gt; &lt;div class= row &gt;&lt;div class= row &gt; &lt;div class= card &gt;  &lt;div class= card-title &gt; Mountains&lt;/div&gt;  &lt;div class= row &gt;  &lt;a href= http://localhost:4000/en/gallery/mountains. html &gt;   &lt;img class= img-thumbnail  alt= Mountains  src= http://localhost:4000/en/assets/img/gallery/mountains/1-thumbnail. jpg  /&gt;  &lt;/a&gt;  &lt;/div&gt; &lt;/div&gt;&lt;/div&gt;&lt;/div&gt; "
    }, {
    "id": 6,
    "url": "http://localhost:4000/en/blog/",
    "title": "Blog",
    "body": ""
    }, {
    "id": 7,
    "url": "http://localhost:4000/en/get-started/",
    "title": "Get Started",
    "body": "Getting Started - How to use “devlopr-jekyll” theme: What’s Jekyll ?: If you aren’t familiar with Jekyll yet, you should know that it is a static site generator. It will transform your plain text into static websites and blogs. No more databases, slow loading websites, risk of being hacked…just your content. And not only that, with Jekyll you get free hosting with GitHub Pages! If you are a beginner we recommend you start with Jekyll’s Docs. Now, if you know how to use Jekyll, let’s move on to using this theme in Jekyll: Steps to create your blog using devlopr-jekyll and Host using Github Pages ::  Step 1.  Fork the repo - click here  Step 2. Use your-github-username. github. io as the new repo ( Replace your-github-username with yours). Remember if you use the name other than your-github-username. github. io , your blog will be built using gh-pages branch.   Step 3. Clone the new repo locally to make changes :   $ git clone https://github. com/yourusername/yourusername. github. io $ cd yourusername. github. io $ code .  Step 4. Open the files using VSCode and edit _config. yml and edit with your details:  _config. yml file - replace with your own details _posts - Add your blog posts here _includes - You can replace the contents of the files with your data. (contains widgets) _assets/img - Add all your images here  Step 5 - Install the development requirements: Set up local development environment:  Git Ruby and Bundler VSCodeWe need ruby and bundler to build our site locally. After installation check if its working: For ruby : $ ruby -vruby 2. 5. 1p57 (2018-03-29 revision 63029) [x86_64-linux-gnu]For bundler : $ gem install bundler$ bundler -vBundler version 2. 1. 4Add jekyll : $ bundle add jekyllThis command will add the Jekyll gem to our Gemfile and install it to the . /vendor/bundle/ folder. You can check the jekyll version $ bundle exec jekyll -vjekyll 4. 0. 0 Step 6. Install the gem dependencies by running the following command $ bundle update$ bundle install Step 7. Serve the site locally by running the following command below: $ bundle exec jekyll serve --watchor you can also serve using : $ jekyll serveVisit http://localhost:4000 for development server  Adding Content: Start populating your blog by adding your . md files in _posts. devlopr-jekyll already has a few examples. YAML Post Example:: ---layout: posttitle: Sample Postauthor: Sujay Kundudate: '2019-05-21 14:35:23 +0530'category:    - jekyllsummary: This is the summary for the sample postthumbnail: sample. png---Hi ! This is sample post. YAML Page Example:: ---layout: pagetitle: Sample Pagemenus: headerpermalink: /sample-page/---Hi ! This is sample page. Editing stylesheet: You’ll only work with a single file to edit/add theme style: assets/css/main. scss. Deploy your Changes: Once happy with your blog changes. Push your changes to master branch.  Step 8. Push Your Local Changes $ git add . $ git commit -m  my new blog using devlopr-jekyll  $ git push origin masterVisit your Github Repo settings ! Enable master branch as Github Pages Branch :  Step 9. Deploy your Blog :  Congrats ! On your new shining Blog ! You can visit the blog using http://your-github-username. github. io. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/en/gallery/mountains.html",
    "title": "Mountains",
    "body": "{% include gallery-layout. html gallery=site. data. galleries. mountains %} "
    }, {
    "id": 9,
    "url": "http://localhost:4000/en/search",
    "title": "Search",
    "body": ""
    }, {
    "id": 10,
    "url": "http://localhost:4000/en/shop/",
    "title": "Shop",
    "body": ""
    }, {
    "id": 11,
    "url": "http://localhost:4000/en/styleguide/",
    "title": "Styleguide",
    "body": " devlopr jekyll - Styleguide  Lets try the different text styles  Bold , Strong , Emphasis , Italic  Now, lets try different heading styles :  Hello in h1 ! Hello in h2 ! : Hello in h3 ! : Hello in h4 ! : Hello in h5 ! Hello in h6 ! Unordered List  List Item 1 List Item 2 List Item 3 List Item 4 List Item 5 Ordered List  List Item 1 List Item 2 List Item 3 List Item 4 List Item 5 This is a Block Quote, It can Expand Multiple Lines You can use the mark tag to highlight text.  This line of text is meant to be deleted text  This line of text will render as underlined This line of text is meant to be treated as fine print. This line rendered as bold text. This line rendered as italicized text. attr HTML             #     Heading     Heading     Heading     Heading     Heading     Heading     Heading     Heading     Heading                   1     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell             2     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell             3     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell           YouTube Responsive Embed: Vimeo Responsive Embed: TED Responsive Embed: Twitch Responsive Embed: SoundCloud Embed: CodePen Embed: Syntax Highlighting: 'use strict';var markdown = require('markdown'). markdown;function Editor(input, preview) { this. update = function() {  preview. innerHTML = markdown. toHTML(input. value); }; input. editor = this; this. update();}You can add inline code just like this, E. g. . code { color: #fff; } pre { background-color: #f4f4f4; max-width: 100%; overflow: auto;}GitHub gist Embed: Input Style:  Twitter Embed : I just published “Deploying a blog using Jekyll and Github Pages with SSL certificate for Free” https://t. co/B3T3IQVU93 &mdash; Sujay Kundu (@SujayKundu777) June 29, 2018 Instagram Embed :  A post shared by Ahmad Ajmi (@ahmadajme) on Apr 2, 2018 at 2:18pm PDT "
    }, {
    "id": 12,
    "url": "http://localhost:4000/en/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 13,
    "url": "http://localhost:4000/en/jekyll/github%20pages/2020/09/15/github_pages/",
    "title": "Create your website for free with Github Pages!",
    "body": "2020/09/15 - Github Pages allows to turn any repository on Github into a website with a couple of clicks. If you need an online portfolio of your personal and work projects. If you want to create your blog or business site and don’t know how to start. If you don’t wnat to deal o pay for website hosting, domain names and all everything else to launch or website This one’s for you! Why should I have a website?: Nowadays, it’s really hard to imagine anyone who wouldn’t benefit from having his own website. You might need to display your portfolio for potential employers or as a freelance. You might need to display your student proyects and share it with all the University Community. You might create your own blog about places you’ve been or what you’re doing. You might need to advertise yourself or your business and open your own shop online… A website is the play to connect yourself with the world and the best communication tool. It’s how you can create, build and control your online image. Plus, the sooner you build your place, the more time you’ll have to build your online presence and reach the people you want to reach. It can help you stand out in of competitors. And, we all know that it’s also not the easiest thing if you don’t know what you’re doing! If you are a beginner, surely you have heard about some simplest options. The main one is Wordpress, but I want to introduce to Github. Wordpress is the excelence beginners tool! You only have to configure some parameters and start writing. It’s great for those who want to create a site fast and without any technical knowledge. The main problem with Wordpress is that you can’t configure almost nothing with the free plan. It’s too obvius that you are using Wordpress, you have to use Wordpress logo, your domain has wordpress. com and customization and templates are minimal. If you are a begginer tech person, you will know Github like a code repository for sure. If you are in tech world and love to program, for sure you will have a Github account with at least one project. But maybe you don’t know about Github Pages functionality. You can create your web in Github and host it directly there, in your code repository, and needing no more. If you are really jealous of your code, or want to keep your site code in secret, this article might end it here for you. Putting your code on Github shows that you like contributing to open source philosophy. You can help and inspire everyone who cames after with your ideas. That’s the big Githup idea, share knowledge and work. When you share your proects on Github, people can see your code, what you’re doing, how you’re doing, they can suggest some improvements or features. It’s like the Alexandria library of code nowadays. retty much everyone in tech right now is using Git and Github in some way. Having your website right there is a plus, and it will sind up with a repository and some commints on your profile page =) If you’re a total brand new to everything Git and Github, you might want to check my previous post “Getting Started with Git and GitHub: the total beginner’s guide”. That article will show you the basics of Git and Github, concepts like “repository” or “branch”. From now on I’m assuming that you know the basics. So, there we go! Let’s start with my web!: There are two ways of getting started with your website. You might be starting completely from scratch! You don’t have anything, neither index. html file. On the other hand you might have a website that you’ve already design and put together, but you don’t know how to use Github to launch it as a free website. I have my website files, but I don’t know what to do with them!: This is the simplest case. Github will make all the work for you. Asumming that you already have a Github account and you know what a respository is, if not, you should check my previous article about how to start with Git and Github. A repository is like a eggshell, where your project will live. That is the place where you’ll keep your folders, add images, videos and anything else your project needs in your repository. If you haven’t already, go ahead and initialize your project with a repository, or create a new repository and upload all your files. If you have a file called index. html Github will understand what you wnat to do. Now you’re going to learn about taking advange of Github Pages. Go to your Github repository and click Settings Once we are at settings page, you have to make scroll down until the Github Pages section. Now drop the Source dropdown menu and select Master branch option. This will make that our website take the home page the master branch of our reository, it’s pretty much publish your repositori as-is. You are going to see a notification that your site is ready to be published. Be patient, wait a minute or two, and then refresh the page or try the link if you wante. Once your site has been published, the notification has changed, your site has been published, you’ll see this: Try clicking on that link and MAGIC! You have a published free website! I don’t know how to get started!: I’m not gonna explain how to create a website, neither all design librarys you can use, this is the basics. I prefer that you know how to create something from zero with the tool that I’m introducing here and then, with all your time and motivation available explore all this new world. This option is for total beginners, I’m going to show how to do everything on the Github to create a website. Well, go ahead and first thing, create a new repository. Fill in with all your repository data: name, descripcion and select the option to initialize the repository with a README Initialize this repository with a README and then click Create repository Now, the same as previous section, you have to go to Settings section, near the top right-hand side of the screen. Once you are here, scroll down to Github Pages section. Drop the dropdown Source menu and select Master branch option. First, you will see a notification like your site is ready to be published. Please, be patient, this might take some minutes, then refresh the page and you will see like notification has changed and show that your site has been published with the web domain where you could visit your web. Now click in the link: Congratulations! You are online! But, this is really ugly. : Oks, you are right, this website is really ugly and boring. If you come back to your repository, you can see that what is showing is your README. md file. If you want to make some quick changes, you can go ahead and edit your file to display what you want people to see. To do that, go back into your repository, click the little pencil icon in your README file and make it better! Don’t forget to commit your README file changes! If you don’t do that, you will loose all the work. You can also add a short commit message explaining all the changes. Keep in mind that you are editing a Markdown file. If you don’t know about this format, visit the Markdown Getting Started Official Site for anyone who hasn’t worked with it before. This kind of files are a programming languate, this post is written in Markdown format, where you can add element formats writting plain text. There are a lot of things that you can add to with this files, like adding images, colors, links or even programming code. If you are curious about this format, explore the Basic Syntax Markdown Guide Now go back to your web domain, and see how it looks the last changes! Be aware that sometimes takes a few minutes for the changes to go through your published web. Try waiting a couple of minutes and refreshing. You can also have to delete your browser cache or open the link in a privacy browser sesion to see before all the changes. That is an improvement, can it get better?: Yes, it can get really better, this is the point where everything start to get interesting. But, I’m going to explain it in a new post where I will introduce Jekyll, the framework wich I used to create this website. I hope this tutorial has helping to whet your appetite. Thanks for reading!=) "
    }, {
    "id": 14,
    "url": "http://localhost:4000/en/opinion/2020/09/01/telework/",
    "title": "Half a year of working from home: Is it the future?",
    "body": "2020/09/01 -  "
    }, {
    "id": 15,
    "url": "http://localhost:4000/en/git/github/2020/09/01/git-and-github/",
    "title": "Getting started with Git and Github: complete beginners guide",
    "body": "2020/09/01 - It's totally easy to get started with Git. If you are a fast reader you can have your profile created in less than 15 minutes from now. If you have listened talking about Git and Github, but you don’t know what it is. If you are starting collaborating in a team or you are developing your own project. If you have just discovered that all techology gurus make reference to their Github profile and think that you need your own to make them take you serious. … Or, if you want to collaborate in your first open source project! Then, this post is for you! =) If you finish this article, you would have make the complete Git and Github tour. Cloning a project, create a branch, make changes, create a pull request or push to you own repository. In the way you will know a little bit more about terminal commands, how to use it and edit a markdown file (. md). This article is about all the basics. There are so much work to make yourself a Git and Github pro, but there is always a beginning. With all the tips introduced in this article you will have enough tools to start in the world of code. I will left all the advanced commands to further posts. So, there we go! What is Git? What is Github?: "
    }, {
    "id": 16,
    "url": "http://localhost:4000/en/jekyll/github/seo/2020/09/01/seo-jekyll/",
    "title": "Posicionar tu página de Jekyll.",
    "body": "2020/09/01 - "
    }, {
    "id": 17,
    "url": "http://localhost:4000/en/jekyll/github%20pages/2020/06/15/multilanguage-jekyll/",
    "title": "Multiple languages for Jekyll and Github Pages!",
    "body": "2020/06/15 - In this post, I will explain how to add multi-languages to your Jekyll template in Github Pages. To apply the multilingual feature, It is better to use some plugin, but Github does not support any other plugins with itself other than a few basic plugins for security reasons, you can find the supported plugins here. So we can have our page working locally, but throwing errors in the Github build process. It might help us skip the build process of Github to push pages that have been generated on your local environment to the repository master branch, we can still control the versions of your Jekyll project by creating a new branch for you projects to be pushed. Installing jekyll-multiple-laguages plug-in: There are several ways to install jekyll-multiple-languages. If you need more info, you will find the full documentation in their project repository. They are looking for more maintainers!!! Using Ruby gem: What I have chosen is to use Ruby gem. What you have to do is to add the following line to your Gemfile gem 'jekyll-multiple-languages-plugin'Then go to root directory of your Jekyll project and execute the following command $ bundle installOr install the gem by yourself as: $ gem install jekyll-multiple-languages-pluginTo activate the plugin add it to Jekyll _config. yml file, under the plugins option: plugins: - jekyll-multiple-languages-pluginAs a Git Submodule: In some cases, depending on the theme that I use, there may be issues related to the dependencies of gems. To avoid these issues you can add the plugin as a git submodule. To install this plugin as a git submodule, go to root directory and execute: $ git submodule add git://github. com/screeninteraction/jekyll-multiple-languages-plugin. git _plugins/multiple-languagesTo update: $ cd _plugins/multiple-languages$ git pull origin masterSetting _config. yml file: Add the languages available in your website into your _config. yml: # Multi-Language configlanguages: [ es ,  en ]default_lang:  es exclude_from_localizations: [ assets ,  gallery ,  _sass ]If not default language, the first element of the language list will be used as the default one. To avoid redundancy, it is possible to exclude files and folders from being copied to the localization folders. The usual folders to exclude will be the images or other common resources folder Folder Structure: Ya está todo configurado, es la hora de añadir la estructura de ficheros para construir nuestra página con los diferentes idiomas. In the Jekyll project without multiple-languages-plugin, Jekyll builds the . md files under the folder structure, in posts cases, it will by in _posts folder. However, if you install jekyll-multiple-languages-plugin, jekyll serve command will build the _posts folder under the _i18n directory. Create a folder called _i18n and add sub-folders for each language, using the same names used on the languages setting on the configuration file:It should look similar to this folder structure: _i18n│  en. yml│  es. yml  │└───es│  └───pagename│    │  file111. txt└───en│  └───pagename│  │  file111. txt│  . . . Setting language. yml: The language. yml files are written in YAML syntax which caters to a simple grouping of strings. Those files have the sentences that we want to be translated, and configuration for each language. For example the navbar titles. For example, we have Spanish and English YAML file: es. ymlglobal: site_title: Raquel Fishes web site_description: Sitio Web de Raquel Fisheslangs: english: Ingles spanish: Español en: EN es: ESnavbar: about: Sobre mí contact: Contacto blog: Blogen. ymlglobal: site_title: Raquel Fishes website site_description: Raquel Fishes personal pagelangs: english: English spanish: Spanish en: EN es: ESnavbar: about: About me contact: Contact blog: BlogVisiting multiligual pages: La navegación por nuestra página multi-idioma va a añadir automáticamente a nuestra web la subextensión correspondiente al idioma en el que estemos navegando cuando no se trate del idioma por defecto. The explorer links will look similar to: Default language (Spanish)raquelfishes. githug. io/aboutlocalhost:4000/aboutOther language (English)raquelfishes. githug. io/en/aboutlocalhost:4000/en/aboutSwitching languages: Now that you got a multilingual feature, you might need a language switcher. In my case, I have added flag icons at the navigation bar for switching between both languages. This snippet will create a link that will toggle between Spanish and English. &lt;li class= nav-item &gt; {% if site. lang ==  es  %}  {% capture link1 %}{{ site. baseurl_root }}/en{{ page. url }}{% endcapture %}   &lt;a href= {{ link1 }}  class= lang-switcher spanish  title= Website en español &gt;&lt;img src= en. webp /&gt;{% t global. en %}&lt;/a&gt; {% elsif site. lang ==  en  %}  {% capture link2 %}{{ site. baseurl_root }}{{ page. url }}{% endcapture %}   &lt;a href= {{ link2 }}  class= lang-switcher english  title= English Website &gt;&lt;img src= es. webp /&gt;{% t global. es %}&lt;/a&gt; {% endif %}&lt;/li&gt;Auto publish: This is the hardest point of this project. At this point, your web is working locally, but you cant publish it to Github Pages. Then, I will explain it step by step. Create a branch and set to default: We are changing our default branch, just to store all our commits history in a different branch fro master. If you already work with a develop branch and other for production, you don’t have to do extra work. If not, this is the moment for creating it. Run these commands below in your local repository, in my project the history branch is source: $ git checkout -b source master$ git push -u origin sourceAnd then, go to your Github repository, and configure this branch as the default project branch Github web &gt; your repository &gt; Settings &gt; Branches &gt; Default branch Rakefile: If you had a previous Rake build file in your site, it probably looks similar to: namespace :assets do task :precompile do  puts `bundle exec jekyll build` endendThat build script, built the Jekyll project, but it won’t wokr anymore, because Github does not support the multilanguage plugin. We need that the new script builds ourt site, copy the built page to our master branch and push it, avoiding Github to build it. Our new Rakefile will be as follow: require  jekyll require  tmpdir require  rubygems # Auto publish# Change your GitHub reponameGITHUB_REPONAME =  username/username. github. io desc  Generate blog files task :generate do Jekyll::Site. new(Jekyll. configuration({   source    =&gt;  .  ,   destination  =&gt;  _site  })). processenddesc  Generate and publish blog to gh-pages task :publish =&gt; [:generate] do Dir. mktmpdir do |tmp|  cp_r  _site/.  , tmp  pwd = Dir. pwd  Dir. chdir tmp  system  git init   system  git config --local user. name username   system  git config --local user. email usermail   system  git add .  	 message =  Site updated at #{Time. now. utc} 	 system  git commit -m #{message. inspect}   system  git remote add origin https://github. com/#{GITHUB_REPONAME}. git   system  git push origin master --force   Dir. chdir pwd endendI have added the user and email local config. Just copy and paste the code in your file and it replace with your personal info and repository. If there is no Rakefile, you can just create a new one and copy the code. Run rake publish: The last step to publish our website in our repository master branch, and then can visit this page at the public site. Now can easily execute the following command: $ rake publish$ git pushor: $ bundle exec rake publish$ git pushAnd push your full local repository, so it will synchronize local commits at development state. Finishing this topic…: I always wanted to have this website project with two languages. Spanish is my native language, and from my point of view like a computer engineer, we use to read all the technical documentation in English, I appreciate and want to contribute to find technical info in Spanish. I have spent A LOT OF TIME to have this Jekyll project in Github to have both languages, searching in several places, and the problem was integrate with Github because of failed builds. I hope this article and Spanish one help others to not lose so many time with this functionality… =) "
    }, {
    "id": 18,
    "url": "http://localhost:4000/en/jekyll/github%20pages/2020/06/08/github_pages-jekyll/",
    "title": "Create your free website with Jekyll and Github Pages!",
    "body": "2020/06/08 - "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});