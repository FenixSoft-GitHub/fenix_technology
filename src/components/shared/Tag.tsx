type TagType = 'nuevo' | 'agotado';

interface Props {
    contentTag: TagType;
}

const getTagColor = (content: TagType) => {
    const lowerContent = content.toLowerCase();
    if (lowerContent === 'nuevo') return 'bg-cyan-300 text-black outline-cyan-300';
    if (lowerContent === 'agotado') return 'bg-red-500 text-white outline-red-500';

    return 'bg-gray-500';
};

const Tag = ({ contentTag }: Props) => {
    return (
        <div
            className={`w-fit px-3 py-1 rounded-full shadow-lg outline-2 outline-offset-2 ${getTagColor(contentTag)}`}
        >
            <p className="uppercase text-xs font-semibold">{contentTag}</p>
        </div>
    )
}

export default Tag