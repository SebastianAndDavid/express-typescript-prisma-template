import { Request, Response, Router } from 'express';
import BookService from './BookService';

export default Router().post('/', async (req: Request, res: Response) => {
  try {
    const book = await BookService.createBook(req.body);
    res.json(book);
  } catch (error) {
    console.error(error);
  }
});
