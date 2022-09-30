export default function ({ $axios, app, error: nuxtError, redirect }, inject) {


    var useProxy = false


    var maze = $axios.create({
        proxy: useProxy,
    })

    maze.onError((error) => {
        console.log('maze ERROR: ', error)

        return Promise.resolve(false)
    })

    maze.setBaseURL('https://api.tvmaze.com/')

    inject('maze', maze)
}
