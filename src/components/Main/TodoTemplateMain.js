import styled from "styled-components";
import pageBg from "../../assets/page-bg.png";

const TodoTemplateBlock = styled.div`
  width: 380px;
  height: 831px;

  position: relative;
  border-radius: 16px;
  box-shadow: 4px 3px 15px #adacac;

  display: flex;
  flex-direction: column;
  margin: 80px auto 80px auto;
  overflow: hidden;

  background: url("${pageBg}");
  background-size: 380px 831px;
`;

const TodoTemplateMain = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplateMain;
