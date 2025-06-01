import { MailService } from "./MailService";

export class Main {
    static main() {
        console.log("Encapsulation example");
        const mailService = new MailService();
        mailService.sendEmail()
    }
}

Main.main();
