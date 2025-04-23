import { ImSpinner9 } from 'react-icons/im';

export const Loader = () => {
	return (
		<div className='flex items-center justify-center h-screen dark:bg-gray-900'>
			<ImSpinner9 className='animate-spin text-cyan-700 dark:text-cyan-400' size={70} />
		</div>
	);
};