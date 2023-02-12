# Notes App

Notes App is a NodeJS application for adding, removing, reading and listing notes.

## Prerequisites

[Node](https://nodejs.org/en/)

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install app.

```bash
npm install
```

## Usage

```javascript
# add a note
node app.js add --title='insert-notes-title-here' --body='insert-notes-body-here'

# remove a note
node app.js remove --title='insert-notes-title-here'

# read a note
node app.js read --title='insert-notes-title-here'

# list notes
node app.js list
```
