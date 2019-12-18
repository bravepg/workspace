package day22.cn.leo.housework;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws IOException {
        File file = new File("src");
        List<File> fileList = new ArrayList<>();
        FilterBySuffix filterBySuffix = new FilterBySuffix(".java");
        getFiles(file, fileList, filterBySuffix);

        File destFile = new File("javaList.md");

        writeFileName(fileList, destFile);
    }

    private static class FilterBySuffix implements FileFilter {
        private String suffix;
        public FilterBySuffix(String suffix) {
            this.suffix = suffix;
        }
        @Override
        public boolean accept(File file) {
            return file.getName().endsWith(this.suffix);
        }
    }

    private static void getFiles(File dir, List<File> fileList, FilterBySuffix filterBySuffix) {
        File[] files = dir.listFiles();

        for (File file: files) {
            if (file.isDirectory()) {
                getFiles(file, fileList, filterBySuffix);
            } else {
                if (filterBySuffix.accept(file)) {
                    fileList.add(file);
                }
            }

        }
    }

    private static void writeFileName(List<File> fileList, File destFile) throws IOException {
        BufferedWriter bufferedWriter = null;
        try {
            bufferedWriter = new BufferedWriter(new FileWriter(destFile));
            for (File file: fileList) {
                bufferedWriter.write(file.getAbsolutePath());
                bufferedWriter.newLine();
                bufferedWriter.flush();
            }
        } finally {
            try {
                bufferedWriter.close();
            } catch (IOException e) {
                throw new RuntimeException("关闭失败");
            }
        }
    }
}
