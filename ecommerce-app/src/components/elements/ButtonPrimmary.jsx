import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="button2">{text}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button2 {
  width: 100%;
  height: 46px;
  line-height: 1.2;
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #52525B;
  padding: 0.7em 1.8em;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 6px;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #43A047;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #43A047;
}

.button2:hover:before {
  top: -35%;
  background-color: #43A047;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #43A047;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

`;

export default Button;
