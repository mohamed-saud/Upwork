const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
mix.pug = require("laravel-mix-pug");

mix.setPublicPath("public");
mix.setResourceRoot("../");
mix.copyDirectory("resources/images", "public/images");

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .options({
    // processCssUrls: false,
    postCss: [tailwindcss("tailwind.js")],
  })
  .pug("pug/*.pug", "../", {
    pug: {
      pretty: true,
      // debug:true
    },
  });
