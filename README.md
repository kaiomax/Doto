[![Build Status](https://travis-ci.org/kaiomax/Doto.svg?branch=master)](https://travis-ci.org/kaiomax/Doto)

# Doto
A reverse todo list to keep you happy and focused

### Installing

Make sure you have npm and node installed.
```
git clone https://github.com/kaiomax/Doto.git
cd Doto
npm install
```

### Running
```
npm start
```
And then open http://localhost:8080/ on your browser.

### Running tests
```
npm test
```

### Troubleshooting

If you have problems with the `jest --watch`, this probably solves it:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### License

GNU GPLv3
