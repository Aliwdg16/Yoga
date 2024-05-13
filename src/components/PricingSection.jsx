function PricingSection() {

	return (
		<div className="bg-[#b5f0db]">

			<div className="bg-[#b5f0db] relative overflow-hidden">

				<div className="relative z-10 mx-auto max-w-[400px] sm:max-w-[800px] lg:max-w-[1200px] py-12 px-8 md:py-16 xl:py-20 text-[#473E59] text-center md:text-lg lg:text-xl">
					<h2 className="uppercase text-5xl font-bold">Pricing</h2>
					<p className="py-4 sm:py-8 max-w-[700px] mx-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

					<div className="grid gap-6 lg:gap-8 xl:gap-12 grid-cols-1 sm:grid-cols-3">


						<div className="rounded-lg overflow-hidden bg-white px-4 py-6">
							<h3 className="text-2xl font-bold">Bronze</h3>
							<img src="src/assets/medal_icon.png" alt="medal" className="mx-auto py-4"/>
							<span className="text-2xl font-bold">$105.00</span>
							<p className="py-4">Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
							<button>Order now</button>
						</div>

						<div className="rounded-lg overflow-hidden bg-white px-4 py-6">
							<h3 className="text-2xl font-bold">Gold</h3>
							<img src="src/assets/medal_icon.png" alt="medal" className="mx-auto py-4"/>
							<span className="text-2xl font-bold">$105.00</span>
							<p className="py-4">Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
							<button>Order now</button>
						</div>

						<div className="rounded-lg overflow-hidden bg-white px-4 py-6">
							<h3 className="text-2xl font-bold">Platinum</h3>
							<img src="src/assets/medal_icon.png" alt="medal" className="mx-auto py-4"/>
							<span className="text-2xl font-bold">$105.00</span>
							<p className="py-4">Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
							<button>Order now</button>
						</div>

					</div>
				</div>
			</div>

		</div>
	)
}

export default PricingSection;
