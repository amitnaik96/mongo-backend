## Build



## Docker commands

Create volume
```bash
    docker volume create volume_database
```

Create network
```bash
    docker network create custom_network
```

Run mongo container
```bash
    docker run -d -v volume_database:/data/db --name mongoamit --network custom_network -p 27015:27017 mongo 
```

Run mongo-backend container (pull from DockerHub)
```bash
    docker run -d --name backend --network custom_network -p 3000:3000 darkxprime/mongo-backend 
```

##OR

Start services with docker compose (be in /mongo-backend folder)
```bash
    docker-compose up
```
