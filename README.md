[![Build Status](https://travis-ci.org/kaiomax/Doto.svg?branch=master)](https://travis-ci.org/kaiomax/Doto)

# Doto
A reverse todo list to keep you happy and focused

### Troubleshooting

If you have problems with the `jest --watch`, this probably solves it:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
