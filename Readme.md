# RNCarmeleon
* React-Native로 만드는 Carmeleon

# android studio 설정
```
vi ~/.zshrc/ (or ~/.bash_profile)
# 다음 내용 추가
alias androidstudio="open -a /Applications/Android\ Studio.app"
#저장 후 닫기
source ~/.zshrc
```

# 실행방법
1. yarn install
2. npm run pod:install (ios만)
3. 안드로이드스튜디오 실행, AVD 열기(안드로이드만)
4. npm run android/ios

# 기술스택
1. React-Native v0.66.4
2. Typescript v4.4.4

# dependency
1. node v16.13.1
2. npm 8.1.2
3. React v 17.x

# 안드로이드 스튜디오 실행
- 윈도우
```
start "" "C:\Program Files\Android\Android Studio\bin\studio64.exe" "./android/"
```
- 맥
```
npm run open:android
```

# 네이버맵 SDK 키 설정
### android
1. AndroidManifest.xml 파일 열기
2. ```
      <meta-data
        android:name="com.naver.maps.map.CLIENT_ID"
        android:value="[client ID]" /> <-- 클라이언트 아이디 넣기
   ```
### ios
1. info.plist 파일 열기
2. ```
	<key>NMFClientId</key>
	<string>[client ID]</string> <-- 클라이언트 아이디 넣기
   ```

#작업방식
1. 기본 작업은 모두 develop 브랜치 기준으로 각자 브랜치를 따서 개발
2. 개발 후 커밋, 푸시 한 다음 PR을 해서 상호간 코드 공유
3. 코드 공유 완료되면 develop 브랜치에 merge
4. merge는 기본적으로 스쿼시머지, 다른사람과 함께 작업한 부분이 있으면 병합머지
