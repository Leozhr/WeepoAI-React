import { fastify } from 'fastify'
import { createTranscription } from './routes/create-transcription'
import { getPrompts } from './routes/get-prompts'
import { uploadVideo } from './routes/upload-video'

const app = fastify()

app.register(getPrompts)
app.register(uploadVideo)
app.register(createTranscription)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running on port 3333')
  })
