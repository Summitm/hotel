import axios from 'axios'

    // states
    const state = () => ({
        form: [],
        error: null,
    })

    // getters
    const getters = {}

    //actions
    const actions = {
        async sendMail({commit}, form) {
            return new Promise((resolve, reject) => {
                axios.post(
                    '/include/mails/null.php', form
                ).then((res) => {
                    commit('newEmail', res.data)
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                })
            })
        }
    
    }

    // mutations
    const mutations = {
        newEmail: (state, payload) => state.form = payload
    }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}