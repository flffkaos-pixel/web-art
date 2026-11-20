import { guard } from './_botblock.js';

export const onRequest = (context) => guard(context);
