FROM node:lts

RUN mkdir /app

WORKDIR /app

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apt-get update

RUN apt-get install -y vim man locales tzdata

RUN locale-gen en_US.UTF-8

ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . /app

RUN npm i