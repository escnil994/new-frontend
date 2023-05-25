

export class Comment {

  constructor(
      public name: string,
      public email: string,
      public comment: string,
      public color: string,
      public date: string,
      public allowed?: boolean,
      public commentOrProject?: string,

  ){}

}
