interface Props {
  tasks: string[];
}
export default function List({ tasks }: Props) {
  return (
    <>
      {
        tasks.map((task, index) => (
          <div key={index} className="border-2 p-5 rounded">
            <span>{task}</span>
          </div>
        )
        )
      }
    </>
  )
}
