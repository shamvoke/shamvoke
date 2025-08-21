FROM node:18
# Install Ruby + build tools
RUN apt-get update && \
    apt-get install -y ruby-full build-essential zlib1g-dev ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Install Bundler, Jekyll, Gulp globally
RUN gem install bundler jekyll && \
    npm install -g gulp

WORKDIR /app
