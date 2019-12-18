package day21.cn.leo.fliter;

import java.io.File;
import java.io.FilenameFilter;

public class FilterBySuffix implements FilenameFilter {

    private String filename;

    public FilterBySuffix(String filename) {
        this.filename = filename;
    }

    @Override
    public boolean accept(File dir, String name) {
        return name.endsWith(this.filename);
    }
}
