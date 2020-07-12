const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  // load existing notes
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.underline.bold('Success!') + chalk.green('new note added!'))
  } else {
    console.log(chalk.red.inverse('note title already exists!'))
  } 
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse(note.title))
  } else {
    console.log(chalk.red.underline.bold('Error:') +  ' ' + chalk.red.inverse('no note found'))
  }

}

const removeNote = title => {
  const notes = loadNotes()
  const notesToKeep = notes.filter( (note) => note.title !== title )

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.underline.bold('Success!') + chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.underline.bold('Error:') +  ' ' + chalk.red.inverse('no note removed'))

  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.magenta.italic('Your notes'))
  notes.forEach((note) => {
    console.log(chalk.grey.inverse(note.title) + ': ' + chalk.cyan(note.body))
  })
}
  
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }  
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}