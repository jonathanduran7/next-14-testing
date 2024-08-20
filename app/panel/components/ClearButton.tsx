interface Props {
  resetList: () => void;
}

export default function ClearButton({ resetList }: Props) {
  return <button onClick={resetList} className="bg-red-400 w-[110px] rounded h-[40px] m-auto">Clear</button>
}
