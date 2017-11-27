FROM nginx:latest

EXPOSE 80

RUN apt-get update && apt-get install -y curl gnupg apt-transport-https git 
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -y nodejs 
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - 
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

ADD . /eth-kyc-dapp/

RUN cd /eth-kyc-dapp && yarn install && yarn run build:prod && cp -R /eth-kyc-dapp/www/* /usr/share/nginx/html