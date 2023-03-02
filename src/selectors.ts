export const selectors = {
  /** 我所输入的句子 */
  MY_OWN_SENTENCE:
    ".group:not(:has(.check_sentence_button)) div[class^='w-[30px]']:has(img)",

  /** 问题输入框 */
  TEXTAREA: "div:has(>textarea):not(:has(.translate_button))",

  /** 输入框旁边的快捷按钮外框 */
  HELPERS_BOX: ".helpers_box",
};
