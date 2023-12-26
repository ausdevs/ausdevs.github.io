# AusDevs Wiki

## How do I host this locally myself?

This codebase uses the [Astro web framework](https://astro.build/) and is entirely static.

To host, you will need to install [Node.JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/). On an Ubuntu system in 2023, the following terminal commands installs both tools:
```
$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
$ sudo apt-get install -y nodejs
$ npm install --global yarn
```

Install dependencies and run the dev server:
```
$ cd ausdevs-wiki
$ yarn install
$ yarn dev
```

You can also compile the website to `./dist/` using:
```
$ yarn build
```

## License

All original content is licensed under the [*Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)*](https://creativecommons.org/licenses/by-sa/4.0/) license.

