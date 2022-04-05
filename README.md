demo:  https://condescending-engelbart-284e0c.netlify.app/

1. 개발목표
react.js, 유튜브 api를 활용한 반응형 spa웹사이트 구현하고 베포하기

2. 사용기술
- css (postcss) : 배경 및 텍스트 스타일링, 미디어쿼리를 이용하여 반응형 제작
- javascript : api제공을 위한 axios 네트워크 처리 (중요한 api정보 숨기기, 네트워크통신 유닛테스트만을 위한 클래스 따로생성)
- react.js :  검색과 검색결과 리스트 보여주기, 검색된 비디오선택 및 재생 
- postman : api 관리

3. 주요코드 리뷰
- css : postcss를 사용하여 프로젝트 규모가 클경우 각css마다 모듈화하여 간편한 코드작성, 여러 플러그인 사용가능 <br>
![20220331_175116](https://user-images.githubusercontent.com/72345833/161017102-54627baa-5205-4579-8ac4-5a0f8482737b.png)
![20220331_175247](https://user-images.githubusercontent.com/72345833/161017172-cf6f5b34-6930-4327-b6c8-498da85f0443.png)

- javascript : 
비동기통신이 가능한 axios사용을 위해서 라이브러리 import후 기본url과 파라미터 저장 
axios 라이브러리 자체에서 json변환해주기 때문에 따로 변수만들어서 변환하지 않아도 됨 <br>
async 사용해서 promise로 만들어줌 <br>
await 사용해서 검색결과 가져올때까지 기다려줌 <br>
비디오인 타입의 데이터 items를 map배열에 각각의 배열 아이템들의 id값을 새로운 id로 덮어 씌워줌 <br>

![20220331_183347](https://user-images.githubusercontent.com/72345833/161024869-69d90842-352e-4c3f-b3c6-73031834aaec.png)

![20220405_184340](https://user-images.githubusercontent.com/72345833/161726813-13b5528b-4759-4a0c-a4ac-d4094e5682c5.png)


- react.js : <br>
비디오 리스트 보여주기 기능 : <br>
youtube.js에서 원하는 결과로 가공된 결과를 {youtube} prop을 이용해 전달함<br>
유튜브 api로부터 비디오의 데이터 목록을 받아오는 위해 useState사용함 <br>
컴포넌트가 업데이트가 될때마다 호출되는 useEffect사용 배열을 이용하여 반복 호출되지 않도록 [yotube]값만 전달<br>


![161239371-07457880-c4ba-4e3a-97b2-cca4fdfab281](https://user-images.githubusercontent.com/72345833/161727782-74031304-04b4-4147-9391-1e260bcc0207.png)

![161240016--7c5c88dcaae7](https://user-images.githubusercontent.com/72345833/161729241-bd3cbd9b-8aa2-4122-a96a-e7e5e0126745.png)



유튜브 api에서 필요한 정보를 화면에 보여줄 videoItem.jsx 생성 <br>
videoItem.jsx를 나열해줄 videoList.jsx 생성 <br>

![20220401_183710](https://user-images.githubusercontent.com/72345833/161237933-ee7e5b1a-2015-4fd5-b3fd-7e8900187418.png) 
![20220401_181722](https://user-images.githubusercontent.com/72345833/161234578-a734b85e-81bc-45f9-a79e-1ce5dac09833.png) <br>

비디오 검색 기능 : <br>
클릭이나 엔터가 입력되었을때 input에 입력된 값을 알아오기 위해 useRef 함수사용 handleSearch 함수는 알아온 input값을 이용하여 이벤트가 발생되었을때의 정보를 {onSearch} prop을 통해 app.jsx에 전달함 <br>


![20220401_144839](https://user-images.githubusercontent.com/72345833/161204244-1a0f746a-e15d-462f-b135-221d88630987.png)
App.jsx
![dsa](https://user-images.githubusercontent.com/72345833/161729154-788a13a3-e31e-44a0-a4c0-6c6cbccb954a.png)











4. 개선사항
- 미리보기 기능추가 
- 디자인 추가
