# Holuba Frontend

## 개발 환경 설정

### yarn 설치
* Windows
  * yarn 홈페이지에서 installer 다운로드 후 설치
  * 링크: https://classic.yarnpkg.com/en/docs/install#windows-stable
* Linux
  ```bash
  $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  $ sudo apt update
  $ sudo apt install yarn
  ```

### Dependencies 설치
```bash
$ yarn install
```

## 실행 및 사용
1. 개발 환경에서 실행을 테스트하고자 하는 경우 yarn start 사용
    ```bash
    $ yarn start
    ```
    명령어 입력 후 [http://localhost:3000](http://localhost:3000)로 접속
2. 개별적으로 빌드를 원하는 경우 yarn build 사용
    ```bash
    $ yarn build
    ```
3. 프로젝트 실행은 Root Directory의 Docker Compose를 참조