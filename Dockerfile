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
EXPOSE 8080 9010
RUN mkdir /home/app
# Copy the jar to the production image from the builder stage.
COPY --from=builder /home/gradle/src/build/libs/upantry-core-0.0.1-SNAPSHOT.jar /home/app/upantry-be.jar
COPY --from=builder /home/gradle/src/build/resources /home/app/resources
COPY --from=builder /home/gradle/src/build/libs/ /home/app/libs

# Run the web service on container startup.
ENTRYPOINT [ "java”, “-Dcom.sun.management.jmxremote=true”, \
    “-Dcom.sun.management.jmxremote.port=9010”, \
    “-Dcom.sun.management.jmxremote.authenticate=false”, \
    “-Dcom.sun.management.jmxremote.ssl=false”, \
    “-Djava.rmi.server.hostname=127.0.0.1", \
    "-Dcom.sun.management.jmxremote.rmi.port=9010”, \
    “-Dcom.sun.management.jmxremote.local.only=false”, \
    “-jar”, “/home/app/upantry-be.jar" ]

