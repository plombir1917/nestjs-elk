# nestjs-elk

### How to run

Create service token for Kibana inside Elasticsearch container:

```bash
bin/elasticsearch-service-tokens create elastic/kibana default
```

Input token into .env and kibana.yml, then:

```bash
docker-compose build --parallel
docker-compose up -d
```

### Ports

- ELASTIC_PORT (default - 9200) - Elasticsearch
- KIBANA_PORT (default - 5601) - Kibana
