# Instant Username Search [![Build Status](https://travis-ci.org/umutcanbolat/instant-username-search.svg?branch=master)](https://travis-ci.org/umutcanbolat/instant-username-search)

Instant Username Search helps users find out if their username is taken on more than 100 social media sites. It instantly lists results on the screen while the user is typing.

## Server Repository

This application needs the RESTful web service [instant-username-search-api](https://github.com/umutcanbolat/instant-username-search-api) to query the username availabilities.

## Installation

### For Debian based distros, Ubuntu

You need nodejs and npm installed on your system to run the project. If you don't have, go for the following commands to install. Otherwise pass this step.

```sh
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
```
cd into the application directory and run the commands below. The browser will open the application on http://localhost:3000 automatically.

```sh
npm install
npm start
```

### For Windows

Download and install nodejs from https://nodejs.org/en/download/ and run the following commands in the project directory:

```sh
npm install
npm start
```

## Screenshots
- Desktop version <br> <img src="https://user-images.githubusercontent.com/10065235/52743024-24565080-2fea-11e9-8d96-0c38603c4621.png" width="720" height="405"> <br>
- Mobile version <br> <img src="https://user-images.githubusercontent.com/10065235/52743025-24eee700-2fea-11e9-8834-09831c8a8a17.png" width="300" height="533">  <br>


## Credits
See the [contributors page](https://github.com/umutcanbolat/instant-username-search/graphs/contributors) for details.

## License
This project is licensed under the GNU General Public License v3.0 (GPL 3.0) - see the [LICENSE](LICENSE) file for details.