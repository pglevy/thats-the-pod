require "jekyll-import"
    
    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.transistor.fm/acquired",
        "tag" => "Acquired",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://designbetterpodcast.com/feed",
        "tag" => "Design Better",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://api.substack.com/feed/podcast/1707634.rss",
        "tag" => "Designer Sketches",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://api.substack.com/feed/podcast/1194512/private/f13d31f9-02cb-4da8-8441-7b808d9da1d6.rss",
        "tag" => "Philosophy and Classics",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.simplecast.com/3hnxp7yk",
        "tag" => "Founders",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.simplecast.com/azy33G8_",
        "tag" => "The Art of Manliness",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.simplecast.com/vsy1m5LV",
        "tag" => "The Jordan B. Peterson Podcast",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.buzzsprout.com/2260539.rss",
        "tag" => "REWORK",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.megaphone.fm/HS2300184645",
        "tag" => "My First Million",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feed.podbean.com/bogleheads/feed.xml",
        "tag" => "Bogleheads On Investing Podcast",
        "canonical_link" => true,
        "render_audio" => true
    })

    JekyllImport::Importers::RSS.run({
        "source" => "https://feeds.simplecast.com/5SEwkJYi",
        "tag" => "The Long View",
        "canonical_link" => true,
        "render_audio" => true
    })