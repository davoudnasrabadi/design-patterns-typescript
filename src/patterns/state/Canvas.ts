import { Tool } from "./Tool";
import { ToolType } from "./ToolType";

export class Canvas{

    private currentTool: Tool | undefined


    public getCurrentTool(): Tool | undefined {
        return this.currentTool;
    }

    public setCurrentTool(tool: Tool): void {
        this.currentTool = tool;
    }

    public mouseDown(): void {
        if (this.currentTool) {
            this.currentTool.mouseDown();
        } else {
            console.log("No tool selected");
        }
    }
    public mouseUp(): void {
        if (this.currentTool) {
            this.currentTool.mouseUp();
        } else {
            console.log("No tool selected");
        }
    }

}