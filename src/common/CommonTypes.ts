export type PagePropsTypes = {
  grant_access_to_user: () => void;
  deny_user_access?: () => void;
}

export type ArticlesDataType = {
  id?: number,
  title: string,
  link_img?: string,
  text?: string
}

export type ListArticlesPropsTypes = {
  articles_data: ArticlesDataType[]
}