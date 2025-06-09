import styled from "styled-components";

export const CodeSimulation = () => {
  return (
    <Code>
      <div className="code-line">
        <div className="code-block accentBg" style={{ width: "80px" }}></div>
        <div className="code-block blue" style={{ width: "30px" }}></div>
        <div className="code-block yellow" style={{ width: "30px" }}></div>
        <div className="code-block purple" style={{ width: "10px" }}></div>
        <div className="code-block purple" style={{ width: "10px" }}></div>
      </div>

      <div className="code-line">
        <div className="code-block blue" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "50px" }}></div>
        <div className="code-block yellow" style={{ width: "60px" }}></div>
        <div className="code-block blue" style={{ width: "20px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block yellow" style={{ width: "50px" }}></div>
        <div className="code-block purple" style={{ width: "30px" }}></div>
        <div className="code-block blue" style={{ width: "20px" }}></div>
        <div className="code-block blue" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "20px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block blue" style={{ width: "40px" }}></div>
        <div className="code-block yellow" style={{ width: "55px" }}></div>
        <div className="code-block purple" style={{ width: "25px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block purple" style={{ width: "50px" }}></div>
        <div className="code-block blue" style={{ width: "40px" }}></div>
        <div className="code-block yellow" style={{ width: "20px" }}></div>
        <div className="code-block yellow" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "10px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block purple" style={{ width: "20px" }}></div>
        <div className="code-block blue" style={{ width: "40px" }}></div>
        <div className="code-block yellow" style={{ width: "30px" }}></div>
        <div className="code-block purple" style={{ width: "30px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block yellow" style={{ width: "60px" }}></div>
        <div className="code-block purple" style={{ width: "30px" }}></div>
        <div className="code-block blue" style={{ width: "40px" }}></div>
        <div className="code-block purple" style={{ width: "20px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block blue" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "50px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
        <div className="code-block yellow" style={{ width: "20px" }}></div>
      </div>

      <div className="code-line">
        <div className="code-block blue" style={{ width: "45px" }}></div>
        <div className="code-block yellow" style={{ width: "55px" }}></div>
        <div className="code-block purple" style={{ width: "25px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block yellow" style={{ width: "20px" }}></div>
        <div className="code-block yellow" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "30px" }}></div>
        <div className="code-block blue" style={{ width: "40px" }}></div>
        <div className="code-block purple" style={{ width: "30px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block purple" style={{ width: "40px" }}></div>
        <div className="code-block blue" style={{ width: "70px" }}></div>
        <div className="code-block yellow" style={{ width: "30px" }}></div>
        <div className="code-block purple" style={{ width: "20px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block purple" style={{ width: "20px" }}></div>
        <div className="code-block blue" style={{ width: "40px" }}></div>
        <div className="code-block yellow" style={{ width: "20px" }}></div>
        <div className="code-block yellow" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "10px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block purple" style={{ width: "20px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
        <div className="code-block yellow" style={{ width: "30px" }}></div>
        <div className="code-block purple" style={{ width: "10px" }}></div>
        <div className="code-block purple" style={{ width: "20px" }}></div>
      </div>
      <div className="code-line">
        <div className="code-block blue" style={{ width: "20px" }}></div>
        <div className="code-block purple" style={{ width: "50px" }}></div>
        <div className="code-block yellow" style={{ width: "10px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
        <div className="code-block blue" style={{ width: "10px" }}></div>
      </div>
    </Code>
  );
};

const Code = styled.div`
  position: absolute;
  width: 230px;
  height: 230px;
  background: #608ecfb0;
  border-radius: 5px;
  overflow: hidden;
  z-index: 8;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;

  opacity: 0; /* скрыт */
  visibility: hidden; /* не кликабельный и не фокусируемый */
  transform: translateX(-200%) rotateY(-20deg) translateY(-10px) rotateX(10deg);

  animation: slideInFromLeft 0.8s ease-out forwards;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #b488ff, #00f59f, #b488ff);
    /* background: linear-gradient(90deg, #a35fff, #00ff9f, #a35fff); */

    background-size: 200% auto;
    animation: gradientFlow 5s linear infinite;
    z-index: -1;
    opacity: 0.6;
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      visibility: visible; /* становится видимым с начала анимации */
      transform: translateX(-200%) rotateY(-20deg) translateY(-10px)
        rotateX(10deg);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-80%) rotateY(-20deg) translateY(-10px)
        rotateX(10deg);
    }
  }

  /* остальной твой CSS */
  .code-line {
    display: flex;
    gap: 7px;
    align-items: center;
    height: 3px;
    animation: blink 2s infinite;
    padding-left: 20px;

    &:nth-child(1),
    &:nth-child(7) {
      padding-left: 0;
    }
  }

  .code-block {
    height: 100%;
    border-radius: 2px;
    flex-shrink: 0;

    &.purple {
      background: #b488ff;
    }
    &.blue {
      background: #00f5a0;
    }
    &.yellow {
      background: #ffd700;
    }
    &.accentBg {
      background: #dc05f0;
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
`;
