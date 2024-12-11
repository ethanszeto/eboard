import Task from "@components/Task"
import type { TaskProps } from "@components/Task"


export function BoardColumn() {
    const taskExampleData1: TaskProps = {
        headline: "Send Photo Contest",
        description: "This is an example task",
        status: "New",
        team: "Photography"
      }
    
      const taskExampleData2: TaskProps = {
        headline: "How are meetings going?",
        description: "Are members engaged? Are they doing work?",
        status: "In Progress",
        team: "Web & Software"
      }

    return (
        <>
            <div>
                <Task {...taskExampleData1} />
                <Task {...taskExampleData2} />
            </div>
        </>
    )
}