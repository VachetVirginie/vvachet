# vvachet


husky & commitlint:

```bash
git commit -m 'feat: set up husky and commitlint'
```

Erreur node Netlify:

Set your NodeJS version in Netlify

A couple of times I needed to fix the NodeJS version on a Netlify site, I found myself googling it a couple of times, so this little how-to is basically a note-to-self.

The solution to setting a fixed NodeJS version is actually quite easy:

    go to your desired website
    go to Site Settings
    under Build & deploy
    scroll down to Environment
    add a new environment variable named NODE_VERSION
    set it to your desired version (major or minor)


