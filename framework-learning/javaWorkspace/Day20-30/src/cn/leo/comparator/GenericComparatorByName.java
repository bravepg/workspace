package cn.leo.comparator;

import cn.leo.domain.StudentGeneric;

import java.util.Comparator;

public class GenericComparatorByName implements Comparator<StudentGeneric> {

    @Override
    public int compare(StudentGeneric s1, StudentGeneric s2) {
        int temp = s1.getName().compareTo(s2.getName()) ;

        return temp == 0 ? s1.getAge() - s2.getAge() : temp;
    }
}
