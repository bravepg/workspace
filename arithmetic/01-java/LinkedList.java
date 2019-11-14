class Node<T> {
    private T data;
    private int cur;
    public Node() {

    }
    public Node(int cur) {
        this.cur = cur;
    }
    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }
    public int getCur() {
        return cur;
    }
    public void setCur(int cur) {
        this.cur = cur;
    }
}

public class LinkedList<T> {
    private int maxSize = Integer.MAX_VALUE;
    private int length = 0;
    private Node<T>[] nodeArray = null;

    @SuppressWarnings({"unchecked"})
    public LinkedList() {
        nodeArray = (Node[])new Node[maxSize];
        init();
    }
    @SuppressWarnings({"unchecked"})
    public LinkedList(int maxSize) {
        this.maxSize = maxSize;
        nodeArray = (Node<T>[])new Node[maxSize];
        init();
    }
    private void init() {
        for (int i = 0; i < maxSize; i++) {
            Node<T> node = new Node<T>(i + 1);
            nodeArray[i] = node;
        }
        nodeArray[maxSize - 1].setCur(0);
    }
    public void add(T data)  {
        Node<T> node  = nodeArray[maxSize - 1];
        int cur = node.getCur();
        int index = 1;
        if (cur == 0) {

        } else {
            while (node.getCur() > 0) {
                node = nodeArray[node.getCur()];
            }
            index = nodeArray[0].getCur();
        }
        System.out.println("index" + index);
        // 获取要设置数据的节点
        Node<T> currentNode = nodeArray[index];
        // 上个节点下个游标为设置数据的节点的索引
        node.setCur(index);
        // 备用链表的起始节点的游标改为设置数据节点的游标
        nodeArray[0].setCur(currentNode.getCur());
        // 设置游标为0表示链表结束
        currentNode.setCur(0);
        currentNode.setData(data);

        ++length;
    }
    public void insert(int i, T data) {
        Node<T> node = nodeArray[maxSize - 1];
        int j = 0;
        while (node.getCur() > 0 && i> j) {
            node = nodeArray[node.getCur()];
            j++;
        }
        //获取要插入数据的位置
        int cur = nodeArray[0].getCur();

        Node<T> n = nodeArray[cur];
        //设置备用列表指针
        nodeArray[0].setCur(n.getCur());

        n.setCur(node.getCur());
        n.setData(data);

        node.setCur(cur);


        ++length;
    }
    public void delete(int i) {
        Node<T> node = nodeArray[maxSize - 1];
        int j = 0;
        while (node.getCur() > 0 && i> j) {
            node = nodeArray[node.getCur()];
            j++;
        }
        int cur = node.getCur();
        Node<T> n = nodeArray[cur];

        node.setCur(n.getCur());

        n.setCur(nodeArray[0].getCur());
        nodeArray[0].setCur(cur);

        --j;

    }
    public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<Integer>(20);
        linkedList.add(3);
        linkedList.add(5);
    }
}
