import { registerApplication, start, LifeCycles } from 'single-spa'

registerApplication({
    name: '@single-spa/welcome',
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
        ),
    activeWhen: ['/'],
})

registerApplication({
    name: '@homehub/hello-world',
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            '@homehub/hello-world'
        ),
    activeWhen: ['/'],
})

start({
    urlRerouteOnly: true,
})
