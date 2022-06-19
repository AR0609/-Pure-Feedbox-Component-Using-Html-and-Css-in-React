import React from 'react';
import propTypes from 'prop-types';
import './feedbox.scss';

const Feedbox = ({ type = 'Success', desc = '', Icon = '' }) => {
	return (
		// <div className="main-box">
		// 	<div className={`box-icon ${type}`}>{Icon && Icon}</div>
		// 	<div className="box-content">
		// 		<div className="box">
		// 			<p className="box-text">{type} Message</p>
		// 			{desc && <span className="box-desc">{desc}</span>}
		// 		</div>
		// 	</div>
		// </div>
		<>
			<div className="feedbox">
				<div className={`imagebox ${type}`}>{Icon && Icon}</div>
				<div className="content-box">
					<p className="box-text">{type} Message</p>
					{desc && <span className="box-desc">{desc}</span>}
				</div>
			</div>
		</>
	);
};

export default Feedbox;
Feedbox.propTypes = {
	type: propTypes.string,
	Icon: propTypes.bool,
	desc: propTypes.string,
};
