# karibou-seed


## Prerequisites
* git
* node/npm stable
* npm -g install @angular/cli

```bash
git clone https://github.com/karibou-ch/karibou-seed
cd karibou-seed
npm install
ng serve 
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve --preserve-symlinks` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Publish code
* rsync -avu --delete -e 'ssh -p22' dist/* karibou.ch:www/demo.karibou.ch

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --prod --preserve-symlinks` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## MDC/Angular links
* [hammer&navbar](https://github.com/trimox/angular-mdc-web/issues/156) 
* [animation](https://material.angular.io/guide/getting-started#step-2-animations) Noo
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
