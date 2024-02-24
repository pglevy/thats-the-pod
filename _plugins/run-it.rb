require "jekyll-import"
    
    JekyllImport::Importers::RSS.run({
        "source" => "https://designbetterpodcast.com/feed",
        "tag" => "Design Better",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.simplecast.com/3hnxp7yk",
        "tag" => "Founders",
        "canonical_link" => true,
        "render_audio" => true
    })