import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    get,
    updateMailData
  }

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
    }
  
const MAILS_KEY = 'mailsDB'

const mailData = [
    {
        id: 'e101',
        name: 'moshe',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }, {
        id: 'e102',
        name: 'yossi',
        subject: 'love you!',
        body: 'love love love to catch up sometimes and! mister lova lova! its a fantastic tactic to write over 100 chars for tests what do you think?!?',
        isRead: false,
        sentAt: 1551134930594,
        from: 'bobo@bobo.com',
        to: 'user@appsus.com'
    }, {
        id: 'e103',
        name: 'puki',
        subject: 'want you!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: 1551135930594,
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    }
]

_createMails()

function query() {
    return storageService.query(MAILS_KEY)
}

function get(id) {
    return storageService.get(MAILS_KEY, id)
}

function updateMailData(mails){
    console.log('mails', mails);
    utilService.saveToStorage(MAILS_KEY, mails)
}

function _createMails() {
    const MAIL = utilService.loadFromStorage(MAILS_KEY)
    if (!MAIL || !MAIL.length) {
      utilService.saveToStorage(MAILS_KEY, mailData)
    }
  }