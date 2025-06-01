import { Editor } from "./Editor";
import { History } from "./History";

export class Main {
    static main() {
        console.log("Memento example");
        const editor = new Editor();
        const history = new History();
        editor.setContent("A");
        history.push(editor.createState());
         
        editor.setContent("B");
        history.push(editor.createState());

        // undo last change
        editor.setContent("C");
        editor.restoreState(history.pop()!);
        
        console.log(editor.getContent()); // Output: B

    }
}

Main.main();
// Output: Memento example