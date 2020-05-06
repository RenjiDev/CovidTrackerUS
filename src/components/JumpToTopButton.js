import React, { useEffect, useState } from 'react';
import Jump from 'jump.js';

const JumpToTopButton = () => {
	const [renderButton, setRenderButton] = useState(false);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.scrollY > 300) {
				if (!renderButton) {
					setRenderButton(true);
				}
			}

			if (window.scrollY < 300) {
				if (renderButton) {
					setRenderButton(false);
				}
			}
		});
	}, [renderButton]);

	return (
		<div>
			{renderButton ? (
				<div
					className='jtt-container fade-in fade-out hvr-grow'
					onClick={() => Jump('.ldg-root-container')}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='34'
						height='34'
						viewBox='0 0 24 24'
					>
						<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z' />
					</svg>
				</div>
			) : null}
		</div>
	);
};

export default JumpToTopButton;
