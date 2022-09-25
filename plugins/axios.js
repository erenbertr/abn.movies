export default function ({ $axios, app, error: nuxtError, redirect }, inject) {


    var useProxy = true

    if (process.env.NODE_ENV != 'development') {
        useProxy = false
    }


    var api = $axios.create({
        proxy: useProxy,
    })

    api.onRequest(async (config) => {
        if (process.env.NODE_ENV != 'development') {
            config.url = config.url.replace('api/', 'abn/')
        } else {
            config.url = config.url.replace('api/', 'api/abn/')
        }

        return config

    });

    api.onError((error) => {
        console.log('API ERROR: ', error)

        return Promise.resolve(false)
    })

    if (process.env.NODE_ENV != 'development') {
        api.setBaseURL('https://api.alora.de/')
    } else {
        api.setBaseURL('http://localhost:46000/')
    }

    inject('api', api)
}
