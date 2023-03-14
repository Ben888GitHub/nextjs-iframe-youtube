import Iframe from 'react-iframe';

const ReactIFrame = () => {
	return (
		<>
			<Iframe
				url="https://www.youtube-nocookie.com/embed/cWMcSiRcbC8"
				// width="640px"
				// height="320px"
				id=""
				className="lg:w-[640px] lg:h-[320px] md:w-[640px] md:h-[320px] mx-auto aspect-video w-full "
				display="block"
				position="relative"
				title="react yt"
				overflow="hidden"
			/>
		</>
	);
};

export default ReactIFrame;
