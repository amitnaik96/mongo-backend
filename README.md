## Build

![Build](https://github.com/amitnaik96/mongo-backend/blob/master/Build.png)

## DOcker commands

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

Run mongo-backend-server container
```bash
    docker run -d --name backend --network custom_network -p 3000:3000 mongo-backend 
```