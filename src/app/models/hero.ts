export class Hero {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: [];
    thumbnail: {
        path: string,
        extension: string
    };
    comics: {};
    stories: {};
    events: {};
    series: {};
}
