# Specify python 3 as base image (pulled from online Docker registry)
FROM python:3

# Specify working directory (~)
WORKDIR /rooftop

# Print commands and their arguments as they are executed
RUN set -x

# Copy requirements file into container
COPY ./requirements.txt /rooftop/

# Install required dependencies
RUN pip install -r /rooftop/requirements.txt

# Copy entrypoint script into container
COPY ./entrypoint.sh  /rooftop/

# Enable execute permissions on entrypoint script and run it on container startup
CMD chmod +x /rooftop/entrypoint.sh && /rooftop/entrypoint.sh
