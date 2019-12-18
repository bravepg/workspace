package day23.cn.leo.buffer;

import java.io.IOException;
import java.io.Reader;

public class MyLineNumberReader extends MyBufferReader {
    private int lineNumber;

    public MyLineNumberReader(Reader reader) {
        super(reader);
    }


    public int getLineNumber() {
        return lineNumber;
    }

    public void setLineNumber(int lineNumber) {
        this.lineNumber = lineNumber;
    }


    @Override
    public String myReadLine() throws IOException {
        lineNumber++;
        return super.myReadLine();
    }
}
