package com.upantry7.upantrycore.http

import com.upantry7.upantrycore.http.model.HelloResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UpantryController {

    @GetMapping("/hello")
    fun hello() = HelloResponse()
}