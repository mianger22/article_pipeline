import { CHANGE_ORDER_ELEMENTS, IS_READ_ARTICLE, OPEN_TEXT, SAVED_NUMBER_SELECTED_ARTICLE } from "../common/Constants";

export const saved_number_selected_article_action = () => ({ type: SAVED_NUMBER_SELECTED_ARTICLE, payload: 1 });
export const is_read_article_action = (number: number) => ({ type: IS_READ_ARTICLE, payload: number });
export const open_text_action = (id: number) => ({ type: OPEN_TEXT, payload: id });
export const change_order_elements_action = (id: number) => ({ type: CHANGE_ORDER_ELEMENTS, payload: id });
  