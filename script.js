const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification Tool</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <h1>Email Verification Tool</h1>
    </header>
    <main>
        <section id="verification-section">
            <form id="verification-form">
                <input type="email" id="email-input" placeholder="Enter email address" required>
                <button type="submit">Verify</button>
            </form>
            <div id="verification-result">
                <!-- Verification result will be displayed here -->
            </div>
        </section>
    </main>
    <footer>
        <p>Email Verification Tool &copy; 2024</p>
    </footer>
    <script src="./demo.js"></script>
</body>
</html>
`)
   
    res.end()
})

server.listen(7090, ()=>{
    console.log("Server is running @ http://localhost:7090")
})
