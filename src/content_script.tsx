import React from "react";
import ReactDOM from "react-dom";
import "./custom_style.css";
import { selectors } from "./selectors";
import { ShowMistakesButton } from "./views/ShowMistakesButton";

// 向页面插入克洛伊的图片
function insertChloeImage() {
  var imageBox = document.createElement("div");
  imageBox.className = "chloe_image_box";

  imageBox.innerHTML = `
  <!-- Loading animation container -->
  <div>
    <image src="${chrome.runtime.getURL("/chloe_side.jpeg")}"/>
  </div>

  <div class="led">
    <div class="loading">
      <div class="circle">
    </div>

    <div class="spinlines">
      <div class="spinline spinline1"></div>
      <div class="spinline spinline2"></div>
      <div class="spinline spinline3"></div>
      <div class="mask"></div>
    </div>
  </div>
  `;

  const interval = setInterval(() => {
    const insertedElement = document.querySelector(".chloe_image_box");

    const messageGroup = document.querySelector("main .group");

    if (insertedElement || !messageGroup) {
      return;
    }

    const targetElement = document.querySelector("main");

    if (!targetElement) {
      return;
    }

    targetElement?.appendChild(imageBox);
  }, 1000);
}

// insertChloeImage();

/**
 * 1. 给我来点新闻
 * 2. 检查上一句的语法错误
 * 3. 我应该如何使用英文表达这一句
 */

let intervalRef: NodeJS.Timer;

/**
 * 向页面插入检查句子按钮
 */
function insertCheckSentenceButton() {
  const insertedElement = document.querySelector(".check_sentence_button");

  // 查找到我所输入的所有句子
  const allMyOwnSentences = document.querySelectorAll(
    selectors.MY_OWN_SENTENCE
  );

  // 给每一句右边添加一个按钮
  for (let item of allMyOwnSentences) {
    if (!item?.parentNode) {
      return;
    }

    // 新建一个元素
    const div = document.createElement("div");
    div.className = "check_sentence_button";

    // 将元素插入到当前句子下
    item.parentNode.insertBefore(div, item.nextSibling);

    ReactDOM.render(
      <React.StrictMode>
        <ShowMistakesButton />
      </React.StrictMode>,
      div
    );
  }
}

intervalRef = setInterval(insertCheckSentenceButton, 1000);
