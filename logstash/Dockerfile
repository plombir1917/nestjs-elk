ARG ELK_VERSION


# https://github.com/elastic/logstash-docker
FROM docker.io/logstash:${ELK_VERSION}
COPY postgresql-42.7.4.jar /usr/share/logstash/


# Add your logstash plugins setup here
# Example: RUN logstash-plugin install logstash-filter-json
RUN logstash-plugin install logstash-filter-json