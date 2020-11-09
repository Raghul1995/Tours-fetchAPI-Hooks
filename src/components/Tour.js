import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTours }) {
	const [ readMore, setReadMore ] = useState(true);
	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<div className="tour-price">KR {price}</div>
				</div>
				<p>{readMore ? info : info.substring(0, 150)}</p>
				<button onClick={() => setReadMore(!readMore)}> {readMore ? 'Show Less' : 'Show More'}</button>
				<button className="del-btn" onClick={() => removeTours(id)}>
					
					Not interested
				</button>
			</footer>
		</article>
	);
}

export default Tour;
