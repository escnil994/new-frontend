

export class Post {

    constructor(
        public title: string,
        public intro: string,
        public content: string,
        public author: string,
        public url: string,
        public date: Date,
        public image: {
            public_id: string,
            secure_url: string
        }

    ){}

}
