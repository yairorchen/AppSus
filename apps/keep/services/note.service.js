import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
  print,
  query,
  get,
  remove,
  save,
  createNote,
  createTodo,
}
const KEEP_KEY = 'keeps'
const KeepData = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: false,
    info: {
      txt: 'Fullstack all night long!',
      title: 'Whate I want to do tonight?',
    },
  },
  {
    id: 'n102',
    type: 'note-img',
    isPinned: false,
    info: {
      url: './assets/img/Malawach.jpg',
      txt: 'the best malawach i hade in my life!',
      title: 'Malawach at Shabat!',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n1088',
    type: 'note-img',
    isPinned: true,
    info: {
      url: './assets/img/yair-photo.jpeg',
      txt: 'Puki is the best',
      title: 'positive image of one of the developers',
    },
    style: {
      backgroundColor: 'rgb(108, 145, 229)',
    },
  },
  {
    id: 'n1d88',
    type: 'note-video',
    isPinned: true,
    info: {
      url: 'https://www.youtube.com/watch?v=sWOrd50HYa4',
      txt: 'Puki is the king of Coding academy',
      title: 'Chill music for program time!',
    },
    style: {
      backgroundColor: 'rgb(208, 134, 129)',
    },
  },
  {
    id: 'n1dbb8',
    type: 'note-video',
    isPinned: false,
    info: {
      url: 'https://www.youtube.com/embed/008UXircX3VdM',
      txt: 'shine on you crazy diamond',
      title: 'Best song ever',
    },
    style: {
      backgroundColor: 'rgb(208, 239, 229)',
    },
  },
  {
    id: 'n103',
    type: 'note-todos',
    isPinned: false,
    info: {
      txt: 'Fullstack Me Baby!',
      title: 'All the task for now',
      label: 'Get my stuff together',
      todos: [
        { id: '109', txt: 'Basic CRUDL', doneAt: 187111111 },
        { id: '110', txt: 'Pinned note', doneAt: 187111111 },
        { id: '119', txt: 'Change color', doneAt: 187111111 },
        { id: '129', txt: 'upload video', doneAt: null },
        { id: '139', txt: 'make Todo', doneAt: 187111111 },
        { id: '199', txt: 'Upload picture', doneAt: 187111111 },
        { id: '149', txt: 'Go to the bar mitzva!', doneAt: 187111111 },
        { id: '142', txt: 'drag and drop', doneAt: null },
        { id: '192', txt: 'connect to mail', doneAt: null },
      ],
    },
  },
]

_createKeep()

function createNote(type = 'note-txt') {
  return {
    id: null,
    type,
    isPinned: false,
    info: {
      url: '',
      title: '',
      txt: '',
      todos: [
        {
          id: utilService.makeId(),
          txt: 'write your first task',
          doneAt: null,
        },
      ],
    },
    style: { backgroundColor: '#89b6b8' },
  }
}

function createTodo() {
  return {
    id: utilService.makeId(),
    txt: 'new!',
    doneAt: null,
  }
}
function query() {
  return storageService.query(KEEP_KEY)
}

function get(noteId) {
  return storageService.get(KEEP_KEY, noteId)
}

function remove(noteId) {
  return storageService.remove(KEEP_KEY, noteId)
}

function save(note) {
  if (note.id) {
    console.log('save')
    return storageService.put(KEEP_KEY, note)
  } else {
    console.log('new')
    KeepData.push(note)
    return storageService.post(KEEP_KEY, note)
  }
}
function duplicate() {}
function _createKeep() {
  const KEEP = utilService.loadFromStorage(KEEP_KEY)
  if (!KEEP || !KEEP.length) {
    utilService.saveToStorage(KEEP_KEY, KeepData)
  }
}
