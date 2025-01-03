import { Router } from 'express';

import {
  getContactsController,
  getContactsByIdController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));

contactsRouter.get('/contacts/:id', ctrlWrapper(getContactsByIdController));

export default contactsRouter;
