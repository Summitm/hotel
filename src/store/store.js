import { createStore } from 'vuex'

import mails from './modules/mails'
import cart from './modules/cart'

export const store = createStore({
    modules: {
        mails,
        cart
    }
})