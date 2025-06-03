
import { Tool } from './Tool';
export class SelectionTool implements Tool{
    mouseDown(): void {
        console.log("Selection tool activated");
    }
    mouseUp(): void {
        console.log("Draw dashed rectangle");
    }

}