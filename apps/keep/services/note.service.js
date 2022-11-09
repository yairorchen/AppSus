import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
  print,
  query,
  get,
  remove,
  save,
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
      url: 'http://some-img/me',
      txt: 'puki is the king',
      title: 'Bobi and Me',
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
    return storageService.post(KEEP_KEY, note)
  }
}

function _createKeep() {
  const KEEP = utilService.loadFromStorage(KEEP_KEY)
  if (!KEEP || !KEEP.length) {
    utilService.saveToStorage(KEEP_KEY, KeepData)
  }
}
