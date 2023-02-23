import "./ShowMistakesButton.css";
import React, { FC, MutableRefObject, useCallback, useRef } from "react";

/**
 * 检查当前句子的错误按钮，当鼠标滑过当前句子时，展示次按钮
 */
export const ShowMistakesButton: FC = () => {
  const ref = useRef(null);

  const handelClickCheckButton = useCallback(() => {
    const dom = ref.current as unknown;

    if (!dom) {
      return;
    }

    const parentElement = (dom as HTMLElement).parentElement;

    if (!parentElement) {
      return;
    }

    const sentence = parentElement.nextElementSibling as HTMLElement;

    if (!sentence) {
      return;
    }

    chrome.runtime.sendMessage(sentence.innerText);

    const textArea = document.querySelector("textarea");
    const submitButton = document.querySelector(
      "form div:has(textarea)>button"
    );

    if (textArea && submitButton) {
      textArea.value = `Please show me all mistakes in this sentence '${sentence.innerText}' and give some modifications.`;

      (submitButton as HTMLButtonElement).click();
    }
  }, []);

  return (
    <button
      className="btn gap-2 btn-neutral border-0 md:border"
      ref={ref}
      onClick={handelClickCheckButton}
    >
      检查
    </button>
  );
};
