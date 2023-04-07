import styled from "styled-components";
import pageBg from "../../assets/page-bg-2.png";

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
  background-color: #748797;
  background-size: 380px 831px;
`;

const TodoTemplateNotice = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplateNotice;
