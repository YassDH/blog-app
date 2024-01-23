export interface BlogPost{
    title : string,
    postLink : string,
    category : {
        categoryId : string,
        category : string
    },
    postImg : string, 
    excerpt : string,
    content : string,
    isFeatured : boolean,
    views : number,
    status : string,
    createdAt : Date
}