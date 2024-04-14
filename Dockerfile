# Use the official gradle image to create a build artifact.
# https://hub.docker.com/_/gradle
FROM gradle:8.7.0-jdk17-jammy as builder
ADD --chown=gradle:gradle  . /home/gradle/src
WORKDIR /home/gradle/src
RUN ./gradlew clean build --no-daemon

# Use the Official OpenJDK image for a lean production stage of our multi-stage build.
# https://hub.docker.com/_/openjdk
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM amazoncorretto:17
EXPOSE 8080
RUN mkdir /app
# Copy the jar to the production image from the builder stage.
COPY --from=builder /home/gradle/src/build/resources /app/resources
COPY --from=builder /home/gradle/src/build/libs /app/libs
RUN echo $(ls -1 /app/libs)

# Run the web service on container startup.
ENTRYPOINT [ "java", "-jar", "/app/libs/upantry-core.jar" ]
