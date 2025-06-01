import { EditorState } from "./EditorState";

export class History {
   private states: EditorState[] = [];


   public push(state: EditorState): void {
      this.states.push(state);
   }
    public pop(): EditorState | undefined {
      return this.states.pop();
    }   
}