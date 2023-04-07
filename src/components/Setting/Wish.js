import styled from "styled-components";
import smileImg from "../../assets/setting/smile-icon.svg";

const WishBox = styled.div`
  margin: 19px 0 0 66px;

  .wish-txt {
    color: #fff;
    opacity: 50%;
    margin: -1px 0 0 5px;
    position: absolute;
    font-weight: 400;
    cursor: pointer;
  }
`;

const Wish = ({ setAppearImg, setImgOpen, imgOpen }) => {
  const onAppearWish = () => {
    setAppearImg("appearWish");
    setImgOpen(!imgOpen);
  };

  return (
    <>
      <WishBox>
        <img src={smileImg} alt="smile" />
        <span className="wish-txt" onClick={onAppearWish}>
          Make a wish
        </span>
      </WishBox>
    </>
  );
};

export default Wish;
