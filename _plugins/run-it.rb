require "jekyll-import"
    
module MyFeedImporter
  class MyFeedGenerator < Jekyll::Generator
    def generate(site)
      # Access data from site.data
      subs = site.data['subscriptions']

      # Process the data
      subs.each do |podcast|
        JekyllImport::Importers::RSS.run(
          {
            "source" => "#{podcast['url']}",
            "tag" => "#{podcast['title']}",
            "canonical_link" => true,
            "render_audio" => true
          }
        )
      end
    end
  end
end