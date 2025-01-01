import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			{/* header */}
			<HeaderComponent />

			{/* landing section */}
			<div className='column items-center py-10' id='banner'>
				<div className='column__left'>
					<h1>Revolutionize Your Business</h1>
					<h1>with AI-Powered Solutions</h1>
					<p className='column__desc'>
						Unlock the potential of artificial intelligence to streamline
						operations, enhance decision-making, and drive growth. From
						predictive analytics to custom automation, our cutting-edge AI
						services are designed to transform the way you work
					</p>
					<p className='column__cta'>
						Get Started Today – Schedule Your Free Consultation
					</p>
				</div>
				<div className='column__right'>
					<picture>
						<Image src='/images/bot.png' alt='bot' width={550} height={550} />
					</picture>
				</div>
			</div>

			{/* services */}
			<div className='py-10 vertical-gap-40' id='services'>
				<h2>Our services</h2>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/service-1.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Virtual assistance as a service</h3>
						<p>
							Boost productivity and streamline your business with our
							professional Virtual Assistance services. From administrative
							tasks and customer support to social media management and
							specialized projects, our skilled VAs handle it all.
						</p>
						<p>
							Enjoy flexible plans, cost-effective solutions, and 24/7 support
							tailored to your needs. Focus on growing your business while we
							handle the details.
						</p>
						<p className='column__cta'>Contact us to get started today!</p>
					</div>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/service-2.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Prototyping as a Service</h3>
						<p>
							Turn your ideas into reality with our Prototyping as a Service.
							Whether it’s a product, app, or design concept, we help you
							visualize, test, and refine your vision quickly and efficiently.
						</p>
						<p>
							Our expert team delivers high-quality prototypes tailored to your
							specifications, ensuring faster development cycles and better
							decision-making. From concept to execution, we’re here to bring
							your innovation to life.
						</p>
						<p className='column__cta'>
							Let’s build your vision—contact us today!
						</p>
					</div>
				</div>
			</div>

			{/* past events */}
			<div className='py-10 vertical-gap-40' id='events'>
				<div>
					<h2>Past events</h2>
					<p className='text-center text-sm mt-4'>
						Uniting AI minds to explore advancements and applications.
					</p>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-event-1.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Discover a Thriving AI Community</h3>
						<p>
							Our past events and workshops have created a vibrant space for
							innovation and connection. Bringing together AI enthusiasts,
							researchers, and professionals, we’ve cultivated a community
							passionate about exploring the transformative power of artificial
							intelligence.
						</p>
					</div>
				</div>
				<div className='column column-reverse'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-event-2.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Explore Advanced AI Applications</h3>
						<p>
							For those ready to take their skills further, our Deep Learning
							Applications sessions focus on real-world projects. From image
							recognition to natural language processing, these workshops help
							participants apply neural networks to solve practical challenges.
						</p>
					</div>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-event-3.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Gain Insights from Industry Experts</h3>
						<p>
							Many of our workshops feature guest speakers and panels with
							leading AI professionals. These sessions provide invaluable
							insights into emerging technologies, industry trends, and the
							future of artificial intelligence.
						</p>
					</div>
				</div>
			</div>

			{/* customer feedback */}
			<div className='column py-10' id='feedback'>
				<div className='column__left'>
					<div className='flex flex-col items-center sticky top-28 -z-10'>
						<p className='text-2xl font-bold'>Customers</p>
						<p className='text-2xl font-bold text-white bg-black px-3 py-1 rounded-xl'>
							Feedback
						</p>
					</div>
				</div>
				<div className='column__right vertical-gap-40'>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-1.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p>Blake Weston, Find Fill Storage</p>
							<div className='flex items-center gap-1'>
								<picture>
									<Image
										src='/images/star.svg'
										alt='avatar 1'
										style={{ width: 18, height: 18 }}
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
							</div>
							<p>
								I’m a solo entrepreneur and not very good with tech. AI
								solutions made it easy, mentoring me through everything. Highly
								recommend!
							</p>
						</div>
					</div>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-2.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p>Sarah Scaife, Product owner, BAXTA</p>
							<div className='flex items-center gap-1'>
								<picture>
									<Image
										src='/images/star.svg'
										alt='avatar 1'
										style={{ width: 18, height: 18 }}
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
							</div>
							<p>
								We’re extremely impressed with AI solutions technical skill, and
								ability to adapt, iterate, and learn new skills.
							</p>
						</div>
					</div>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-3.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p>Mike Fields, Director, Care Careers</p>
							<div className='flex items-center gap-1'>
								<picture>
									<Image
										src='/images/star.svg'
										alt='avatar 1'
										style={{ width: 18, height: 18 }}
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
							</div>
							<p>
								Exceptional AI services that streamlined our processes and
								delivered impressive results!
							</p>
						</div>
					</div>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-4.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p>John doe, Developer, Cargo</p>
							<div className='flex items-center gap-1'>
								<picture>
									<Image
										src='/images/star.svg'
										alt='avatar 1'
										style={{ width: 18, height: 18 }}
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
								<picture>
									<Image
										src='/images/star.svg'
										style={{ width: 18, height: 18 }}
										alt='avatar 1'
										width={18}
										height={18}
									/>
								</picture>
							</div>
							<p>
								The AI services were innovative and effective, significantly
								improving our workflows and delivering great results.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* upcoming events */}
			<div className='py-10 flex flex-col items-center vertical-gap-40'>
				<h2>Upcoming events</h2>
				<picture>
					<Image
						src='/images/event-1.png'
						width={700}
						height={349}
						alt='event 1'
					/>
				</picture>
				<picture>
					<Image
						src='/images/event-2.png'
						width={700}
						height={349}
						alt='event 1'
					/>
				</picture>
			</div>

			<FooterComponent />
		</div>
	)
}
