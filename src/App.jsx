import React from "react";
import Container from "./components/Container/Container.jsx";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <div class="one1 bgc-white padding-10px">
          <h2>
            <span className="color-red">기본</span>이란 무엇인가?
          </h2>
          <p>
            무엇이든지 제대로 하려면 기초부터 차근차근해야 한다. 지름길이란
            없다. 단기간에 잘하려고 잔재주를 익히면 임기응변으로 반짝일 수는
            있겠지만 모조품처럼 금방 그 빛을 잃게 된다. 빠른 길을 간다고 준비
            없이 서두르면 처음에는 남보다 빨리 가는 것처럼 보인다. 하지만 기본이
            없는 밑천은 금방 드러나게 되어 있다. 시작할 때 탄탄히 준비하는
            시간으로 좀 늦어질지 몰라도 시간이 흘러가면 기본이 되어있는 진가는
            반드시 드러나게 되어 있다. 기초부터 우직하게 가는 길이 결국 가장
            빠른 지름길이다.
          </p>
        </div>
        <div class="one2 padding-10px">
          <div>
            <h2>기본이 중요한 이유</h2>
          </div>
          <ul>
            잘하고 싶다면 기본이 답이다 빨리 가는 지름길은 기본을 탄탄히 하는
            길이다 기본이라는 말에는 많은 의미가 담겨있다. 사전적인 의미는
            사물이나 현상, 이론, 시설 따위를 이루는 바탕을 뜻하는데 근본과
            기초라는 단어와 궤를 같이한다. 무슨 일을 하면서 별 탈이 없이 잘
            진행되면 좋은 데, 뭔가가 어긋나서 진척이 더디게 되면 일단 멈추고
            오던 길을 되돌아보게 된다. 그 시점의 화두는 대개 기본이 되기 쉽다.
            우리가 자주 이야기하는 중요하지만 긴급하지 않은 그 무엇이 기본이
            아닐까 한다. 최근 삶에서 기본이 얼마나 중요한지를 되새기게 하는 몇
            가지 일들이 있었다. 최근 깨닫게 된 것은 기본이 제대로 돼있지 않으면
            <h3>나에게 필요한 기본</h3>
            <li>시간 약속 잘지키기</li>
            <li>주말 의미 없이 보내지 않기</li>
            <li>긍정적인 커뮤니케이션</li>
            <li>영양 챙기기</li>
            <li>해야할 일 미루지 않기</li>
          </ul>
        </div>
      </Container>
      <Container>
        <div class="two1 bgc-aquamarine padding-10px">
          Nest.JS, Next.js 를 위한 서버 클라이언트 분리 예행 연습
        </div>
        <div class="two2 bgc-aquamarine padding-10px">
          <div>리액트 컴포넌트 분리 연습</div>
          <div></div>
        </div>
        <div class="two3 bgc-aquamarine padding-10px">scss 연습</div>
      </Container>
    </div>
  );
}

export default App;
