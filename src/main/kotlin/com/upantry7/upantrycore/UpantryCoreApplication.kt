package com.upantry7.upantrycore

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ImportResource

@SpringBootApplication
@ImportResource("classpath*:application-context.xml")
class UpantryCoreApplication

fun main(args: Array<String>) {
	runApplication<UpantryCoreApplication>(*args) {
		setBannerMode(Banner.Mode.OFF)
	}
}
