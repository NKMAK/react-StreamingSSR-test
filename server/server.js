import { renderToPipeableStream } from 'react-dom/server'
import express from 'express'
import App from '../src/App.jsx'  // .jsxまで書かないとnpm startでエラーになる

const app = express()
const port = 8080

// 静的ファイルの提供を追加
app.use(express.static('dist'))

app.get('/', (_, res) => {
  // res.send('hello world')
  const { pipe } = renderToPipeableStream(<App />, {
    // bootstrapScripts: ['../dist/assets/main.js'],  // この行不要か？main.js消しても機能するぞ... ⇒ いやmain.jsはnpm run buildがクライアントのビルドでnpm run build:serverがサーバーのビルドなのでクライアントで作られるやつなので要るかも
    bootstrapScripts: ['/assets/index.js'],  // Viteのビルド出力に合わせたパス
    onShellReady() {
      res.setHeader('content-type', 'text/html')
      pipe(res)
    },
    onShellError() {  // 一応書いとく
      res.statusCode = 500
      res.send("<!doctype><p>Errorだよ</p>")
    },
    onError(e) {  // 一応書いとく
      console.error('エラーが出たよ', e)
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
