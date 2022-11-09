import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    get,
  }
  
const MAILS_KEY = 'mailsDB'
_createMails()

function query() {
    return storageService.query(MAILS_KEY)
}

function get(id) {
    return storageService.get(MAILS_KEY, id)
}

function _createMails() {
    let mails = storageService.query(MAILS_KEY)
        .then(mails => {
            if (!mails || !mails.length) {
                mails = [
                    {
                        id: 'e101',
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com'
                    }, {
                        id: 'e102',
                        subject: 'love you!',
                        body: 'love love love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551134930594,
                        from: 'bobo@bobo.com',
                        to: 'user@appsus.com'
                    }, {
                        id: 'e103',
                        subject: 'want you!',
                        body: 'want want want to catch up sometimes',
                        isRead: false,
                        sentAt: 1551135930594,
                        from: 'puki@puki.com',
                        to: 'user@appsus.com'
                    }

                ]
                storageService.post(MAILS_KEY, mails)
                console.log('createbook');
            }
        })
}
