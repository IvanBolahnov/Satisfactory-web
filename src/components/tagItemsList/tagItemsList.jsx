import "./tagItemsList.css"

const TagItemList = ({ items, tag }) => {
	return (
		<div className="tagItemList">
			<h3 className="tagItemList__tag">{tag}</h3>
			{Object.keys(items).map((item) => {
				if (items[item].tag == tag) {
					return (
						<div key={item}>
							<img
								src={`/src/assets/images/items/${items[item].imgUrl}`}
								width={50}
								height={50}
								alt={item}
							/>
							<span>{`${items[item].count.toFixed(1)} (${
								items[item].income
							}/min)`}</span>
						</div>
					)
				}
			})}
		</div>
	)
}

export default TagItemList
