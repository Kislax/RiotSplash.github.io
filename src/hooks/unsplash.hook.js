import { createApi }  from 'unsplash-js';

const unsplash = createApi({ accessKey: 'AFDhwv8KgCPMlQv3LwMNtoGBh10JcgxBvEcZ-G3Jc8w' });

// non-feed example
unsplash.photos.get({ photoId: 'foo' }).then(result => {
    if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
    } else {
        // handle success here
        const photo = result.response;
        console.log(photo);
    }
});