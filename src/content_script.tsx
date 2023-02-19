import "./custom_style.css";

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
