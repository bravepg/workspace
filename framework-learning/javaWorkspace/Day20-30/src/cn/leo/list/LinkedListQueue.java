package cn.leo.list;

import java.util.LinkedList;

public class LinkedListQueue {
    private LinkedList link = new LinkedList();

    public void enqueue(Object obj) {
        link.addFirst(obj);
    }

    public Object dequeue() {
        return link.removeLast();
    }

    public boolean isEmpty() {
        return link.isEmpty();
    }

    public static void main(String[] args) {
        LinkedListQueue queue = new LinkedListQueue();

        queue.enqueue("123");
        queue.enqueue("456");

        while (!queue.isEmpty()) {
            System.out.println(queue.dequeue());
        }
    }
}
