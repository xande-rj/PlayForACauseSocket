import { Injectable } from "@nestjs/common";

const PORT = process.env.PORT || 3000
@Injectable()
export class socketService {

    async port() {
        return `estou na port : ${PORT} `;
      }
}