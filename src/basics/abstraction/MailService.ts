 export class MailService {

     public sendEmail(): void {
         console.log(`Hi`);

         this.authenticate();
         // send email logic here
         console.log(`Email sent successfully!`);
         this.disconnect
     }

     private connect(): void {
         console.log(`Connecting to mail server...`);
     }

     private disconnect(): void {
         console.log(`Disconnecting from mail server...`);
     }

     private  authenticate(): void {
         console.log(`Authenticating...`);
     }
 }


