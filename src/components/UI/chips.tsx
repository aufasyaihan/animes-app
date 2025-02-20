interface ChipsProps {
    title: string | undefined;
}

const Chips : React.FC<ChipsProps> = ({ title }) => {
  return (
    <div className="flex items-center bg-gray-600 p-2 text-xs rounded text-gray-300">
      {title}
    </div>
  )
};

export default Chips;
