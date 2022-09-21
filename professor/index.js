const STATE = {
  STAND: 0,
  START: 1,
  RESULT: 2,
  COIN: 3,
};

const coins = [4, 1, 2, 7, 4, 2, 3, 1, 20, 2, 6, 1, 3, 2, 1, 3];
const startBtn = document.getElementById("coin-btn");
const coinSelectorElem = document.getElementById("coin-selector");
const coinElem = document.getElementById("coin");
const coinSelectedElem = document.getElementById("coin-selected");
const comSelImgElemArr = [
  ...document.getElementById("computer-selector").children,
].slice(0, 3);

let coin = 1000;
let state = 0;
let comSel = 0;
let nowComSel = 0;
let playerSel = 0;
let imgAnim = setInterval(() => {
  comSelImgElemArr[nowComSel].classList.remove("on");
  nowComSel = (nowComSel + 1) % 3;
  comSelImgElemArr[nowComSel].classList.add("on");
}, 1000);

coinElem.innerHTML = coin;

startBtn.onclick = () => {
  if (state !== STATE.STAND) return;
  state = STATE.START;
  coin -= 100;
  coinElem.innerHTML = coin;
  coinSelectorElem.classList.add("rotate-start");
  clearInterval(imgAnim);
  imgAnim = setInterval(() => {
    comSelImgElemArr[nowComSel].classList.remove("on");
    nowComSel = (nowComSel + 1) % 3;
    comSelImgElemArr[nowComSel].classList.add("on");
  }, 300);
};

const setResult = () => {
  if (playerSel === comSel) {
    document.getElementsByClassName("draw")[0].children[0].classList.add("on");
  } else if (playerSel - comSel === 1 || playerSel - comSel === -2) {
    [...document.getElementsByClassName("win")].forEach((elem) => {
      elem.children[0].classList.add("on");
    });
  } else {
    document.getElementsByClassName("lose")[0].children[0].classList.add("on");
  }
};

const setComSel = (time = 0) => {
  if (time > 5 && nowComSel === comSel) {
    setResult();
    setTimeout(() => {
      if (playerSel - comSel === 1 || playerSel - comSel === -2) {
        state = STATE.COIN;
        selectCoin();
      } else {
        state = STATE.STAND;
        coinSelectorElem.classList.remove("rotate-start");
        [
          ...document
            .getElementsByClassName("result")[0]
            .getElementsByClassName("on"),
        ].forEach((elem) => {
          elem.classList.remove("on");
        });
        imgAnim = setInterval(() => {
          comSelImgElemArr[nowComSel].classList.remove("on");
          nowComSel = (nowComSel + 1) % 3;
          comSelImgElemArr[nowComSel].classList.add("on");
        }, 1000);
      }
    }, 3000);
    return;
  }
  setTimeout(() => {
    comSelImgElemArr[nowComSel].classList.remove("on");
    nowComSel = (nowComSel + 1) % 3;
    comSelImgElemArr[nowComSel].classList.add("on");
    setComSel(time + 1);
  }, time * 300);
};

const selItem = (num) => {
  if (state !== STATE.START) return;
  state = STATE.RESULT;
  playerSel = num;
  clearInterval(imgAnim);
  comSel = parseInt(Math.random() * 3);
  setComSel();
};

const selectCoin = () => {
  const tempCoinIdx = parseInt(Math.random() * coins.length);
  coinSelectorElem.classList.add("rotate-end");
  coinSelectedElem.innerText = coins[tempCoinIdx];

  // coinSelectorElem.onanimationend = () => {
  //   coinSelectorElem.classList.remove("rotate");
  //   coinSelectorElem.classList.remove("rotate-start");
  //   coinSelectorElem.classList.remove("rotate-end");
  //   coinSelectorElem.style.transform = `rotate(${
  //     360 * 6 - 22.5 * tempCoinIdx
  //   }deg)`;
  //   coinSelectorElem.classList.add("select");
  //   setTimeout(() => {
  //     coin += coins[tempCoinIdx] * 100;
  //     coinElem.innerHTML = coin;
  //     coinSelectedElem.classList.add("on");
  //   }, 5000);
  //   setTimeout(() => {
  //     state = STATE.STAND;
  //     coinSelectorElem.classList.add("rotate");
  //     coinSelectorElem.classList.remove("select");
  //     coinSelectedElem.classList.remove("on");
  //     coinSelectorElem.style.transform = "";
  //     [
  //       ...document
  //         .getElementsByClassName("result")[0]
  //         .getElementsByClassName("on"),
  //     ].forEach((elem) => {
  //       elem.classList.remove("on");
  //     });
  //   }, 10000);
  // };

  const tempFunc = () => {
    coinSelectorElem.classList.remove("rotate");
    coinSelectorElem.classList.remove("rotate-start");
    coinSelectorElem.classList.remove("rotate-end");
    coinSelectorElem.style.transform = `rotate(${
      360 * 6 - 22.5 * tempCoinIdx
    }deg)`;
    coinSelectorElem.classList.add("select");
    setTimeout(() => {
      coin += coins[tempCoinIdx] * 100;
      coinElem.innerHTML = coin;
      coinSelectedElem.classList.add("on");
    }, 5000);
    setTimeout(() => {
      state = STATE.STAND;
      coinSelectorElem.removeEventListener("animationend", tempFunc);
      coinSelectorElem.classList.add("rotate");
      coinSelectorElem.classList.remove("select");
      coinSelectedElem.classList.remove("on");
      coinSelectorElem.style.transform = "";
      [
        ...document
          .getElementsByClassName("result")[0]
          .getElementsByClassName("on"),
      ].forEach((elem) => {
        elem.classList.remove("on");
      });
      imgAnim = setInterval(() => {
        comSelImgElemArr[nowComSel].classList.remove("on");
        nowComSel = (nowComSel + 1) % 3;
        comSelImgElemArr[nowComSel].classList.add("on");
      }, 1000);
    }, 10000);
  };
  coinSelectorElem.addEventListener("animationend", tempFunc);
};

[...document.getElementById("selectors").children].forEach((elem, idx) => {
  [...elem.getElementsByClassName("click-btn")].forEach((child) => {
    child.onclick = () => {
      if (state !== STATE.START) return;
      selItem(idx);
    };
  });
});
