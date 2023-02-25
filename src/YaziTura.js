import React, { useState } from "react";
import Yazi from "./img/y.png";
import Tura from "./img/t.png";

const YaziTura = () => {
  const [yaziTura, setYaziTura] = useState();
  const [yaziTuraImg, setYaziTuraImg] = useState();
  const [showImg, setShowImg] = useState(false);
  var [yazi, setYazi] = useState(0);
  var [tura, setTura] = useState(0);
  var [toplam, setToplam] = useState(0);

  const handleClick = () => {
    const rndNumber = Math.floor(Math.random() * 2);
    if (rndNumber === 0) {
      setYaziTura("Yazı");
      setYaziTuraImg(Yazi);
      setYazi(++yazi);
    } else if (rndNumber === 1) {
      setYaziTura("Tura");
      setYaziTuraImg(Tura);
      setTura(++tura);
    }

    setShowImg(true);
    setToplam(++toplam);
  };

  return (
    <div className="card">
      {showImg ? (
        <>
          <div className="card-image">
            <img  alt="yazi-tura" src={yaziTuraImg} />
          </div>
          <div className="card-result">{yaziTura}</div>
          <div className="card-sum">
            <div>{`Yazı Sayısı: ${yazi}`}</div>
            <div>{`Toplam Atış: ${toplam}`}</div>
            <div>{`Tura Sayısı: ${tura}`}</div>
          </div>
        </>
      ) : null}
      <div className="card-footer">
        <button onClick={handleClick}>Parayı at</button>
      </div>
    </div>
  );
};

export default YaziTura;
