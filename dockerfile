#ベースイメージの指定
FROM node:latest
#環境変数の設定
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
#ローカルのappをコンテナのappへコピー
COPY ./app /app
#作業スペースの設定
WORKDIR /app
