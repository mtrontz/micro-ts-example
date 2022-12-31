import { RequestHandler, send } from 'micro'
import { router, get } from 'microrouter'
import { IndexService, getHello, indexHello, HelloService } from './services';

module.exports = router(
  get('/', IndexService),
  get('/hello', HelloService["index"]),
  get('/hello/:toWho', HelloService["get"])
)
