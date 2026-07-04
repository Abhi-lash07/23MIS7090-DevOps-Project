# Use OpenJDK 21 runtime
FROM eclipse-temurin:21-jdk

# Set the working directory
WORKDIR /app

# Copy the JAR file built by Maven
COPY target/corporatecompany-0.0.1-SNAPSHOT.jar app.jar

# Expose Spring Boot port
EXPOSE 8086

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]