
// export default function handler(req, res) {
//   const { id } = req.query
//   res.end(`Post: ${id}`)
// }

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

//  app.get('/p/:tagId', function(req, res) {
//   res.send("tagId is set to " + req.params.tagId);
// });

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
