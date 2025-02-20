import { renderToPipeableStream } from 'react-dom/server'
import express from 'express'
import App from '../src/App.jsx'  // .jsxまで書かないとnpm startでエラーになる
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const port = 8080


// 静的ファイルの提供を追加
// app.use(express.static('dist'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.join(__dirname, '..');  

app.use('/dist', express.static(path.join(rootDir, 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.get('/', (_, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    // bootstrapScripts: ['../dist/assets/main.js'],  // この行不要か？main.js消しても機能するぞ... ⇒ いやmain.jsはnpm run buildがクライアントのビルドでnpm run build:serverがサーバーのビルドなのでクライアントで作られるやつなので要るかも
    bootstrapScripts: ['/assets/index.js'],  // Viteのビルド出力に合わせたパス
    onShellReady() {
      res.setHeader('content-type', 'text/html')
      pipe(res)
      res.write(`<script type="module" src="/dist/assets/main.js" async></script>`);
    },
    onShellError() {
      res.statusCode = 500
      res.send("<!doctype><p>Errorだよ</p>")
    },
    onError(e) {
      console.error('エラーが出たよ', e)
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
