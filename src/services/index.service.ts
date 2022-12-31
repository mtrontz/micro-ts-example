import { RequestHandler, send } from 'micro'
import { router, get } from 'microrouter'

export const IndexService: RequestHandler = (req, res) => {
  const data = {
    status: 'ok',
    data: {
      message: 'Welcome to Micro'
    }
  }

  send(res, 200, data)
};
