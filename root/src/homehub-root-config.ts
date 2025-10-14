import { registerApplication, start, LifeCycles } from 'single-spa'

registerApplication({
    name: '@homehub/react-navbar',
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            '@homehub/react-navbar'
        ),
    activeWhen: ['/'],
})

start({
    urlRerouteOnly: true,
})
