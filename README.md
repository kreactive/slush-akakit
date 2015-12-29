# slush-akakit

## Requirements

 1. Node :  https://nodejs.org/en/

## Getting Started

Install `slush`

    $ npm install -g slush

Install `slush-akakit` globally:

```bash
$ npm install -g git+ssh://git@git.infra.kreactive.eu:digischool.component.web/slush-akakit.git
```

## Update slush-akakit
$ npm install -g git+ssh://git@git.infra.kreactive.eu:digischool.component.web/slush-akakit.git
### Usage

Create a new folder for your project:

```bash
$ mkdir my-project
```

Run the generator from within the new folder:

```bash
$ cd my-project && slush akakit
```


----------


### Run env

Dev env, watch html + js + css files

    $ npm run start

Prod env

    $ npm run build

*Create dist folder with your application*

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).