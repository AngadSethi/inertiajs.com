import Layout from '../../components/Layout'

const meta = {
  title: 'inertia-svelte@v0.4.0',
}

<H1>inertia-svelte@v0.4.0</H1>

<div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on October 9, 2020</div>

- Added new `app` and `link` named exports, and have deprecated `InertiaApp` and `InertiaLink`.
- Updated the `$page` store to return the full `page` object, instead of just the props.
- Added auto update method to `use:inertia` ([#230](https://github.com/inertiajs/inertia/pull/230)).
- [INTERNAL] Removed `transformProps()` call, since this is now now done in Inertia core.

<H2>Breaking changes</H2>

This release updates the `$page` store to return the full `page` object, instead of just the page `props`. The purpose of this change is to better reflect what the [page object](https://inertiajs.com/the-protocol#the-page-object) is, and to make the other properties within the page object available to you, such as the `url`, `version` and `component` name. The upgrade path here is straightforward—simply append `.props` to all instances of `$page`.

This release also requires version `0.4.0` of the `@inertiajs/inertia` package. Please be sure to update your dependencies accordingly.

const Page = () => {
  return (
    <>
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
