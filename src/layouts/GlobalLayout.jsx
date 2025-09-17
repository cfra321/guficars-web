import React from 'react';

const GlobalLayout = ({ children }) => {
	return (
		<div className="global-layout">
			{/* Add global header, sidebar, or footer here if needed */}
			{children}
		</div>
	);
};

export default GlobalLayout;
