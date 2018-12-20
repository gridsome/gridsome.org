# 0. Development setup

Before you dive into building your first Gridsome site, you'll need to familiarize yourself with some core web technologies and installed all required software/tools on your local machine.

## Overview of core tech

These are some of the main web technologies you’ll use when building a Gridsome site:

- **HTML**: A markup language that every web browser is able to understand. It stands for HyperText Markup Language. HTML gives your web content a universal informational structure, defining things like headings, paragraphs, and more.
- **CSS**: A presentational language used to style the appearance of your web content (fonts, colors, layout, etc). It stands for Cascading Style Sheets.
- **JavaScript**: A programming language that helps us make the web dynamic and interactive.
- **Vue.js**:  A progressive framework for building user interfaces and websites. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. Its perfect for building single page applications and PWAs.
- **GraphQL**: A query language. A programming language that allows you to pull data into your website. It’s the interface that Gridsome uses for managing site data locally.

It’s not necessary to be an expert in all the languages mentioned above — if you’re not, don’t worry! You need to have some basic knowledge of HTML, CSS and JavaScript. You’ll pick up a lot through the course of this tutorial series.

## The command line

The command line is a text-based interface used to run commands on your computer. You’ll also often see it referred to as the **terminal.**  If you’re new to the command line, “run `command`” means “type `node --version` in the command prompt, and hit the Enter key”. From here on, this is what we mean by “run `command`”

To learn more about the command line see **[instructions for Mac](http://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/)** or **[instructions for Windows](https://www.quora.com/How-do-I-open-terminal-in-windows)**.

## Install node.js

Node.js is an JavaScript run-time environment that executes JavaScript code outside of a browser.

Visit the [Node.js site](https://nodejs.org/) and follow the instructions to download and install the recommended version for your operating system. npm is bundled with node.js, so you don't have to install it. Once you have followed the installation steps, make sure everything was installed properly:

1. Open up your terminal.
2. Run `node --version`
3. Run `npm --version`.

It should output the version number from both commands if everything is setup correctly.

## Install GIT

[Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed, data integrity, non-linear workflows and efficiency for source code management.

When you initialize any Gridsome project, Gridsome uses Git behind the scenes to pull down the repository to your local machine.

The steps to download and install Git depend on your operating system. Follow the guide for your system:

* [Install Git on MacOS](https://git-scm.com/download/mac)
* [Install Git on Windows](https://git-scm.com/download/windows)
* [Install Git on Linux](https://git-scm.com/download/linux)

## Install Gridsome Cli

The Gridsome CLI tool lets you quickly create new Gridsome-powered sites and run commands for developing Gridsome sites. It is a published npm package. You can install Gridsome CLI from the npm registry, using the npm CLI.

1. Open the terminal.
2. Run `npm install --global gridsome-cli`.

## Voila 🎉 You're now ready to start the tutorial

Before proceeding further, just double check if Gridsome is installed properly on your machine.

1. Open up your terminal
2. Run `gridsome --version`
3. Run `gridsome --help`

It should output some data inside terminal, running `gridsome —version` should return a version number and running `gridsome --help` will show different commands available for using the gridsome CLI.

Now you are ready to use Gridsome CLI to create your first Gridsome site. Using this CLI, you can download “starters” *(partially built sites with some default configuration)* to help you move quickly on creating a certain type of site.
