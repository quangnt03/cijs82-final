export default function Header ({ appName }) {
	return (
		<div className='flex items-center justify-center w-full mb-3 ml-1'>
			<h4 className='font-sans font-semibold ml-3 text-4xl'>
				{appName || 'Todo list'}
			</h4>
		</div>
	);
}
