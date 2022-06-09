const SELECTOR_TWITCH = "twitch.tv";
const SELECTOR_REFERER = "?referrer=raid";

const LABEL = "Reload Stats ici";

const AUTO_HIDE_TIMING = 10 * 1000;
const SHOW_TIMING = 2 * 1000;

const insertMessage = () => {
  const url = document.URL;
  const newUrl = url.replace(SELECTOR_REFERER, "");

  const link = document.createElement("a");
  link.href = newUrl;
  link.textContent = LABEL;
  link.style.color = "#8D45FA";

  const linkClose = document.createElement("div");
  linkClose.textContent = "X";
  linkClose.style.color = "#EFEFF1";
  linkClose.style.cursor = "pointer";
  linkClose.style.margin = "0 2px 0 10px";

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "35px";
  container.style.top = "0px";
  container.style.opacity = "0";
  container.style.position = "absolute";
  container.style.border = "#363639 solid 1px";
  container.style.borderBottomColor = "transparent";
  container.style.borderRadius = "5px 5px 0 0";
  container.style.background = "#1F1F23";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "space-between";
  container.style.padding = "0 10px 2px 10px";
  container.style.transitionDuration = "300ms";

  let time = 0;

  const counter = document.createElement("span");
  counter.style.color = "#ADADB8";
  counter.style.opacity = "0.75";

  const rightContent = document.createElement("div");
  rightContent.style.display = "flex";
  rightContent.style.flexWrap = "nowrap";
  rightContent.append(counter, linkClose);

  const resetCounter = () => {
    time = 10;
    const timer = setInterval(() => {
      time -= 1;
      counter.innerText = time.toString() + "s";
    }, 1000);
    setTimeout(timer.unref, AUTO_HIDE_TIMING);
  };

  const show = () => {
    resetCounter();
    container.style.top = "-33px";
    container.style.opacity = "1";
  };
  const hide = () => {
    container.style.top = "0px";
    container.style.opacity = "0";
    setTimeout(() => {
      container.remove();
    }, 300);
  };

  container.append(link, rightContent);

  linkClose.onclick = () => {
    hide();
  };

  setTimeout(() => {
    const chatInput = document.querySelector(
      'textarea[data-a-target="chat-input"], div[data-a-target="chat-input"]'
    );
    chatInput?.insertAdjacentElement("beforebegin", container);

    setTimeout(show, 100);
    setTimeout(hide, AUTO_HIDE_TIMING);
  }, SHOW_TIMING);
};

const run = async () => {
  const url = document.URL;

  if (url.includes(SELECTOR_TWITCH) && url.includes(SELECTOR_REFERER)) {
    insertMessage();
  }
};

run();
