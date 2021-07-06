#docker image build -t newts1 .
#docker run --network host -d newts1
FROM node:14

# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

ENV NEQUI_BUCKET_NAME="nequi-s3-select-tmp"
ENV NEQUI_FILE_KEY="resource/FINACLE_NEQUICARTERA_20200508_VENCIDOS.csv"

# Expose port 8080
EXPOSE 8080
RUN npm run build

CMD npm run start