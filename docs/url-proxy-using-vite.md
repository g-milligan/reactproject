# Setup a URL proxy with Vite

What is a `proxy?` A `proxy` is a way to refer to an API endpoint url throughout the app without having to hard-code it. The API url can be written in configuration, then a dummy URL is used as an alias or `proxy` for whatever URL is written into configuration.

Sometimes you configure a `proxy` inside the package.json... but since this project uses Vite, the `proxy` is configured inside of the `vite.config.js`.

[Code diff](https://github.com/g-milligan/reactproject/commit/0b4d2cbe061c8ce9a5c29941fea14646953338f4)