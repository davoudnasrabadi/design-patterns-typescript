import { BrushTool } from "./BrushTool";
import { Canvas } from "./Canvas";

export class Main {

    public static main() {
        const canvas = new Canvas();
        canvas.setCurrentTool(new BrushTool());
        canvas.mouseDown();
        canvas.mouseUp();
        
    }
}
Main.main();
