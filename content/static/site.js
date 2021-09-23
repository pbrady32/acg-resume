// Call our API to track website hits
const userAction = async () => {
    const response = await fetch('http://api.pgbcloud.com/add');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
}