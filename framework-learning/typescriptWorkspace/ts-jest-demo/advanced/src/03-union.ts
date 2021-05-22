type ID = number | string;

function printId(id: ID) {
  console.log('id', id);
}

printId(1);

function handleRequest(url: string, method: 'GET' | 'POST') {

}
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);