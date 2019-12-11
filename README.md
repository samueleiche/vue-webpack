## Vue.js Webpack boilerplate

Useful for WordPress or any custom site when a full SPA is not feasable.

#### Getting started
Run npm install:

```bash
$ npm i
```

#### Development
```bash
$ npm run dev
```

#### Production build
```bash
$ npm run build
```

Files are build in `public/build`.

#### Project structure example for WordPress

```
    .
    ├── index.php
    ├── ...
    ├── public/
    │   ├── build/
    │   │   └── ...
    │   ├── static/
    │   │   └── ...
    │   └── ...
    └── src/
        ├── assets/
        │   └── ...
        ├── style/
        │   └── ...
        └── app/
            ├── api/
            │   └── ...
            ├── components/
            │   ├── appNavbar.vue
            │   ├── AppMenu.vue
            │   ├── MenuIcon.vue
            │   └── ...
            ├── mixins/
            │   └── ...
            ├── layouts/
            │   ├── Home.js
            │   ├── Auth/
            │   │   ├── index.js
            │   │   ├── routes.js
            │   │   ├── Login.vue
            │   │   ├── Register.vue
            │   │   └── ...
            │   └── ...
            ├── plugins/
            │   └── ...
            ├── store/
            │   └── ...
            ├── utils/
            │   └── ...
            ├── const.js
            └── index.js
```
