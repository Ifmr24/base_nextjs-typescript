const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  
  server.get('*', (req:any, res:any) => {
    return handle(req, res)
  })
  
  /*
  server.get("/pagina/:id", (req:any, res:any) => {
    return app.render(req, res, "/pagina", { id: req.params.id });
  });
  */




  server.listen(process.env.PORT || 3000, (err:any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})