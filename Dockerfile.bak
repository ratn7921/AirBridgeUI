# Use a base Java image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy jar file from the local target folder to container
COPY target/*.jar app.jar

# Run the application
CMD ["java", "-jar", "app.jar"]
