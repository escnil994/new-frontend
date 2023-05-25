
export class Project{
    constructor(
        public _id: string,
        public title: string,
        public more: string,
        public content: string,
        public github: string,
        public url: string,
        public video: string,
        public date: string,
        public image: {
            public_id: string
            secure_url: string
        }

    ){}
}
