import { Post } from "../models/post.model"

export interface PostInterface {
    total: number,
    posts: Post[]
}
