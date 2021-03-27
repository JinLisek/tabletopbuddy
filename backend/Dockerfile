FROM python:3-slim-buster

RUN apt-get update && apt-get install sudo git -y
RUN pip install --upgrade pip
RUN adduser --disabled-password worker

USER worker

ENV BACKEND_PATH=/home/worker/app/backend

RUN mkdir -p $BACKEND_PATH
WORKDIR $BACKEND_PATH

COPY --chown=worker ["requirements.txt", "./"]

RUN pip install --user -r requirements.txt

ENV PATH="${BACKEND_PATH}/.local/bin:${PATH}"

EXPOSE 8000

COPY --chown=worker . .


CMD ["python", "manage.py", "runserver", "[::]:8000"]
