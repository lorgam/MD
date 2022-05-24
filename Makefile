start: up
up:
	docker-compose up -d --remove-orphans

stop:
	docker-compose stop

down:
	docker-compose down -v

install:
	docker-compose run --rm node npm install

build:
	docker-compose run --rm node npm run build
