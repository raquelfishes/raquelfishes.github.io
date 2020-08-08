source "https://rubygems.org"

#gem 'jekyll', '~> 4.0.0'
gem 'bundler', '~> 2.1.4'
gem 'kramdown', '~> 2.3.0'
gem 'rake', '~> 13.0'


# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins

# Plugins
group :jekyll_plugins do
    #gem 'programhes' // WIP: Creating custom gem
    #gem 'jekyll-admin', '~> 0.10.2' // Create dependency with rack~>1.5, vulnerability dependency
    gem 'jekyll-archives', '~> 2.2.1'
    gem 'jekyll-feed', '~> 0.13.0'
    gem 'jekyll-gist', '~> 1.5.0'
    gem 'jekyll-multiple-languages-plugin', '~> 1.7.0'
    gem 'jekyll-paginate', '~> 1.1.0'
    gem 'jekyll-seo-tag', '~> 2.6.1'
    gem 'jekyll-sitemap', '~> 1.4.0'
    gem 'jgd', '~> 1.12'
    gem 'rouge', "~> 3.19.0"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?