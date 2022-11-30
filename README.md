# 나와 어울리는 스타일 찾기 APP
- 2022 SWE2021-41 오픈소스 소프트웨어 실습 최종 프로젝트
- 패션 선택에 어려움을 느끼는 소비자를 위하여 딥러닝을 통한 얼굴상 감별 및 그에 따른 스타일 추천
- 앱 이용 후 별점으로 후기 작성 및 확인 가능  

![example_3](https://user-images.githubusercontent.com/64960264/204803700-81072415-f1d3-453a-8782-e93f7dda79b8.PNG)


# 페이지 구성 파일 별 기능 설명
1. home.html(시작 페이지)

2. gender.html(성별 선택 페이지)

3. upload.html(사진 업로드 페이지)

4. result.html(닮은 꼴 동물상 페이지)

5. evaluation.html(동물상 별 스타일 추천 페이지)

6. recomended.html(별점 페이지)

7. res_reco.html(별점 후기 확인 페이지)

8. script.js(java scripts)

9. style.css(css file)

10. /photo(사용한 사진 폴더)

# Output Example

- result.html  

![example_1](https://user-images.githubusercontent.com/64960264/204799649-6c515d4a-254d-44c3-a006-2eeaae750464.PNG)


- recommend.html  

![example_2](https://user-images.githubusercontent.com/64960264/204799689-745a5c1f-88e7-4f2c-bbe5-d23943a2d51f.PNG)


# Related Projects
딥러닝 모델은 google에서 제시한 [teachable machine](https://teachablemachine.withgoogle.com/)을 이용했으며 [github link](https://github.com/googlecreativelab/teachablemachine-community)를 통해 코드를 확인할 수 있습니다.  
파일 업로드 버튼의 html과 js 코드는 [codepen link](https://codepen.io/aaronvanston/pen/yNYOXR)을 이용했으며 저작권 관련은 upload.html 하단에 명시되어 있습니다.

# Usage
페이지 하단의 go 버튼을 따라서 진행합니다.  
파일을 업로드 하는 페이지에서 이미지 업로드 후 모델 load 및 학습이 진행되어 시간이 소요되기 때문에 go 버튼이 나올 때까지 기다려야 합니다.
