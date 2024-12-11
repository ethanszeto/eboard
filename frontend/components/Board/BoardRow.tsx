import { Separator } from "@shadcn/separator"
import { BoardColumn } from "./BoardColumn"

export function BoardRow() {
    return (
        <>
            <div>
                <Separator orientation="vertical" />
                <BoardColumn />
                <Separator orientation="vertical" />
                <BoardColumn />
                <Separator orientation="vertical" />
                <BoardColumn />
                <Separator orientation="vertical" />
                <BoardColumn />
                <Separator orientation="vertical" />
                <BoardColumn />
            </div>
        </>
    )
}