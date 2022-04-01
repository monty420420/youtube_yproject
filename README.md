demo:  https://condescending-engelbart-284e0c.netlify.app/

1. 개발목표
react.js, 유튜브 api를 활용한 반응형 spa웹사이트 구현하고 베포하기

2. 사용기술
- css (postcss) : 배경 및 텍스트 스타일링, 미디어쿼리를 이용하여 반응형 제작
- javascript : api제공을 위한 axios 네트워크 처리 (중요한 api정보 숨기기, 네트워크통신 유닛테스트만을 위한 클래스 따로생성)
- react.js :  검색과 검색결과 리스트 보여주기, 검색된 비디오선택 및 재생 
- postman : api 관리

3. 주요특징
- css : postcss를 사용하여 프로젝트 규모가 클경우 각css마다 모듈화하여 간편한 코드작성, 여러 플러그인 사용가능 <br>
![20220331_175116](https://user-images.githubusercontent.com/72345833/161017102-54627baa-5205-4579-8ac4-5a0f8482737b.png)
![20220331_175247](https://user-images.githubusercontent.com/72345833/161017172-cf6f5b34-6930-4327-b6c8-498da85f0443.png)

- react.js : dd

![20220401_144839](https://user-images.githubusercontent.com/72345833/161204244-1a0f746a-e15d-462f-b135-221d88630987.png)


![20220401_150044](https://user-images.githubusercontent.com/72345833/161204257-bedffbce-1f49-4054-a17b-99f6ac1c1760.png)


- javascript : 
비동기통신이 가능한 axios사용을 위해서 라이브러리 import후 기본url과 파라미터 저장 
axios 라이브러리 자체에서 json변환해주기 때문에 데이터안의 items들만 리턴하여 인기있는 25개 아이템 불러옴
비디오인 타입의 데이터 items를 map배열에 각각의 배열 아이템들의 id값을 새로운 id로 덮어 씌워줌 <br>

![20220331_183347](https://user-images.githubusercontent.com/72345833/161024869-69d90842-352e-4c3f-b3c6-73031834aaec.png)





4. 개선사항
- 미리보기 기능추가 
- 디자인 추가
