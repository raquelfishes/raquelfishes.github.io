# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "programhes"
  spec.version       = "1.0.0"
  spec.authors       = ["Raquel Peces"]
  spec.email         = ["raquelpm23@gmail.com"]

  spec.summary       = %q{ The Multi-Language Jekyll theme built for Programmers }
  spec.homepage      = "https://github.com/raquelfishes/programhes-jekyll"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|categories|tags|_(includes|layouts|pages|i18|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.8", "< 5.0"
  spec.add_runtime_dependency "jekyll-sitemap", '~> 1.4.0'
  spec.add_runtime_dependency "jekyll-feed", '~> 0.13.0'
  spec.add_runtime_dependency "jekyll-seo-tag", '~> 2.6.1'
  spec.add_runtime_dependency "jekyll-paginate", '~> 1.1.0'
  spec.add_runtime_dependency "jekyll-gist", '~> 1.5.0'

  spec.add_development_dependency "bundler", "~> 2.1.4"
  spec.add_development_dependency "rake", "~> 13.0"
end