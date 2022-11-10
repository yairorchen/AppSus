import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
  print,
  query,
  get,
  remove,
  save,
  createNote,
}
const KEEP_KEY = 'keeps'
const KeepData = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
      title: 'yalla beitar',
    },
  },
  {
    id: 'n102',
    type: 'note-img',
    info: {
      url: '/assets/img/Malawach.jpg',
      txt: 'puki is the king',
      title: 'Bobi and Me',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n1088',
    type: 'note-img',
    info: {
      url: '/assets/img/yair-photo.jpeg',
      txt: 'puki is the king wallaaa',
      title: 'Bobi and Me yaa',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n1d88',
    type: 'note-video',
    info: {
      url: 'https://www.youtube.com/watch?v=sWOrd50HYa4',
      txt: 'puki is the king wallaaa',
      title: 'Bobi and Me yaa',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n1dbb8',
    type: 'note-video',
    info: {
      url: 'https://www.youtube.com/embed/008UXircX3VdM',
      txt: 'shine on you crazy diamond',
      title: 'Best song',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n103',
    type: 'note-todos',
    info: {
      txt: 'Fullstack Me Baby!',
      title: 'yalla beitar',
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'master Js', doneAt: 187111111 },
        { txt: 'master css', doneAt: 187111111 },
        { txt: 'Coding with vue', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
  },
]

_createKeep()

function print() {
  console.log('lalal')
}

function query() {
  console.log('query')
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
function createNote() {
  return {
    id: null,
    info: { title: '', txt: '' },
    type: 'txt',
    style: '',
  }
}

function _createKeep() {
  const KEEP = utilService.loadFromStorage(KEEP_KEY)
  if (!KEEP || !KEEP.length) {
    utilService.saveToStorage(KEEP_KEY, KeepData)
  }
}
