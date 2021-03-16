import {MongoClient} from 'mongodb'

const handler = async (req, res) => {
  // accept POST requests only
  if (req.method === 'POST') {
    const {email, name, message} = req.body
    if (!email || !email.includes('@') || !name || !message) {
      res.status(422).json({message: 'Invalid input.'})
      return
    }
    const newMsgObj = {email, name, message}
    
    const connStr = `mongodb+srv://${process.env.atlas_usr}:${process.env.atlas_pwd}@${process.env.atlas_url}/${process.env.atlas_db}?authSource=admin`

    let client
    try {
      // connect to Docker container (see README.md)
      client = await MongoClient.connect(connStr, {useUnifiedTopology: true})
    } catch(err) {
      res.status(500).json({message: 'Database connection failed.'})
      return
    }
  
    try {
      const result = await client.db().collection('messages').insertOne(newMsgObj)
      newMsgObj.id = result.insertedId
    } catch(err) {
      client.close()
      res.status(500).json({message: 'Database insert failed.'})
      return
    }
  
    client.close()
    res.status(201).json({message: 'Successfully sent message.', data: newMsgObj})
  }
}

export default handler
