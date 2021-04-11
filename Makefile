build-backend:
	docker-compose build backend

run-backend: migrate-backend
	docker-compose up --detach

migrate-backend:
	docker-compose run backend python manage.py makemigrations && \
	docker-compose run backend python manage.py migrate

stop-backend:
	docker-compose down

logs-backend:
	docker-compose logs -f backend

clean-backend:
	docker volume rm rooftop_db-volume
