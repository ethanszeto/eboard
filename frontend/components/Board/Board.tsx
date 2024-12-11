import { Semester } from "@components/types"
import { BoardRow } from "./BoardRow"

export type BoardProps = {
    year: number,
    semester: Semester,
    week: number,
}

export function Board() {
    return (
        <>
            <BoardRow />
        </>
    )
}