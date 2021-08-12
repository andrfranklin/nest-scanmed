import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async test() {
    const res = await admin
      .firestore()
      .collection('patients')
      .doc('gWjVYWuUKfWwo3xtFLNa')
      .get();

    console.log(res);

    return res.data();
  }
}
