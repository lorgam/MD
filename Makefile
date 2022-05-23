start: up
up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down -v

install:
	docker-compose run node npm install

build:
	docker-compose run node npm run build
