require "jekyll-import";
    JekyllImport::Importers::RSS.run({
        "source" => "https://api.substack.com/feed/podcast/1707634.rss",
        # "tag" => "guid",
        "extract_tags" => "item",
        "canonical_link" => true,
        "render_audio" => true
    })