# notes-cmd-app
> a notes app for the command line written in Node

## Build Setup

``` bash
# install dependencies
npm install
```

## Running the app
```bash
# run on command line
node app [command] --argument(s)

# add a note (adds to notes.json and will create file on first note add)
node app add --title=\"title\" --body=\"body\"

# read a note (prints out note title)
node app read --title=\"title\"

# list all notes (prints out all notes, title and body)
node app list

# remove a note (removes specific note)
node app remove --title=\"title\"
```

## Debugging
```bash
# watch for changes - useful for debugging
nodemon app
```
