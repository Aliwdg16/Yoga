function AboutUsSection() {

	return (
		<div className="bg-[#b5f0db] relative overflow-hidden">
			<img src="src/assets/lotus_section_3.png" alt="background" className="absolute w-full h-full object-contain -bottom-[5rem] z-0 object-bottom"/>

			<div className="relative z-10 mx-auto max-w-[400px] sm:max-w-[800px] lg:max-w-[1200px] py-12 px-8 md:py-16 xl:py-20 text-[#473E59] text-center md:text-lg lg:text-xl">
				<h2 className="uppercase text-3xl lg:text-5xl font-bold">About Us</h2>
				<p className="py-4 sm:py-8 max-w-[700px] mx-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
				<div className="grid items-stretch gap-4 lg:gap-8 xl:gap-12 grid-cols-1 sm:grid-cols-3">

					<div className="rounded-lg overflow-hidden bg-white">
						<div className="aspect-square overflow-hidden">
							<img src="src/assets/image_about_us_1.jpg" alt="yoga practice 1" className="object-cover w-full h-full"/>
						</div>
						<div className="p-4 pb-6">
							<h3 className="text-xl font-medium uppercase">Weekly Yoga</h3>
							<p className="pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
						</div>
					</div>

					<div className="rounded-lg overflow-hidden bg-white">
						<div className="aspect-square overflow-hidden">
							<img src="src/assets/image_about_us_2.jpg" alt="yoga practice 2" className="object-cover w-full h-full"/>
						</div>
						<div className="p-4 pb-6">
							<h3 className="text-xl font-medium uppercase">Monthly Yoga</h3>
							<p className="pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
						</div>
					</div>

					<div className="rounded-lg overflow-hidden bg-white">
						<div className="aspect-square overflow-hidden">
							<img src="src/assets/image_about_us_3.jpg" alt="yoga practice 3" className="object-cover w-full h-full"/>
						</div>
						<div className="p-4 pb-6">
							<h3 className="text-xl font-medium uppercase">Monthly Yoga</h3>
							<p className="pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default AboutUsSection;
