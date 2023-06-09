import styled from "styled-components";
import { Link } from "react-router-dom";

const TodoFootBlock = styled.footer`
  width: 380px;
  height: 67px;
  background-color: #2a313b;
  border-radius: 0 0 15px 15px;
  border-top: solid 1px #242b35;
  display: flex;

  position: absolute;
  bottom: 0;

  justify-content: center;

  div {
    display: inline-block;
  }

  .iconAll {
    width: 262px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    margin-top: 21px;
  }

  .menu-icon {
    margin: 2px 99px 0 1px;
  }

  .noti-icon {
    margin: 2px 96px 0 0;
  }

  .setting-icon {
    margin-top: 1px;
  }

  .i-menu-blue-icon {
    font-size: 20px;
  }

  .i-notice-icon {
    font-size: 25px;
  }

  .i-setting-icon {
    font-size: 25px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const TodoFootMain = () => {
  return (
    <TodoFootBlock>
      <div className="iconAll">
        <div className="menu-icon">
          <StyledLink to={process.env.PUBLIC_URL + "/"}>
            <i className="i-menu-blue-icon" />
          </StyledLink>
        </div>
        <div className="noti-icon">
          <StyledLink to={process.env.PUBLIC_URL + "/notice"}>
            <i className="i-notice-icon" />
          </StyledLink>
        </div>
        <div className="setting-icon">
          <StyledLink to={process.env.PUBLIC_URL + "/setting"}>
            <i className="i-setting-icon" />
          </StyledLink>
        </div>
      </div>
    </TodoFootBlock>
  );
};

export default TodoFootMain;
