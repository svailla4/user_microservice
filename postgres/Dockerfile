FROM postgres

ENV POSTGRES_USER admin
ENV POSTGRES_DB user_database
ENV POSTGRES_PASSWORD password

COPY ./db-init-scripts/ /docker-entrypoint-initdb.d/

EXPOSE 5432