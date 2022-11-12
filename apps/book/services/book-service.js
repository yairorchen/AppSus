import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

import booksJson from '../data/books.json' assert { type: 'json' }

console.log(booksJson)
const BOOKS_KEY = 'books'
const booksData = booksJson
const API_BOOK_KEY = 'bookDB'
let gBooksCache = utilService.loadFromStorage(API_BOOK_KEY) || {}

_createBooks()
export const bookService = {
  query,
  get,
  remove,
  save,
  getAPIbooks,
  getFromAPI,
  saveNewBook,
}

function query() {
  console.log('query')
  return storageService.query(BOOKS_KEY)
}

function get(bookId) {
  return storageService.get(BOOKS_KEY, bookId)
}
function getFromAPI(bookId, place) {
  return storageService.getInObject(API_BOOK_KEY, bookId, place)
}

function remove(bookId) {
  return storageService.remove(BOOKS_KEY, bookId)
}

function saveNewBook(book) {
  return storageService.post(BOOKS_KEY, book)
}

function save(book) {
  if (book.id) {
    console.log('save')
    return storageService.put(BOOKS_KEY, book)
  } else {
    return storageService.post(BOOKS_KEY, book)
  }
}

function _createBooks() {
  const books = utilService.loadFromStorage(BOOKS_KEY)
  if (!books || !books.length) {
    utilService.saveToStorage(BOOKS_KEY, booksData)
  }
}

function getAPIbooks(keyword = 'javascript') {
  if (gBooksCache[keyword]) {
    console.log('Getting from cache')
    return Promise.resolve(gBooksCache[keyword])
  }
  const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${keyword}`

  return axios
    .get(url)
    .then(({ data }) => {
      const booksApi = data.items.map((results) => ({
        id: results.id,
        title: results.volumeInfo.title,
        authors: results.volumeInfo.authors,
        description: results.volumeInfo.description,
        subtitles: results.volumeInfo.subtitles,
        pageCount: results.volumeInfo.pageCount,
        categories: results.volumeInfo.categories,
        thumbnail: results.volumeInfo.imageLinks.thumbnail,
        language: results.volumeInfo.language,
        publishedDate: results.volumeInfo.publishedDate,
        publishedDate: results.volumeInfo.publishedDate,
        listPrice: {
          amount: 226,
          currencyCode: 'EUR',
          isOnSale: false,
        },
      }))
      return booksApi
    })
    .then((results) => {
      gBooksCache[keyword] = results
      utilService.saveToStorage(API_BOOK_KEY, gBooksCache)
      return results
    })
}
