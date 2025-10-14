import { registerApplication, start, LifeCycles } from 'single-spa'

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
