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

ENV NEQUI_BUCKET_NAME="nequi-s3-select-tmp-2"
ENV NEQUI_FILE_KEY="resource/FINACLE_NEQUICARTERA_20200508_VENCIDOS.csv"
ENV AWS_ACCESS_KEY_ID="AKIA4MRHVLIIW7W3CUPY"
ENV AWS_SECRET_ACCESS_KEY="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"
ENV AWS_DEFAULT_REGION="us-east-1"


# Expose port 8080
EXPOSE 8080

RUN npm run build

CMD npm run start