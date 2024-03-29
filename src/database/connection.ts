import mongoose from 'mongoose'

function connection (db: string): void {
  const connect = (): void => {
    mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
      return console.log(`Successfully connected to ${db}`)
    })
      .catch(error => {
        console.log('Error connecting to database: ', error)
        return process.exit(1)
      })
  }
  connect()

  mongoose.connection.on('disconnected', connect)
}

export default connection
