export type PagePropsTypes = {
  grant_access_to_user: () => void;
  deny_user_access?: () => void;
}

export type ArticlesDataType = {
  id?: number,
  title: string,
  link_img?: string,
  alt?: string,
  text?: string,
  is_opened_text?: boolean,
  is_read?: boolean
}

export type ListArticlesPropsTypes = {
  articles_data: ArticlesDataType[],
  number_selected_article?: null | number
}