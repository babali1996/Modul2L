package az.atlacademy.unittest.service;

import az.atlacademy.unittest.model.Test;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestService {


    public List<Test> getTestList() {
        List<Test> testList = new ArrayList<>();
        Test test = new Test(4, "Rahim", "Babali", "rahimbabali@gmail.com");
        Test test1 = new Test(1, "Rahim1", "Babali1", "rahimbabali1@gmail.com");
        Test test2= new Test(2, "Rahim2", "Babali2", "rahimbabali2@gmail.com");
        Test test3 = new Test(3, "Rahim3", "Babali3", "rahimbabali3@gmail.com");
        testList.add(test);
        testList.add(test1);
        testList.add(test2);
        testList.add(test3);

        return testList;
    }
}
