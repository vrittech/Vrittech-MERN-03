const http = require('http');
const fs = require('fs');
const filePromises = require('fs/promises');

//asyncronous //syncronous

// const fileData = fs.readFileSync('./file.txt', 'utf-8');
// fs.writeFileSync('./file1.txt', fileData);

// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//    if (error) {
//       console.log(error);

//    } else {
//       console.log('second')
//       console.log(data)
//    }
// })

// filePromises.readFile('./file1.txt', 'utf-8').then((resp) => {
//    console.log(resp, 'resp')
// }).catch((err) => {
//    console.log(err)
// })

// async function readFileFromFolder() {
//    try {
//       const resp = await filePromises.readFile('./file1.txt', 'utf-8');
//       console.log('await', resp);
//    } catch (error) {
//       console.log(error)
//    }
// }

// readFileFromFolder();

// console.log('third')

// stream
// readable Stream
// writable stream
// duplex stream
// Transform stream

// const readableStream = fs.createReadStream('./file.txt', {
//    encoding: 'utf-8',
//    highWaterMark: 64
// })

// const writableStream = fs.createWriteStream('./file1.txt')


// readableStream.on("data", (chunk) => {
//    writableStream.write(chunk)
// })

// readableStream.on('end', () => {
//    console.log('writing file complete')
// })
const PORT = 3001;
const data = [];


const app = http.createServer((req, res) => {

   if (req.method === 'POST') {
      if (req.url === '/api/v1/register') {
         let body = '';
         req.on('data', (chunk) => {
            body += chunk.toString();
         })
         req.on('end', () => {
            const { email, password } = JSON.parse(body);
            if (!email || !password) {
               res.statusCode = 400;
               res.end(JSON.stringify({ status: false, error: 'Email or password not found' }))
               return;
            }
            const existingUser = data.find((val) => val.email === email);
            if (existingUser) {
               res.statusCode = 400;
               res.end(JSON.stringify({ status: false, error: 'Username already registered' }))
               return;
            }

            const newUser = { email, password };
            data.push(newUser);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(
               { status: true, error: 'User registered successfully', data }))

         })
      } else if (req.url === '/api/v1/login') {
         let body = '';
         req.on('data', (chunk) => {
            body += chunk.toString();
         })
         req.on('end', () => {
            const { email, password } = JSON.parse(body);
            if (!email || !password) {
               res.statusCode = 400;
               res.end(JSON.stringify({ status: false, error: 'Email or password not found' }))
               return;
            }
            const existingUser = data.find((val) => val.email === email && val.password === password);
            if (existingUser) {
               res.statusCode = 200;
               res.end(JSON.stringify({ status: true, message: 'User logged in successfully' }))
            } else {
               res.statusCode = 401;
               res.end(JSON.stringify({ status: false, error: 'Invalid username or password' }))

            }
         })
      } else {
         res.statusCode = 404;
         res.end(JSON.stringify({ error: 'URL not found' }))
      }
   }
})

app.listen(PORT, () => {
   console.log('Server is running at port ', PORT)
})



