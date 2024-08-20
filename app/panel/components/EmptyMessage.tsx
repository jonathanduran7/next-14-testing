interface Props {
  message?: string;
}

export default function EmptyMessage({ message }: Props) {
  return (
    <div className="text-center mt-5">{message || 'Default message'}</div>
  )
}
