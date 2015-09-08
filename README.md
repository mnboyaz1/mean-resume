# mean-resume
A personal resume website built on the MEAN stack. Perfect for anyone who is just getting started with MEAN, automated testing, database migrations, and source builds.

# Overview
This project accomplishes three main goals:
- Give technically savvy people a quick way to launch a professional resume website.
- Run the site on a single server (no automated deployment involved).
- Teach MEAN stack basics to rookies. 

During the installation process, you will learn to:
- Fork and clone a Github repository.
- Install Node Package Manager
- Install global packages like MongoDB
- Install dependencies with package.json
- Migrate data into MongoDB
- Build and minify CSS & JS with LESS and Grunt
- Use Package.JSON to start and stop services

You will also be able to read code and learn super-basic concepts like:
- Node app setup
- Node routing
- Mongoose models
- Angular services, controllers, and deferred promises
- Test-driven development

This guide assumes you have basic knowledge of:
- Home brew 
- Git / Github
- Javascript
- CSS
- APIs
- Some sort of database

This guide does not (nor will it ever) address winblows-specific commands. (sorry!).

#Installation

### Fork the code
Click the fork icon and add a copy of this repository to your account. This will allow you to make changes and commit your own personal data for safe keeping. 

### Install Global Dependencies
- Go to your home directory (usually ~/)
- Make sure Homebrew is installed and in your path. 
- Linux users: [Install Linuxbrew](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-linuxbrew-on-a-linux-vps). You may also need [this](https://github.com/Homebrew/linuxbrew/issues/191#issuecomment-130186458) (AWS).
- If node is not already installed: `brew install node`
- If mongodb is not already installed: `brew install mongodb` (May require > 20min)
- Install Naught `npm install -g naught`
- Install Karma `npm install -g karma`
- Install Karma `npm install -g grunt`

### Clone the code (Use your forked address, please)
`git clone git@github.com:NoelBaron/mean-resume.git`
or
`git clone https://github.com/NoelBaron/mean-resume.git`

### Install Local Dependencies (node_modules)
This project does not store modules. Instead, a quick `npm install` will do the trick. Once executed, every package listed in package.json will be installed and all dependencies should be resolved.

# Configure
Before you're up and running, you'll need to configure a few things. 

### Karma Config
I used Karma to launch Mocha/Chai tests in the browser. Unless you 
need additional Karma features, you shouldn't need to touch this file.

### MongoDB Migrations Config
I used mongodb-migrations to insert new data into MongoDB. Any values you change here should also be reflected in app.js (where Mongo is initialized).

### Gruntfile.js
Only update this file if you have experience with Grunt. It serves three purposes:
- Minifies all /src/js/*.js files and puts them in /build/js
- Converts and minifies all /src/less/*.less files into CSS and puts them in /build/css
- Migrates new build to /public/stylesheets and /public/javascripts

### Profile and Background Images
You may replace desktop.jpg and profile.jpg with your own imagery. For best results, use the same dimensions as the original files, otherwise you'll have to modify HTML and LESS properties. 

### Migrations/*.js
Each of these files contains seed data for your MongoDB database. They're named according to model/table, so you should have no problem swapping out my data for yours.
- 1-add-users.js : This is your main user information.
- 2-add-links.js : This data appears in the form of clickable buttons. See Font Awesome for a list of icons.
- 3-add-skillgroups.js : These are your main skill groups. See "Full Stack Technologies" section of the demo.
- 4-add-skills.js : This data represents your individual skills which appear in each skill group section.
- 5-add-samples.js : This file is where you can place your sample code. Place your code in the comment blocks.

# Launch Server
If you take a look at the scripts object in package.json, you will notice a few special commands. 
```javascript
  "scripts": {
    "start": "export NODE_ENV=development && naught start --worker-count 1 --ipc-file ~/naught/meanResume.ipc --log ~/naught/meanResume.log --stdout ~/naught/meanResume.stdout.log --stderr ~/naught/meanResume.stderr.log ./bin/www",
    "stop": "brew services stop mongodb && naught stop ~/naught/meanResume.ipc",
    "status": "naught status ~/naught/meanResume.ipc",
    "prestart":"brew services start mongodb && ./node_modules/mongodb-migrations/bin/mm migrate --config=config/mm.json"
  },
```
### npm prestart
Starts mongodb and attempts to import new data from your /migrations directory. If you have previously imported your data, mongo will know and it will skip the file.

### npm start
Spins up a new naught worker, which is responsible for keeping your website up and running. If the site experiences a hiccup for any reason, naught will destroy the old worker and will resurrect the site with a new one. 

If you wish to run the site in produciton mode (recommended), change `export NODE_ENV=development` to `export NODE_ENV=production`. 

### npm stop
Stops mongodb and naught workers. 

### npm restart
Executes `npm stop`, `npm prestart`, and `npm start` sequentially.

# View In Your Browser

At this point, everything should be working as expected at `http://localhost:3000`. If you are using a remote server, swap out localhost for your remote IP address. If you do not see the site as expected, please revisit this README and retrace your steps before filing a bug.

