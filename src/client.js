import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
projectId:'p1h4b6np',
dataset:'job-post',
token: 'skzNJLlAF49eugSfXagP2EqZxGDqhe2D4Oioxi8h6AyGG01TkZXD6D0ZoebHw2F1QPBL70RrL1FIvSQe6TZRGOVtFssyAKsTdnWQTKLqQeVw9NrYE79zYJeNL2MEwvGOGtHcySPexUaOZ9zrRhvRbJCbzGafe12kvI4H8XwUUK0k0MXKIBnK'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)