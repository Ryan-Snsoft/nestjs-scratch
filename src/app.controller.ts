import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/hello')
    getRootRoute() {
        return "Hello from here";
    }
    
    @Get('/bye')
    getByeRoute() {
        return "byebyebye byebyebye"
    }
}