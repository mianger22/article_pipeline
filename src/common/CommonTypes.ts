export type PagePropsTypes = {
  grant_access_to_user: () => void;
  deny_user_access?: () => void;
}

export type ArticlesDataType = {
  id?: number,
  title: string,
  link_img?: string,
  text?: string,
  is_opened_text: boolean
}

export type ListArticlesPropsTypes = {
  currentNumber?: number,
  articles_data: ArticlesDataType[]
}