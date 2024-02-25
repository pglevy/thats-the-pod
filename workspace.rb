feeds = [
  {
    "source" => "https://feeds.transistor.fm/acquired",
    "tag" => "Acquired",
    "canonical_link" => true,
    "render_audio" => true
  },
  {
    "source" => "https://another-rss-feed-url.com/feed",
    "tag" => "Another Tag",
    "canonical_link" => true,
    "render_audio" => false
  },
  # Add more feeds as needed
]

feeds.each do |feed_params|
  JekyllImport::Importers::RSS.run(feed_params)
end
