//接口调试工具
var ws = require("nodejs-websocket");
var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        broadcast(str)
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        //console.log("异常关闭")
    });
}).listen(8888)
console.log("WebSocket建立完毕")

function broadcast(str) {
    server.connections.forEach(function (connection) {
        connection.sendText(str);
    })
}