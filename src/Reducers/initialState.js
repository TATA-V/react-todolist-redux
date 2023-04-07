export const initialState = {
  todos: [
    {
      id: 1,
      text: "간지나게 숨쉬기",
      done: true,
    },
    {
      id: 2,
      text: "서진이네 본방사수☆☆☆︎",
      done: false,
    },
    {
      id: 3,
      text: "강아지 30분 산책 시키기",
      done: false,
    },
  ],
  doing: [],
  completed: [],
  filter: "ALL",
  // connect로 all, doing, completd 를 보여주는 방법도 있으나 일단 보류..
  // connect?? => (컴포넌트는 오직 props를 받고 화면에 표시하는 기능만을 수행)
};
