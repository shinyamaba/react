/* eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceFlg, setFaceFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickOnOff = () => {
    setFaceFlg(!faceFlg);
  };

  //再レンダリングの際に処理の関心を分けるために使用する
  useEffect(() => {
    if (num % 3 === 0) {
      faceFlg || setFaceFlg(true);
    } else {
      faceFlg && setFaceFlg(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">Fine,Thx</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickOnOff}>on/off</button>
      <p>{num}</p>
      {faceFlg && <p>😃</p>}
    </>
  );
};

export default App;
