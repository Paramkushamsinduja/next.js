// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// REST API - GET, POST, PUT, DELETE
// Request Object - from client to server
// Response Object - from server to client
// req - type, body, headers, query, params
// res - data, headers, status

// HTTP Status Code - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Database - Sturctured(SQL DB) and Non-structures (NoSQL)
// MongoDB
// mongoose
// https://www.mongodb.com/

//baseurl/api/hello
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


//baseurl/api/hello
//baseurl/api/abc
//baseurl/api/login



// function('/abc')
// function('/login')
// function('/hello')