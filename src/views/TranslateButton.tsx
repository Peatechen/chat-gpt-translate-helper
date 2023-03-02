import "./TranslateButton.css";
import React, { FC, useCallback } from "react";

export interface TranslateButtonInterface {
  translationMode: "CTE" | "ETC";
}

export const TranslateButton: FC<TranslateButtonInterface> = ({
  translationMode,
}) => {
  const handelClickButton = useCallback(() => {
    /**
     * 1.查找输入框
     * 2.读取输入框内容并添加翻译指令
     * 3.触发提交
     */
    const textArea = document.querySelector("textarea");

    if (!textArea) {
      return;
    }

    if (!textArea.value) {
      return;
    }

    textArea.value = `How should I say '${textArea.value}' in ${
      translationMode === "CTE" ? "English" : "Chinese"
    }?`;

    const submitButton = document.querySelector(
      "form div:has(textarea)>button"
    );

    if (!submitButton) {
      return;
    }

    (submitButton as HTMLButtonElement).click();
  }, []);

  return (
    <button
      className="translate_button btn gap-2 mt-3 btn-neutral border-0 md:border"
      onClick={handelClickButton}
      type="button"
    >
      {translationMode === "CTE" ? "翻译 CTE" : "翻译 ETC"}
    </button>
  );
};
