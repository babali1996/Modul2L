package az.atlacademy.unittest.controller;

import az.atlacademy.unittest.model.Test;
import az.atlacademy.unittest.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {
    private final TestService testService;

    @GetMapping
    public ResponseEntity<List<Test>> getAllTest() {
        return ResponseEntity.ok(testService.getTestList());
    }
}
