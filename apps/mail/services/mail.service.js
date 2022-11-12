import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    loggedinUser
}



const MAILS_KEY = 'mailsDB'

let mailTrash = []


const mailData = [
    {
        id: utilService.makeId(),
        name: 'Puki',
        subject: 'Come to the Pukiada!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**8),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Muky',
        subject: 'Come to the Pukiada!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**8),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Tzuki',
        subject: 'Come to the Pukiada!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**8),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Shuki',
        subject: 'Come to the Pukiada!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**8),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Tuki',
        subject: 'Come to the Pukiada!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**8),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'Miss you! mister mahatma!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(15**5, 10**10),
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }, {
        id: utilService.makeId(),
        name: 'Yossi',
        subject: 'Love you!',
        body: 'love love love to catch up sometimes and! mister lova lova! its a fantastic tactic to write over 100 chars for tests what do you think?!?',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**10),        
        from: 'bobo@bobo.com',
        to: 'user@appsus.com'
    },  {
        id: utilService.makeId(),
        name: 'Puki',
        subject: 'want you!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**9),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    }, {
        id: utilService.makeId(),
        name: 'Puki',
        subject: 'want you!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**9),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    }, {
        id: utilService.makeId(),
        name: 'Puki',
        subject: 'want you!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**9),        
        from: 'puki@puki.com',
        to: 'user@appsus.com'
    }, {
        id: utilService.makeId(),
        name: 'Puki',
        subject: 'want you!',
        body: 'want want want to catch up sometimes',
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(10**5, 10**9),        
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

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        console.log('save')
        return storageService.put(MAILS_KEY, mail)
    } else {
        console.log('new')
        mailData.push(mail)
        return storageService.post(MAILS_KEY, mail)
    }
}

function _createMails() {
    const MAIL = utilService.loadFromStorage(MAILS_KEY)
    if (!MAIL || !MAIL.length) {
        utilService.saveToStorage(MAILS_KEY, mailData)
    }
}

function getEmptyMail(){
    return {
        to:'',
        subject:'',
        body:'',
        name: loggedinUser.fullname,
        isRead: false,
        sentAt: Date.now(),
        from: loggedinUser.email,
    }
}