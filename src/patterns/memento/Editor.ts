import { EditorState } from "./EditorState";

export class Editor {
    private content: string;

    constructor() {
        this.content = "";
    }

    setContent(content: string): void {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
    createState(): EditorState {
        return new EditorState(this.content);
    }
    restoreState(state: EditorState): void {
        this.content = state.getContent();
    }
}
