// 必要なHTML要素の取得
const wrap = document.querySelector("#wrap");
const start = document.querySelector("#start");

// 複数のテキストを格納する配列
const textLists = [
  "Hello World",
  "This is my App",
  "How are you?",
  "Today is sunny",
  "I love JavaScript!",
  "Good morning",
  "I am Japanese",
  "Let it be",
  "Samurai",
  "Typing Game",
  "Information Technology",
  "I want to be a programmer",
  "What day is today?",
  "I want to build a web app",
  "Nice to meet you",
  "Chrome Firefox Edge Safari",
  "machine learning",
  "Brendan Eich",
  "John Resig",
  "React Vue Angular",
  "Netscape Communications",
  "undefined null NaN",
  "Thank you very much",
  "Google Apple Facebook Amazon",
  "ECMAScript",
  "console.log",
  "for while if switch",
  "var let const",
  "Windows Mac Linux iOS Android",
  "programming",
];

// ランダムな敵巣を画面に表示する
const createText = () => {
  const p = document.querySelector("#text");
  // 配列のインデックス数からランダムな数値を生成する。
  const rnd = Math.floor(Math.random() * textLists.length);
  // p要素の中身を空にする
  p.textContent = "";
  //  テキスとを一文字ずつに分割してp要素に挿入する
  textLists[rnd].split("").map((value) => {
    // span要素を生成する
    const span = document.createElement("span");

    // span要素に配列の一文字ずつをあてはめる
    span.textContent = value;
    // span要素をp要素に追加していく
    p.appendChild(span);
  });
};

// キーイベント＆入力判定処理
const keyDown = (e) => {};
// ランク判定とメッセージ処理
const rankCheck = (rank) => {};
// ゲームの終了処理
const gameOver = (id) => {};
// タイマー処理
const timer = () => {};
// ゲームスタート時の処理
start.addEventListener("click", () => {
  createText();
}); // ゲームスタート時の処理
