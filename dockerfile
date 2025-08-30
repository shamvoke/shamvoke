FROM node:22
# Install Ruby + build tools
RUN apt-get update && \
    apt-get install -y ruby-full build-essential zlib1g-dev ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Install Bundler, Jekyll, Gulp globally
RUN gem install bundler

WORKDIR /app

RUN bundle config set path 'vendor/bundle'

RUN npm install -g gulp