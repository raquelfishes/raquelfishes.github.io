
var documents = [{
    "id": 0,
    "url": "https://raquelfishes.github.io/en/404.html",
    "title": "error_404",
    "body": " Sorry the Page you are looking for doesnot exist ! : Back to Home "
    }, {
    "id": 1,
    "url": "https://raquelfishes.github.io/en/about",
    "title": "About",
    "body": ""
    }, {
    "id": 2,
    "url": "https://raquelfishes.github.io/en/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://raquelfishes.github.io/en/contact/",
    "title": "Contact",
    "body": ""
    }, {
    "id": 4,
    "url": "https://raquelfishes.github.io/en/",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "https://raquelfishes.github.io/en/gallery/",
    "title": "Gallery",
    "body": "&lt;div class= col-lg-8 offset-md-2 &gt; &lt;div class= row &gt;&lt;div class= row &gt; &lt;div class= card &gt;  &lt;div class= card-title &gt; Mountains&lt;/div&gt;  &lt;div class= row &gt;  &lt;a href= https://raquelfishes. github. io/en/gallery/mountains. html &gt;   &lt;img class= img-thumbnail  alt= Mountains  src= https://raquelfishes. github. io/en/assets/img/gallery/mountains/1-thumbnail. jpg  /&gt;  &lt;/a&gt;  &lt;/div&gt; &lt;/div&gt;&lt;/div&gt;&lt;/div&gt; "
    }, {
    "id": 6,
    "url": "https://raquelfishes.github.io/en/blog/",
    "title": "Blog",
    "body": ""
    }, {
    "id": 7,
    "url": "https://raquelfishes.github.io/en/get-started/",
    "title": "Get Started",
    "body": "Getting Started - How to use “devlopr-jekyll” theme: What’s Jekyll ?: If you aren’t familiar with Jekyll yet, you should know that it is a static site generator. It will transform your plain text into static websites and blogs. No more databases, slow loading websites, risk of being hacked…just your content. And not only that, with Jekyll you get free hosting with GitHub Pages! If you are a beginner we recommend you start with Jekyll’s Docs. Now, if you know how to use Jekyll, let’s move on to using this theme in Jekyll: Steps to create your blog using devlopr-jekyll and Host using Github Pages ::  Step 1.  Fork the repo - click here  Step 2. Use your-github-username. github. io as the new repo ( Replace your-github-username with yours). Remember if you use the name other than your-github-username. github. io , your blog will be built using gh-pages branch.   Step 3. Clone the new repo locally to make changes :   $ git clone https://github. com/yourusername/yourusername. github. io $ cd yourusername. github. io $ code .  Step 4. Open the files using VSCode and edit _config. yml and edit with your details:  _config. yml file - replace with your own details _posts - Add your blog posts here _includes - You can replace the contents of the files with your data. (contains widgets) _assets/img - Add all your images here  Step 5 - Install the development requirements: Set up local development environment:  Git Ruby and Bundler VSCodeWe need ruby and bundler to build our site locally. After installation check if its working: For ruby : $ ruby -vruby 2. 5. 1p57 (2018-03-29 revision 63029) [x86_64-linux-gnu]For bundler : $ gem install bundler$ bundler -vBundler version 2. 1. 4Add jekyll : $ bundle add jekyllThis command will add the Jekyll gem to our Gemfile and install it to the . /vendor/bundle/ folder. You can check the jekyll version $ bundle exec jekyll -vjekyll 4. 0. 0 Step 6. Install the gem dependencies by running the following command $ bundle update$ bundle install Step 7. Serve the site locally by running the following command below: $ bundle exec jekyll serve --watchor you can also serve using : $ jekyll serveVisit http://localhost:4000 for development server  Adding Content: Start populating your blog by adding your . md files in _posts. devlopr-jekyll already has a few examples. YAML Post Example:: ---layout: posttitle: Sample Postauthor: Sujay Kundudate: '2019-05-21 14:35:23 +0530'category:    - jekyllsummary: This is the summary for the sample postthumbnail: sample. png---Hi ! This is sample post. YAML Page Example:: ---layout: pagetitle: Sample Pagemenus: headerpermalink: /sample-page/---Hi ! This is sample page. Editing stylesheet: You’ll only work with a single file to edit/add theme style: assets/css/main. scss. Deploy your Changes: Once happy with your blog changes. Push your changes to master branch.  Step 8. Push Your Local Changes $ git add . $ git commit -m  my new blog using devlopr-jekyll  $ git push origin masterVisit your Github Repo settings ! Enable master branch as Github Pages Branch :  Step 9. Deploy your Blog :  Congrats ! On your new shining Blog ! You can visit the blog using http://your-github-username. github. io. "
    }, {
    "id": 8,
    "url": "https://raquelfishes.github.io/en/gallery/mountains.html",
    "title": "Mountains",
    "body": "{% include gallery-layout. html gallery=site. data. galleries. mountains %} "
    }, {
    "id": 9,
    "url": "https://raquelfishes.github.io/en/search",
    "title": "Search",
    "body": ""
    }, {
    "id": 10,
    "url": "https://raquelfishes.github.io/en/shop/",
    "title": "Shop",
    "body": ""
    }, {
    "id": 11,
    "url": "https://raquelfishes.github.io/en/styleguide/",
    "title": "Styleguide",
    "body": " devlopr jekyll - Styleguide  Lets try the different text styles  Bold , Strong , Emphasis , Italic  Now, lets try different heading styles :  Hello in h1 ! Hello in h2 ! : Hello in h3 ! : Hello in h4 ! : Hello in h5 ! Hello in h6 ! Unordered List  List Item 1 List Item 2 List Item 3 List Item 4 List Item 5 Ordered List  List Item 1 List Item 2 List Item 3 List Item 4 List Item 5 This is a Block Quote, It can Expand Multiple Lines You can use the mark tag to highlight text.  This line of text is meant to be deleted text  This line of text will render as underlined This line of text is meant to be treated as fine print. This line rendered as bold text. This line rendered as italicized text. attr HTML             #     Heading     Heading     Heading     Heading     Heading     Heading     Heading     Heading     Heading                   1     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell             2     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell             3     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell     Cell           YouTube Responsive Embed: Vimeo Responsive Embed: TED Responsive Embed: Twitch Responsive Embed: SoundCloud Embed: CodePen Embed: Syntax Highlighting: 'use strict';var markdown = require('markdown'). markdown;function Editor(input, preview) { this. update = function() {  preview. innerHTML = markdown. toHTML(input. value); }; input. editor = this; this. update();}You can add inline code just like this, E. g. . code { color: #fff; } pre { background-color: #f4f4f4; max-width: 100%; overflow: auto;}GitHub gist Embed: Input Style:  Twitter Embed : I just published “Deploying a blog using Jekyll and Github Pages with SSL certificate for Free” https://t. co/B3T3IQVU93 &mdash; Sujay Kundu (@SujayKundu777) June 29, 2018 Instagram Embed :  A post shared by Ahmad Ajmi (@ahmadajme) on Apr 2, 2018 at 2:18pm PDT "
    }, {
    "id": 12,
    "url": "https://raquelfishes.github.io/en/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 13,
    "url": "https://raquelfishes.github.io/en/blog/git_config",
    "title": "All secrets about Git Config",
    "body": "2021/01/21 - The computer (what I will add repositories) was born to solve problems that did not exist before. Bill GatesDid you push some content with the wrong user? Do you want to change git configuration? Do you know where it is saved and how to check it? If your answer is yes, I hope that you find usefull this article. So, there we go! Git configuration: There are plenty of options to customize your Git development enviroment, from user to default editor, and that can be setted to a concret repository or local environment, and a more generic way or global. We can customize or see our Git configuration throw git config tool. Using this command with the proper flags allow us to check and modify the configuration variables that controls our Git. If you are more curious and want to check the official documentation here is the Git official page. Where is the git config located: Git provides four standard scopes for storing configuration data: system, global, local and worktree. With wich one of them you can customize your relationship with Git. They are saved in different config files, and they overwrite the config from the most specific to most general scopes. The following list is ordered from most general to most specific config file. Global scopes overrides system scope, local overrides global and so on. It is listed with environment, config file path and git config command.  System: [git_installation_path]/etc/gitconfig $ git config --system --list Global: [HOME]/. gitconfig $ git config --global --list Local: [git_repository]/. git/config $ git config --local --list Worktree: [git_repository]/. git/config. worktree $ git config --worktree --listHere is where you will probably find Git configuration files:  [directorio_instalación_git]     Windows: C:/Program Files/Git/   Linux: ~etc/    [HOME]     Windows: C:/Users/[username]   Linux: ~home/[username] o ~root/   Don’t worry if you don’t find one of the files, Git doesn’t generate it until they are referenced for the first time. You can use the following command to find the Git config file setting a given varible to a particular value. In the following command example you can see the command indicating what variable is set by each scope. For example the core. editor is setted at system and global scopes, and user name is setted in global and local scopes: $ git config --list --show-originfile:C:/Program Files/Git/etc/gitconfig core. editor= C:\\Program Files\\Sublime Text 3\\sublime_text. exe . . . file:C:/Users/Fishes/. gitconfig user. name=Raquelfile:C:/Users/Fishes/. gitconfig core. editor=vim. . . file:. git/config    user. name=Rachel. . . One more commmand about git config files, if you want to open the configuracion file make use of edit option, here is the example with each one of the scopes. $ git config --system --edit$ git config --global --edit$ git config --local --edit$ git config --worktree --editRemember, The most specific config overwrite the most general ones. What first? The user: Don’t worry and get crazy if you see much options to configure. You will use the most of them with de default config. First is first, config your user, without setting it you can’t work with Git. So, let’s set the global git config username and email properties. Don’t worry this info won’t end up on a mailing list or anything, it is used as metadata to identify your Git repository changes. There are a number of ways to edit the global git config file, but I recommend throw command line. $ git config --global user. name raquel$ git config --global user. email example@example. comI find really usefull to config the user at local scope too, for example for professional repositories different than pesonal ones. So I configure the user at global scope and if I made changes on a work repository I set my company user for that repository. $ git config --local user. name Raquel$ git config --local user. email company@company. comIf you don’t know what user is setted, you can check an specific key executing git config &lt;clave&gt;. $ git config user. nameRaquel$ git config user. emailexample@example. comNow, say goodbye to wrong user in a commit for specific repositories. What else? The editor: Now we have configured the user identity, other usefull configuration is choose the default text editor to write commit messages or open git files. If you don’t select anythin, Git will use the default system editor, it uses to be Vim. You can select the the text editor that are already in the system, or other ones installed by you as Sublime or NotePad++. As before, you can change the text editor at different scopes. I recommend config it at globla scope. The following commands can be used to change the global Git config defaut text editor for each program.       Atom   git config –global core. editor  atom wait        emacs   git config –global core. editor  emacs        Textmate   git config –global core. editor  mate –w        Vim   git config –global core. editor  vim        Sublime   git config –global core. editor  'C:/Program Files/Sublime Text 3/sublime_text. exe' -w        NotePad++   git config –global core. editor  'C:/Program Files/Notepad++/notepad++. exe' -multiInst -notabbar -nosession -noPlugin    How to remove some git config settings?: To delete git cconfig settings simply use the unset command. $ git config --global --unset core. editorOccasionally, a property gets set twice by error, and previous command fails. In this case, we have a powerfull command unset-all, this will remove all lines with match with the specific key. $ git config --global --unset-all core. editorWhat is next?: There are number off different commands and tricks for Git. I will try to share all the most usefull. In the meantime, I hope you find this article usefull. Now, have fun! Thanks for reading!=) "
    }, {
    "id": 14,
    "url": "https://raquelfishes.github.io/en/blog/github_pages-jekyll",
    "title": "Update free website with Jekyll and Github Pages!",
    "body": "2021/01/14 - Jekyll does what you tell it to do — no more, no less. It doesn't try to outsmart users by making bold assumptions, nor does it burden them with needless complexity and configuration. Put simply, Jekyll gets out of your way and allows you to concentrate on what truly matters: your content. You have created your site at Github Pages, but you are a beginner in CSS or don’t want to worry about that, but you want a more visual appeal, try a Jekyll theme!This article continues a previous one to create your website for free with Github Pages. There you can learn about creating your personal site using a repository. So, there we go! I have my site, but it could be more interesting: There are prebuilt themes that can be used to make your site look a little better with any effort. Jekyll and Github will do all the work for you! Your job is to push a couple of clicks. But first… What is Jekyll?: Jekyll is a static site generator. The site is published as it is, and show the same for all users. It’s really simple to use, blog-aware for personal, project or organization sites. Jekyll is written in Rubby by Tom Preston-Werner at 2008, Github’s co-founder. This is why is the engine behind Github Pages. It’s also an open source project distributed under MIT license. As Jekyll is a static site generator, it does not use databases, it renders Markdown or Textile and Liquid templates, and produces a complete static website ready to be served by a web server. Don’t think that the “static” word will be a problem to scale your project, Jekyll is really flexible and can be used in combination with front-end frameworks such as Bootstrap, Semantic UI and more. If you want to learn more, I encommend you to take a look at the official Jekyll site or at Github Pages and Jekyll documentation Ok, then I know what it is, let’s continue: Si ya has realizado la primera parte del tutorial y has seguido los pasos sobre cómo Crear tu web gratis con Github Pages o ya tienes tu web creada. Go to the “GitHub Pages” section in “Settings” and click on “Choose a theme. ” There you can see a theme selection, just choose the one you like most: Let’s see what our website looks like if we choose one of the themes that shows. All that you have to do is press the green “Select theme” button: Give it a couple of minutes to update our web, and with just a few clicks of effort, we’re getting something better! That’s it! You created your own free website for your business, blog, or portfolio, hosted it through a GitHub repository, and it’s already up and running. You have your window to the world! And… now what?: If you take a look at your repository files, there is a new one named _config. yml. In that file you can find all the info about the theme and configuration. If you want, take a look at all the options you cand add there. There are so many themes you can choose, one of them and as starting point because is really simple is Jekyll Now it has pre-build blog. If you decide that don’t want to use the theme and want to go back to your original site. If you delete the config file, you delete the theme!You can choose themes from github pages or download and buy from other places, as in the official Jekyll themes site for Github. This is just the beginning: Jekyll is much more than select a theme and that’s it, as Wordpress has multiple themes and plugins to update the funcionality, with them you can add others libraries or create a web as complete as this one you are reading. As always, you and your time are the limit! Now, have fun! Thanks for reading!=) "
    }, {
    "id": 15,
    "url": "https://raquelfishes.github.io/en/blog/github_pages",
    "title": "Create your website for free with Github Pages!",
    "body": "2021/01/07 - Github Pages allows to turn any repository on Github into a website with a couple of clicks. If you need an online portfolio of your personal and work projects. If you want to create your blog or business site and don’t know how to start. If you don’t want to deal or pay for website hosting, domain names and all everything else to launch or website This one’s for you! Why should I have a website?: Nowadays, it’s really hard to imagine anyone who wouldn’t benefit from having his own website. You might need to display your portfolio for potential employers or as a freelance. You might need to display your student proyects and share it with all the University Community. You might create your own blog about places you’ve been or what you’re doing. You might need to advertise yourself or your business and open your own shop online… A website is the play to connect yourself with the world and the best communication tool. It’s how you can create, build and control your online image. Plus, the sooner you build your place, the more time you’ll have to build your online presence and reach the people you want to reach. It can help you stand out in of competitors. And, we all know that it’s also not the easiest thing if you don’t know what you’re doing! If you are a beginner, surely you have heard about some simplest options. The main one is Wordpress, but I want to introduce to Github. Wordpress is the excelence beginners tool! You only have to configure some parameters and start writing. It’s great for those who want to create a site fast and without any technical knowledge. The main problem with Wordpress is that you can’t configure almost nothing with the free plan. It’s too obvius that you are using Wordpress, you have to use Wordpress logo, your domain has wordpress. com and customization and templates are minimal. If you are a begginer tech person, you will know Github like a code repository for sure. If you are in tech world and love to program, for sure you will have a Github account with at least one project. But maybe you don’t know about Github Pages functionality. You can create your web in Github and host it directly there, in your code repository, and needing no more. If you are really jealous of your code, or want to keep your site code in secret, this article might end it here for you. Putting your code on Github shows that you like contributing to open source philosophy. You can help and inspire everyone who cames after with your ideas. That’s the big Githup idea, share knowledge and work. When you share your proects on Github, people can see your code, what you’re doing, how you’re doing, they can suggest some improvements or features. It’s like the Alexandria library of code nowadays. retty much everyone in tech right now is using Git and Github in some way. Having your website right there is a plus, and it will sind up with a repository and some commints on your profile page =) If you’re a total brand new to everything Git and Github, you might want to check my previous post “Getting Started with Git and GitHub: the total beginner’s guide”. That article will show you the basics of Git and Github, concepts like “repository” or “branch”. From now on I’m assuming that you know the basics. So, there we go! Let’s start with my web!: There are two ways of getting started with your website. You might be starting completely from scratch! You don’t have anything, neither index. html file. On the other hand you might have a website that you’ve already design and put together, but you don’t know how to use Github to launch it as a free website. I have my website files, but I don’t know what to do with them!: This is the simplest case. Github will make all the work for you. Asumming that you already have a Github account and you know what a respository is, if not, you should check my previous article about how to start with Git and Github. A repository is like a eggshell, where your project will live. That is the place where you’ll keep your folders, add images, videos and anything else your project needs in your repository. If you haven’t already, go ahead and initialize your project with a repository, or create a new repository and upload all your files. If you have a file called index. html Github will understand what you wnat to do. Now you’re going to learn about taking advange of Github Pages. Go to your Github repository and click Settings Once we are at settings page, you have to make scroll down until the Github Pages section. Now drop the Source dropdown menu and select Master branch option. This will make that our website take the home page the master branch of our reository, it’s pretty much publish your repositori as-is. You are going to see a notification that your site is ready to be published. Be patient, wait a minute or two, and then refresh the page or try the link if you wante. Once your site has been published, the notification has changed, your site has been published, you’ll see this: Try clicking on that link and MAGIC! You have a published free website! I don’t know how to get started!: I’m not gonna explain how to create a website, neither all design librarys you can use, this is the basics. I prefer that you know how to create something from zero with the tool that I’m introducing here and then, with all your time and motivation available explore all this new world. This option is for total beginners, I’m going to show how to do everything on the Github to create a website. Well, go ahead and first thing, create a new repository. Fill in with all your repository data: name, descripcion and select the option to initialize the repository with a README Initialize this repository with a README and then click Create repository Now, the same as previous section, you have to go to Settings section, near the top right-hand side of the screen. Once you are here, scroll down to Github Pages section. Drop the dropdown Source menu and select Master branch option. First, you will see a notification like your site is ready to be published. Please, be patient, this might take some minutes, then refresh the page and you will see like notification has changed and show that your site has been published with the web domain where you could visit your web. Now click in the link: Congratulations! You are online! But, this is really ugly. : Oks, you are right, this website is really ugly and boring. If you come back to your repository, you can see that what is showing is your README. md file. If you want to make some quick changes, you can go ahead and edit your file to display what you want people to see. To do that, go back into your repository, click the little pencil icon in your README file and make it better! Don’t forget to commit your README file changes! If you don’t do that, you will loose all the work. You can also add a short commit message explaining all the changes. Keep in mind that you are editing a Markdown file. If you don’t know about this format, visit the Markdown Getting Started Official Site for anyone who hasn’t worked with it before. This kind of files are a programming languate, this post is written in Markdown format, where you can add element formats writting plain text. There are a lot of things that you can add to with this files, like adding images, colors, links or even programming code. If you are curious about this format, explore the Basic Syntax Markdown Guide Now go back to your web domain, and see how it looks the last changes! Be aware that sometimes takes a few minutes for the changes to go through your published web. Try waiting a couple of minutes and refreshing. You can also have to delete your browser cache or open the link in a privacy browser sesion to see before all the changes. That is an improvement, can it get better?: Yes, it can get really better, this is the point where everything start to get interesting. But, I’m going to explain it in a new post where I will introduce Jekyll, the framework wich I used to create this website. I hope this tutorial has helping to whet your appetite. Now, have fun! Thanks for reading!=) "
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